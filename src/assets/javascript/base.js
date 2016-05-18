'use strict'; // jshint -W097
/*jslint browser: true*/
/*
 * Shared Globals
 */
var WORKS_OPEN = false; // checks if the more-works section is open
var WRITER_OPEN = false; // checks if the writer function is ready to trigger
var WINDOW_SCROLL_TOP; // stores the scroll value every scroll
/*
 *
 * forEach method run like this:
 * 
 * forEach(elements, function (index, element) { // what happens each iteration here });
 * 
 */
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need to callback into 
  }
};

(function(){
  setTimeout(function() {
    document.getElementsByClassName('preloader')[0].classList.add('preloader--loaded');
  }, 1500);
})();
