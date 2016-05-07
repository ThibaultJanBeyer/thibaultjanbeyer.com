/**
 * 
 * Things that happen when user scrolls
 * 
 */
(function() {
  // save all elements with .scroll
  var scrollElements = document.getElementsByClassName("scroll");
  var welcome = document.getElementById("welcome");
  var steps = welcome.offsetHeight / 12;
  // partage section in 9 to get 9 step, one for each img
  var step = [steps, steps * 2, steps * 3, steps * 4, steps * 5, steps * 6, steps * 7, steps * 8, steps * 9, steps * 10];
  var passedScroll = [];
  var scrolling = [];
  var stuck = false;
  var windowScrollTop;
  var inView = false;
  var didScroll = false;

  window.onscroll = doThisStuffOnScroll;

  function doThisStuffOnScroll() {
    didScroll = true;
  }

	setInterval(function() {
    if(didScroll) {
      didScroll = false;

      windowScrollTop = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;

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
            passedScroll[index] = windowScrollTop;
          }

          // Animating the main IMG
          if ( element.classList.contains("welcome-person__img") === true ) {
            // check if element is in view
            if ( windowScrollTop < step[8] && inView === false ) {
              inView = true;
            }
            // map an img to each step
            if ( inView === true ) {
              if ( windowScrollTop > step[8] ) {
                inView = false;
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 0 +".jpg");
              } else if (windowScrollTop <= step[0] ) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 9 +".jpg");
              } else if (windowScrollTop >= step[0] && windowScrollTop <= step[1]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 8 +".jpg");
              } else if (windowScrollTop >= step[1] && windowScrollTop <= step[2]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 7 +".jpg");
              } else if (windowScrollTop >= step[2] && windowScrollTop <= step[3]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 6 +".jpg");
              } else if (windowScrollTop >= step[3] && windowScrollTop <= step[4]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 5 +".jpg");
              } else if (windowScrollTop >= step[4] && windowScrollTop <= step[5]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 4 +".jpg");
              } else if (windowScrollTop >= step[5] && windowScrollTop <= step[6]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 3 +".jpg");
              } else if (windowScrollTop >= step[6] && windowScrollTop <= step[7]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 2 +".jpg");
              } else if (windowScrollTop >= step[7] && windowScrollTop <= step[8]) {
                thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 1 +".jpg");
              }
            }
          }
          
          // Animating Regular scrolls and lazyloads
          if ( element.classList.contains("scroll--permanent") === true ) {
            // pixel position of window scroll (i.e. 500) - already passed pixels until object was seen (i.e. 50) / speed
            scrolling[index] = ((windowScrollTop - passedScroll[index]) / dataSpeed) * -1;
            element.style.transform = "translate3D(0, " + scrolling[index] + "%, 0)";
          } else {
            element.classList.add("scroll--start");
          }
        } else {
          element.classList.remove("scroll--start");
          stuck = false;
        }

      });

    }
  }, 10);

})();