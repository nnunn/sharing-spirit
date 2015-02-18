$( document ).ready(function() {
	var $container = $('#video-container').isotope({
  	itemSelector: '.video-card',
  	layoutMode: 'fitRows'
	});
	$('#filters').on( 'click', 'a', function() {
  		var filterValue = $(this).attr('data-filter');
  		$container.isotope({ filter: filterValue });
	});
	$('#lg-nav a').on('click', function() {
		var link = this;
    	$.smoothScroll({
      		scrollTarget: link.hash
    	});
    	return false;
  	});
});