/**
 * 
 * Toggle Content on button press
 * use "toggle--button" as class for your handler then "toggle--close" or "toggle--open" to have it opened or closed at start
 * Important: for simplicity, the content to toggle has to be direct sibling to the button
 *  
 */
(function() {
	[].forEach.call(document.querySelectorAll('.toggle--button'), function (el) {
  	el.addEventListener('click', function() {
			toggle( this );
		}, false);
	});
	
	function toggle( el ) {
		var sibling = el.nextElementSibling;
		
		if ( sibling.classList.contains( "toggle--close" ) ) {

			el.classList.add('toggle--button-close');
			sibling.classList.remove( 'toggle--close' );
			sibling.classList.add( 'toggle--open' );

		} else if ( sibling.classList.contains( "toggle--open" ) ) {

			sibling.classList.remove( 'toggle--open' );
			sibling.classList.add( 'toggle--close' );
			el.classList.remove('toggle--button-close');

		} else {

			console.log('no direct sibling found');

		}
	}

})();