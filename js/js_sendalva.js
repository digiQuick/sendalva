"use strict";

$(document).ready(function() {

    var icon = $(".icon");
    var nav = $(".nav_query");

    icon.on("click", function(){
        nav.slideToggle();
    });

});