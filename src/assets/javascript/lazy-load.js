/**
 * 
 * Lazyloading images
 *  
 */
(function() {
	var works = document.getElementById('more-works');
	var lazyElements = document.querySelectorAll('img[data-src]');
	var welcome = document.getElementById("welcome");
	var worksScrollTop;

	for (var i = 0; i < 3; i++) {
		lazyElements[i].setAttribute('src', lazyElements[i].getAttribute('data-src'));
		lazyElements[i].onload = removeAttribute(lazyElements[i]);
	}
	
	function removeAttribute(el) {
		setTimeout(function() {
			el.classList.add("loaded");
		}, 1000);
	}

	setInterval(function() {
		if ( worksOpen === true ) {
			// lazyload elements in view
			worksScrollTop = works.scrollTop;

			forEach(lazyElements, function (index, element) {
				// stores the position values of the current element
				var rect = element.getBoundingClientRect();
				// if the bottom position of the element is higher than 0, thus in view
				if( rect.bottom >= 0 && rect.top < welcome.offsetHeight ) {
					if ( element.hasAttribute('data-src') === true ) {
						element.setAttribute('src', element.getAttribute('data-src'));
						element.onload = removeAttribute(element);
					}
				}
			});
		}
	}, 1000);

})();