/**
 * 
 * Toggle Content on button press
 * use "toggle--button" as class for your handler then "toggle--close" or "toggle--open" to have it opened or closed at start
 * Important: all this has to be within an element that has the "toggle--scope" element. The scope tells the plugin what element will be opened on button click (the one that is in the same scope as the button)
 *  
 */
(function() {
	var buttons = document.querySelectorAll('.toggle--button');
	var containers = document.querySelectorAll('.toggle');
	var scope;
	
	[].forEach.call( buttons, function ( el ) {
  	el.addEventListener( 'click', function() {
			toggle( this );
		}, false );
	} );
	
	function toggle( el ) {
		// set the scope variable to the element that has the .toggle--scope class)
		getParentScope( el, 'toggle--scope' );
		// get the element that will be toggled in that scope
		var toggleElement = scope.querySelector( ':scope > .toggle' );
		
		if ( toggleElement.classList.contains( "toggle--close" ) ) {

			el.classList.add('toggle--button-close');
			toggleElement.classList.remove( 'toggle--close' );
			toggleElement.classList.add( 'toggle--open' );

		} else if ( toggleElement.classList.contains( "toggle--open" ) ) {

			toggleElement.classList.remove( 'toggle--open' );
			toggleElement.classList.add( 'toggle--close' );
			el.classList.remove('toggle--button-close');

		} else {

			console.log('ERROR: function toggle() : Sorry ' + toggleElement + ' has neighter toggle--close nor toggle--open class.' );

		}
	}
	
	function getParentScope( element, classname, range = 4 ) {
		// check if current element has the searched class
    if ( element.classList.contains( classname ) ) {
			// if so, then return the current element (strangely this will return 'undefined' so as quick workaround it just sets the global scope variable to the element instead of returning it)
			scope = element;
			return element;
		} else {
			// if not check if we are still in search range
			// this integer will to prevent infinite loops if no parent with that class is found x level deep
			--range;
			if ( range > 0 ) {
				// if so redo everything with the parrent element and range -1
				getParentScope( element.parentNode, classname, range );
			} else {
				// if we are above range write an error
				console.log('ERROR: function getParentScope() : Sorry couldn’t find any parent with ' + classname + ' within the seleceted range.' );
			}
		}
	}

})();