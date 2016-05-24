
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
