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
    $('#about').waypoint({
    handler: function(direction) {
        if (direction === 'down'){
          $( ".about-text" ).fadeIn(1000);
        }else{
          $( ".about-text" ).fadeOut(1000);
        }
    },
    offset: '60%'
  })
});