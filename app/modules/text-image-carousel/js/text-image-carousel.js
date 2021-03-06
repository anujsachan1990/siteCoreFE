/*jslint forin: true, sloppy: true, unparam: true, vars: true, white: true, nomen: true, plusplus:true */
/*global window, document, jQuery, console */
/*
 * textImageCarousel.js
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
 * @namespace textImageCarousel
 * @memberof sunSpr
 * @property {null} property - description of property
 */

sunSpr.textImageCarousel = (function(window, $, namespace) {
    'use strict';

    // public methods
    var init,

        // private methods
        _privateMethod,

        // properties
        property = null,
        interval = null;

    /**
     * @method _privateMethod
     * @description Description of _privateMethod
     * @memberof sunSpr.textImageCarousel
     */
   
    function startSlider() {
        interval = setInterval(function() {
            slideLeft();
        }, 3000);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    function attachEvents(){

    $('body').on('mouseover', '.section--services .boxes', function() {
            stopSlider();
        }).on('mouseout', '.section--services .boxes', function() {
            startSlider();
        });

    $('body').on('click', '.section--services .box', function() {
        stopSlider();
        if ($(this).hasClass('box--top')) {
            slideRight();
        } else if ($(this).hasClass('box--right')) {
            slideCross();
        } else if ($(this).hasClass('box--bottom')) {
            slideLeft();
        }
    });

    } 

    function slideLeft() {
        var oldtop = $('.section--services .box--top');
        var oldright = $('.section--services .box--right');
        var oldbottom = $('.section--services .box--bottom');
        var oldleft = $('.section--services .box--left');

        oldtop.removeClass('box--top').addClass('box--right');
        oldright.removeClass('box--right').addClass('box--bottom');
        oldbottom.removeClass('box--bottom').addClass('box--left');
        oldleft.removeClass('box--left').addClass('box--top');
    }

    function slideRight() {

        var oldtop = $('.section--services .box--top');
        var oldright = $('.section--services .box--right');
        var oldbottom = $('.section--services .box--bottom');
        var oldleft = $('.section--services .box--left');

        oldtop.removeClass('box--top').addClass('box--left');
        oldleft.removeClass('box--left').addClass('box--bottom');
        oldbottom.removeClass('box--bottom').addClass('box--right');
        oldright.removeClass('box--right').addClass('box--top');

    }

    function slideCross() {

        var oldtop = $('.section--services .box--top');
        var oldright = $('.section--services .box--right');
        var oldbottom = $('.section--services .box--bottom');
        var oldleft = $('.section--services .box--left');

        oldtop.removeClass('box--top').addClass('box--bottom');
        oldleft.removeClass('box--left').addClass('box--right');
        oldbottom.removeClass('box--bottom').addClass('box--top');
        oldright.removeClass('box--right').addClass('box--left');

    }

    /**
     * @method init
     * @description Description of init
     * @memberof sunSpr.textImageCarousel
     * @example
     * sunSpr.textImageCarousel.init()
     */
    init = function() {

        startSlider();
        attachEvents();

    };

    // Public API
    return {
        init: init
    };

}(this, jQuery, 'sunSpr'));

jQuery(sunSpr.textImageCarousel.init());