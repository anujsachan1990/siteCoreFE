/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console, Modernizr */

/*
 * sample-module.js
 *
 * @project:    SN-FE-QS
 * @requires:   jQuery 1.11.1
 * @date:       xxxx-xx-xx
 * @author:     name, name@sapient.com
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
