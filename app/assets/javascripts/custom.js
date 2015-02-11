$( document ).ready(function() {
	var $container = $('#video-container');
	$container.isotope({
  		itemSelector: '.video-card',
  		layoutMode: 'fitRows'
	})
	$('#filters').on( 'click', 'a', function() {
  		var filterValue = $(this).attr('data-filter');
  		$container.isotope({ filter: filterValue });
	});
});