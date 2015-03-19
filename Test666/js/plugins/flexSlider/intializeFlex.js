

function initFlexSlider() {


    window.jQuery && jQuery(function ($) {
        // Initialize FlexSlider
        if ($.fn.flexslider) {
            // Load the following options from the HTML5 data-
            // attributes. If you plan to use any other options,
            // they must be listed in this array as well.
            var win = $(window),
                attrs = ['direction', 'directionNav', 'smoothHeight', 'slideshowSpeed'];
            $('.flexslider').each(function () {
                var options = {
                    animation: 'slide',
                    itemWidth: 210
                    
                    
                },
                    el = $(this),
                    i = 0,
                    attr, val;
                while (attr = attrs[i++]) {
                    // jQuery will handle converting the camelcase
                    // option names into proper HTML5 data- attributes
                    // (e.g. 'directionNav' =>
                    // 'data-flexslider-direction-nav')
                    val = el.data('flexslider-' + attr);
                    if (typeof val !== 'undefined') {
                        options[attr] = val;
                    }
                }
                // Extra code to fix vertical slider
                if (options.direction === 'vertical') {
                    function fixHeight() {
                        var maxHeight = 0,
                            slides = el.find('.slides'),
                            data = el.data('flexslider');
                        slides.children()
                          .height('auto')
                          .each(function () {
                              maxHeight = Math.max(maxHeight, $(this).height());
                          })
                          .height(maxHeight);
                        slides.height(maxHeight);
                        data && (data.h = maxHeight);
                    }
                    // Run fixHeight after a few important points in
                    // the page load process (this seems like a lot,
                    // but so far seems to catch everything that could
                    // cause sizing issues)
                    // After page load is complete
                    win.load(function () {
                        fixHeight();
                        // One second after page load is complete
                        setTimeout(fixHeight, 1000);
                    });
                    // Immediately after window resize (before
                    // FlexSlider's resize handler)
                    win.resize(fixHeight);
                    // If jQuery throttle is available, 250ms after
                    // last resize event)
                    $.throttle && win.resize($.throttle(250, function () {
                        setTimeout(fixHeight, 250);
                    }));
                    // And 250ms after $.ready
                    setTimeout(fixHeight, 250);
                }
                el.flexslider(options);
                if (options.direction === 'vertical') {
                    fixHeight();
                }
            });
        }
    });
           
};



