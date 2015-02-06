$( document ).ready(function() {
	var $container = $('#video-container');
	$container.isotope({
  		itemSelector: '.video-card',
  		layoutMode: 'fitRows'
	})
});