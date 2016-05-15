/**
 * 
 * Function that moves Elements when user scrolls
 * 
 */
(function() {
  // save all elements with .scroll
  var scrollElements = document.getElementsByClassName("scroll");
  var welcome = document.getElementById("welcome");
  var passedScroll = [];
  var scrolling = [];
  var didScroll = false;

  window.onscroll = doThisStuffOnScroll;

  function doThisStuffOnScroll() {
    didScroll = true;
  }

	setInterval(function() {
    if(didScroll) {
      didScroll = false;

      WINDOW_SCROLL_TOP = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      // check if the element is in view and do the trick
      // runs a for loop on every element executing what is in the function 
      forEach(scrollElements, function (index, element) {
        // get custom speed
        var dataSpeed = element.getAttribute("data-scroll--speed") || 100;
        // stores the position values of the current element
        var rect = element.getBoundingClientRect();
        
        // if the bottom position of the element is higher than 0, thus in view
        if( rect.bottom >= 0 && rect.top < welcome.offsetHeight ) {
          // get the position of screen to substract that to the scrolling only get it the first time the object is in view
          if (!passedScroll[index]) {
            passedScroll[index] = WINDOW_SCROLL_TOP;
          }
          
          // Animating Regular scrolls and lazyloads
          if(element.classList.contains("scroll--permanent")) {
            // pixel position of window scroll (i.e. 500) - already passed pixels until object was seen (i.e. 50) / speed
            scrolling[index] = ((WINDOW_SCROLL_TOP - passedScroll[index]) / dataSpeed) * -1;
            element.style.transform = "translate3D(0, " + scrolling[index] + "%, 0)";
          } else if(element.classList.contains("scroll--writer") && !element.classList.contains("scroll--writer-start")) {
            element.classList.add('scroll--writer-start');
            WRITER_OPEN = true;
          }
        } else if(element.classList.contains("scroll--writer") && element.classList.contains("scroll--writer-start")) {
          element.classList.remove('scroll--writer-start');
          WRITER_OPEN = false;
        }
      });
      
      if (WINDOW_SCROLL_TOP) {
        
      }

    }
  }, 20);

})();