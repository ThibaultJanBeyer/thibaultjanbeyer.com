'use strict'; // jshint -W097

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
