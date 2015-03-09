

    $(document).ready(function () {
        setTimeout();
    })

    setTimeout(function () {

        if ($("#slider").children.length > 0) {

            var slider = $('#slider').leanSlider({
                directionNav: '#slider-direction-nav',
                controlNav: '#slider-control-nav'
            });

        }

    }, 300);


