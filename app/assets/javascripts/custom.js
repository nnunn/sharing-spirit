$( document ).ready(function() {
	var $container = $('#video-container').isotope({
  	itemSelector: '.video-card',
  	layoutMode: 'fitRows'
	});
	$('#filters').on( 'click', 'a', function() {
  		var filterValue = $(this).attr('data-filter');
  		$container.isotope({ filter: filterValue });
	});
	$('#lg-nav a, .mv-brand a').on('click', function() {
		var link = this;
    	$.smoothScroll({
          speed: 200,
      		scrollTarget: link.hash,
    	});
    	return false;
  	});
  $('#video-container').waypoint({
    handler: function(direction) {
        if (direction === 'down'){
          $( ".mv-brand" ).show();
        }else{
          $( ".mv-brand" ).hide();
        }
    },
     offset: '40%'
  })
    $('.pane2').waypoint({
    handler: function(direction) {
        if (direction === 'down'){
          $( ".med-wheel" ).fadeIn(3000);
          $( ".about-text" ).fadeIn(1000);
        }else{
         
          $( ".about-text" ).fadeOut(1000);
        }
    },
    offset: '100%'
  })
    $('.pane3').waypoint({
    handler: function(direction) {
        if (direction === 'down'){
          $( ".partners-logo, .partners-images h3" ).fadeIn(3000);
          $( ".partners-text" ).fadeIn(500);
        }else{
          $( ".partners-logo, .partners-images h3" ).fadeOut(1000);
          $( ".partners-text" ).fadeOut(500);
        }
    },
    offset: '100%'
  })

});