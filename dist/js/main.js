/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */
/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */
var sunSpr = window.sunSpr || {};

/**
 * @namespace SampleModule
 * @memberof sunSpr
 * @property {null} property - description of property
 */
sunSpr.AjaxService = (function(window, $, namespace) {
    'use strict';

    // public methods
    var init,

        // private methods
        _privateMethod,

        // properties
        Property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.SampleModule
     */
    _privateMethod = function() {


        Property = function() {
            var self = this,
                requestQueue = [],
                defaults = {
                    url: "",
                    data: {},
                    dataType: "JSON",
                    before: {},
                    success: {},
                    type: "GET",
                    cache: true,
                    contentType: 'application/json',
                    crossDomain: false,
                    timeout: 60000,
                    defaultErrorHandler: true,
                    error: {},
                    mime: "application/json",
                    preLoader: false,
                    preLoaderTarget: null,
                    allowMultiple: false,
                    loadTarget: ""
                },
                defaultPostOptions = $.extend(true, {}, defaults, {
                    type: "POST"
                }),
                defaultDeleteOptions = $.extend(true, {}, defaults, {
                    type: "DELETE"
                });

            var ajax = function(serviceName, options) {

                var serviceURL = options.url,
                    ajaxParams,
                    successCallback = options.success,
                    errorCallBack = options.error;

                var successHandler = function(response, textStatus, jqXHR) {

                    requestQueue[serviceName] = false;

                    var requestHeaders = jqXHR.getResponseHeader('asx-redirect-url');

                    if (requestHeaders !== null && requestHeaders !== '') {
                        window.location.href = requestHeaders;
                        return;
                    }

                    if (options.ignoreResponseData) {
                        if (typeof successCallback === "function") {
                            successCallback(response, options);
                        }
                        return;

                    }
                    //Show generic error message if response has "HTML or BODY" tag in response Object
                    if (options.format === 'html' && response.indexOf('<body') !== -1 && response.indexOf('<html') !== -1) {
                        if (options.execDefaultErrorHandler === true || typeof errorCallBack === "function") {
                            genericErrorHandler(errorCallBack, options);
                        }
                        return;
                    }


                    if (response !== "" && response !== null) {

                        onValidatedResponse(options, response, serviceName, successCallback);

                    } else {
                        if (options.defaultErrorHandler === true || typeof errorCallBack === "function") {
                            closePreloader(options);
                            genericErrorHandler(errorCallBack, options);
                        }
                    }
                };

                if (serviceURL && serviceURL !== "") {
                    //abort the service if called multiple times before one service cycle ends
                    if (requestQueue[serviceName] && options.allowMultiple === false) {
                        requestQueue[serviceName].abort();
                    }
                    ajaxParams = {
                        url: options.url,
                        cache: options.cache,
                        dataType: options.dataType,
                        data: options.data,
                        type: options.type,
                        mimeType: options.mime,
                        status: {
                            404: function() {
                                //track down what needs to be done
                            },
                            302: function() {
                                // this is good for what?
                            }
                        },
                        beforeSend: function(jqXHR, settings) {
                            if (options.preLoader === true && $(options.preLoaderTarget)[0]) {
                                $(options.preLoaderTarget).addClass("loading");
                            }
                            if (typeof options.beforeSend === "function") {
                                options.beforeSend(jqXHR, settings);
                            }
                        },
                        success: successHandler,
                        error: function(xhr, status, error) {
                            requestQueue[serviceName] = false;
                            var respObj = JSON.parse(xhr.responseText || {});
                            if (respObj.status !== 'undefined' && respObj.status === "ERROR") {
                                genericServerFailureHandler(respObj, options);
                            } else if (options.defaultErrorHandler === true || typeof errorCallBack === "function") {
                                genericErrorHandler(errorCallBack, options, error, serviceName);
                            }

                        },
                        timeout: options.timeout
                    };


                    requestQueue[serviceName] = $.ajax(ajaxParams);


                } else {
                    console.log("Service URL missing in parameters.");
                }
            };

            var onValidatedResponse = function(options, response, serviceName, successCallback) {
                // close preloader
                closePreloader(options);

                //Show genric error message if response status is GENERIC_ERROR
                if (hasProperty(response, "status") && typeof response.status === 'string' && response.status.toUpperCase() === "ERROR") {
                    genericServerFailureHandler(response, options, serviceName);
                    return;
                }

                if (options.loadTarget !== "" && options.loadTarget[0]) {
                    options.loadTarget.append(response);
                }

                if (typeof successCallback === "function") {
                    successCallback(response, options);
                }
            };

            var hasProperty = function(obj, key) {
                return Object.prototype.hasOwnProperty.call(obj, key);
            };

            var closePreloader = function(options) {
                var $preLoaderTarget = $(options.preLoaderTarget);
                if (options.preLoader === true && $preLoaderTarget[0]) {
                    $preLoaderTarget.removeClass("loading");
                }
            };

            /**
             * Need to show generic server errors based on
             * @param options
             * @param responseObj
             */
            var genericServerFailureHandler = function(responseObj, options) {

            };

            var genericErrorHandler = function(callback, options, error, serviceName) {

                if (typeof callback === "function") {
                    callback(error, options);
                } else {
                    genericServerFailureHandler({
                        "message": "Something went wrong. Please try again later."
                    }, options);
                    console.error("Ajax call " + serviceName + " failed because of response contains :" + error);
                }
            };


            self.get = function(serviceName, options) {
                if (typeof serviceName === undefined || serviceName === "") {
                    console.log("Be good and let us know the serviceName");
                }

                options = $.extend(true, {}, defaults, options);

                ajax(serviceName, options);

                return serviceName;
            };

            /**
             * Post a form, with data params
             * Service names are mandatory - this would make sure no duplicate call are made.
             * @param serviceName
             * @param options
             */
            self.post = function(serviceName, options) {

                //make sure you have a service name
                if (typeof serviceName === undefined || serviceName === "") {
                    console.log("Be good and let us know the serviceName");
                    return;
                }
                //make sure you have data to be sent.
                if (options.data === null || options.data === {}) {
                    return;
                }

                options = $.extend(true, {}, defaultPostOptions, options);

                ajax(serviceName, options);

                return serviceName;
            };

            self.deleteData = function(serviceName, options) {
                if (typeof serviceName === undefined || serviceName === "") {
                    console.log("Be good and let us know the serviceName");
                }

                options = $.extend(true, {}, defaultDeleteOptions, options);

                ajax(serviceName, options);

                return serviceName;
            };
        };

        return new Property();
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.SampleModule
     * @example
     * sunSpr.SampleModule.init()
     */
    init = function() {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.AjaxService.init());;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace Algos
 * @memberof sunSpr
 * @property {null} property - description of property
 */
sunSpr.Algos = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Algos
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Algos
     * @example
     * sunSpr.Algos.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Algos.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console, Modernizr */

/*
 * sample-module.js
 *
 * @project:    SunSuper
 * @requires:   jQuery 1.11.1
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

/**
 * @namespace sunSpr
 */
var sunSpr = window.sunSpr || {};

/**
 * @namespace Global
 * @memberof sunSpr
 * @property {null} property - description of property
 */
sunSpr.Global = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Global
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Global
     * @example
     * sunSpr.Global.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Global.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace handlebarHelpers
 * @memberof sunSpr
 * @property {null} property - description of property
 */
sunSpr.handlebarHelpers = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.handlebarHelpers
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.handlebarHelpers
     * @example
     * sunSpr.handlebarHelpers.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.handlebarHelpers.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace Utils
 * @memberof sunSpr
 * @property {null} property - description of property
 */
sunSpr.Utils = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Utils
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Utils
     * @example
     * sunSpr.Utils.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Utils.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace Footer
 * @memberof sunSpr
 * @property {null} property - description of property
 */
 
sunSpr.Footer = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Footer
     */
    _privateMethod = function () {


        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Footer
     * @example
     * sunSpr.Footer.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Footer.init());
;
/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace Header
 * @memberof sunSpr
 * @property {null} property - description of property
 */
 
sunSpr.Header = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Header
     */
    _privateMethod = function () {


        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Header
     * @example
     * sunSpr.Header.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Header.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace Nav
 * @memberof sunSpr
 * @property {null} property - description of property
 */
 
sunSpr.Nav = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.Nav
     */
    _privateMethod = function () {


        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.Nav
     * @example
     * sunSpr.Nav.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.Nav.init());
;/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */

/*
 * sample-module.js
 * [ Description of the sample module script ]
 *
 * @project:    SunSuper
 * @date:       xxxx-xx-xx
 * @author:     Anuj Sachan, asachan@sapient.com
 * @licensor:   SAPIENNITRO
 * @namespaces: sunSpr
 */

var sunSpr = window.sunSpr || {};

/**
 * @namespace SampleModule
 * @memberof sunSpr
 * @property {null} property - description of property
 */
 
sunSpr.SampleModule = (function (window, $, namespace) {
    'use strict';

    // public methods
    var init,

    // private methods
        _privateMethod,

    // properties
        property = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.SampleModule
     */
    _privateMethod = function () {
        return property;
    };

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.SampleModule
     * @example
     * sunSpr.SampleModule.init()
     */
    init = function () {
        return _privateMethod();
    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.SampleModule.init());
