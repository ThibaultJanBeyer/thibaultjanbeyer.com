/**
 * 
 * Lazyloading images
 *  
 */
(function () {
	var lazyElements = document.querySelectorAll('img[data-src]');
	var welcome = document.getElementById('welcome');

	// Lazyload already some works so that the user immediately see some works without waiting
	for (var i = 0; i < 3; i++) {
		lazyElements[i].setAttribute('src', lazyElements[i].getAttribute('data-src'));
		lazyElements[i].onload = removeAttribute(lazyElements[i]);
	}

	function removeAttribute(el) {
		setTimeout(function () {
			if (isImageOk(el)) {
				el.classList.add('loaded');
			} else {
				removeAttribute(el);
			}
		}, 2000);
	}

	// Solution to check wether an IMG is loaded via http://stackoverflow.com/a/1977898/3712591
	function isImageOk(img) {
    // During the onload event, IE correctly identifies any images that weren’t downloaded as not complete. Others should too. Gecko-based browsers act like NS4 in that they report this incorrectly.
    if (!img.complete) {
			return false;
    }
    // However, they do have two very useful properties: naturalWidth and naturalHeight. These give the true size of the image. If it failed to load, either of these should be zero.
    if (typeof img.naturalWidth !== 'undefined' && img.naturalWidth === 0) {
			return false;
    }
    // No other way of checking: assume it’s ok.
    return true;
	}

	setInterval(function () {
		// check every 1 second if more-works is open
		if (WORKS_OPEN === true) {
			forEach(lazyElements, function (index, element) {
				// stores the position values of the current element
				var rect = element.getBoundingClientRect();
				// if the bottom position of the element is higher than 0 and smaller, thus in view and the top is less than the height of the welcome container, which is 100vh
				if (rect.bottom >= 0 && rect.top < welcome.offsetHeight) {
					// pick all elements that have the data-src attribute
					if (element.hasAttribute('data-src') === true) {
						// and set the normal src attribute to that one
						element.setAttribute('src', element.getAttribute('data-src'));
						// when loaded call the removeAttribute function which checks if the img is fully loaded
						element.onload = removeAttribute(element);
					}
				}
			});
		}
	}, 1000);

})();