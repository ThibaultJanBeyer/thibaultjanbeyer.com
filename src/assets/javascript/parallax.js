/**
 * 
 * Things that happen when user scrolls
 * 
 */
(function() {
  // save all elements with .scroll
  var scrollElements = document.getElementsByClassName("scroll"),
      welcome = document.getElementById("welcome"),
      passedScroll = [],
      scrolling = [],
      stuck = false;

  window.onscroll = (function(e) {
    var windowScrollLeft = (window.scrollX !== undefined) ? window.scrollX : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var windowScrollTop = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // check if the element is in view and do the trick
    inView(windowScrollTop, windowScrollLeft);
  });

  // function to check if elements are in view
  function inView(windowScrollTop, windowScrollLeft) {
    
    // runs a for loop on every element executing what is in the function 
    forEach(scrollElements, function (index, element) {
      // get custom speed
      var dataSpeed = element.getAttribute("data-scroll--speed") || 100;
      // stores the position values of the current element
      var rect = element.getBoundingClientRect();
      
      // if the bottom position of the element is higher than 0, thus in view
      if( rect.bottom >= 0 && rect.top < welcome.offsetHeight ) {
        // get the position of screen to substract that to the scrolling 
        if (!passedScroll[index]) {
          passedScroll[index] = windowScrollTop;
        }

        // Animating the main IMG
        if ( element.classList.contains("section-one-person__img") === true ) {
          // partage section in 9 to get 9 steps
          var steps = welcome.offsetHeight / 10;
          // map an img to each step
          if (windowScrollTop <= steps * 1) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 9 +".jpg");
          } else if (windowScrollTop >= steps * 1 && windowScrollTop <= steps * 2) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 8 +".jpg");
          } else if (windowScrollTop >= steps * 2 && windowScrollTop <= steps * 3) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 7 +".jpg");
          } else if (windowScrollTop >= steps * 3 && windowScrollTop <= steps * 4) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 6 +".jpg");
          } else if (windowScrollTop >= steps * 4 && windowScrollTop <= steps * 5) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 5 +".jpg");
          } else if (windowScrollTop >= steps * 5 && windowScrollTop <= steps * 6) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 4 +".jpg");
          } else if (windowScrollTop >= steps * 6 && windowScrollTop <= steps * 7) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 3 +".jpg");
          } else if (windowScrollTop >= steps * 7 && windowScrollTop <= steps * 8) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 2 +".jpg");
          } else if (windowScrollTop >= steps * 8 && windowScrollTop <= steps * 9) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 1 +".jpg");
          } else if (windowScrollTop >= steps * 9) {
            thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ 0 +".jpg");
          }
        }

        // Animating Regular scrolls
        if ( element.classList.contains("scroll--permanent") === true ) {
          // pixel position of window scroll (i.e. 500) - already passed pixels until object was seen (i.e. 50) / speed
          scrolling[index] = ((windowScrollTop - passedScroll[index]) / dataSpeed) * -1;
          element.style.transform = "translate3D(0, " + scrolling[index] + "%, 0)";
        } else {
          element.classList.add("scroll--start");
        }

        /*// Animating Stickiess
        if ( element.classList.contains("scroll--sticky") === true && !stuck ) {
          stuck = true;
          element.classList.add("scroll--stuck");
          element.style.transform = "translate3D(0, " + scrolling[index] + "%, 0)";
        }*/

      } else {
        element.classList.remove("scroll--start");
        stuck = false;
      }

    });

  }

})();