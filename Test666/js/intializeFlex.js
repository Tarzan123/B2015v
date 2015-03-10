(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider;
 
  // tiny helper function to add breakpoints
   function getGridSize() {
			return 	(window.innerWidth < 600) ? 1 : 
					(window.innerWidth < 900) ? 2 : 3;
	
			/*( (window.innerWidth || document.documentElement.clientWidth) < 600) ? 1 : 
			( (window.innerWidth || document.documentElement.clientWidth) < 900) ? 2 : 3;*/
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
        $('.flexslider').flexslider({
          animation: "slide",
          animationSpeed: 400,
          animationLoop: true,
          itemWidth: 215,
          itemMargin: 0,
          minItems: getGridSize(), // use function to pull in initial value
          maxItems: getGridSize(), // use function to pull in initial value
          start: function(slider){
            $('body').removeClass('loading');
            flexslider = slider;
          }
        });
      });
  /*$window.load(onResize);
  
 /* function onResize () {
  $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 215,
      itemMargin: 0,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
	  directionNav: false;
	  start: function(slider){
		flexslider = slider;
		}
  });
  }*/
  
  // check grid size on resize event
  $window.resize (function() {
    var gridSize = getGridSize();
	
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
	
	//onResize();
  });
}());