// save all elements with .scroll
var elements = document.getElementsByClassName("scroll");

window.onscroll = (function(e) {
  var windowScrollLeft = (window.scrollX !== undefined) ? window.scrollX : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
  var windowScrollTop = (window.scrollY !== undefined) ? window.scrollY : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  // check if the element is in view and do the trick
  inView(windowScrollTop, windowScrollLeft);
});

// checks if elements are in view
function inView(windowScrollTop, windowScrollLeft) {

  // runs a for loop on every element executing what is in the function 
  forEach(elements, function (index, element) {

    // stores the position values of the current element  
    var rect = element.getBoundingClientRect();
    // if the bottom position of the element is higher than 0, thus in view
    if( rect.bottom >= 0 ) {
      if ( element.classList.contains("scroll--permanent") === true ) {
        element.style.transform = "translate3D(0, " + -windowScrollTop/180 + "%, 0)";
      } else {
        element.classList.add("scroll--start");
      }
    } else {
      element.classList.remove("scroll--start");
    }

  });

}
