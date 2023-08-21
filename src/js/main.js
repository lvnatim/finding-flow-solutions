window.$ = window.jQuery = require('jquery');

import "./partials/accordion.js";
import "./partials/navigation.js";
import "./partials/tabs.js";
import $ from "jquery";

$(document).ready(function(){
    const $slider = $('.slider');

    if($slider.length) {
        $slider.slick({
            appendDots: $('.dots'),
            centerMode: true,
            centerPadding: '0',
            dots: true,
            slidesToShow: 1,
        });
    }
});