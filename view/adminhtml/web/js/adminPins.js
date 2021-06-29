define(['jquery', 'domReady!'], function ($) {
    'use strict';

    // Slide out Admin pins panel on hover
    $(".manickAdminPins .links").hover(
        function () {
            $(this).addClass("open")
        },
        function () {
            $(this).removeClass("open")
        }
    );
});
