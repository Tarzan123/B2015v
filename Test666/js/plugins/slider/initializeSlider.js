
$(document).ready(function () {


    setTimeout(function () {

        if ($("#slider").children.length > 0) {

            var slider = $('#slider').leanSlider({
                directionNav: '#slider-direction-nav',
                controlNav: '#slider-control-nav'
            });


          //  $.getScript("lean-slider.js");
        }

    }, 1000);

});



