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
