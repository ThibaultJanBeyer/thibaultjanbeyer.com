var thibaultImgMain = document.getElementById("thibault-img-main");

/**
 * A loop with timeouts.
 *
 * @param  {object}   options
 *         countdown: Integer,            The number of times it should run => ..3, ..2, ..1, ..0
 *         duration: Integer,             How long should it timeout? In ms
 *         countup: Integer               Every run this number is increased by 1 => 0, ..1, ..2 , ..3
 * 
 * @param  {Function} callback            This is what should happen each run
 *         countdown, duration, countup   get’s the current state of options
 * 
 * @param  {//}       scope               can be blank
 */
function myLoop(options, callback, scope) { // pass number of iterations and duration in ms and counter
  setTimeout(function () {
    callback.call(scope, options.countdown, options.duration, options.countup); // passes back stuff we need to callback into
    options.countup++;
    if (--options.countdown >= 0) myLoop(options, callback, scope); // decrement countdown and call myLoop again if countdown >= 0
  }, options.duration);
}

/*
 * preload imgs
 * 
 */
myLoop({
        countdown: 9, // number of iterations
        duration: 150, // in ms
        countup: 0 // starts to count up at 0 
      },
      (countdown, duration, countup) => { // what happens each time
        thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ countdown +".jpg");
      });

/*
 * iterate
 * 
 */
(function() {
  setTimeout(function() {
    myLoop(
      {
        countdown: 9, // number of iterations
        duration: 150, // in ms
        countup: 0 // starts to count up at 0 
      },
      (countdown, duration, countup) => { // what happens each time
        thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ countup +".jpg");
      }
    );
  }, 2000);

  /*
  * Check Scroll
  *
  */
  var scrolledUp = true;
  var scrolledDown = false;
  var welcome = document.getElementById("welcome");
  var turnbackPoint = welcome.offsetHeight / 4;
  var full = welcome.offsetHeight;
  var didScroll = false;
  var passed = false;

  setInterval(function() {
    // check every 1 second if scroll is more than 1/4 of window size and scroll down or up
    if ( scrolledDown === false ) {
      // if the window is scrolled by more than 1/4
      if( WINDOW_SCROLL_TOP >= turnbackPoint ) {
        // run the animation
        myLoop({
          countdown: 9, // number of iterations
          duration: 150, // in ms
          countup: 0 // starts to count up at 0 
        },
        (countdown, duration, countup) => { // what happens each time
          thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ countdown +".jpg");
        });
        // tell that it has been successfully scrolled down
        scrolledDown = true;
        scrolledUp = false;
      }
    }
    if ( scrolledUp === false ) {
      // check every 1 second if scroll is less than window height and scroll down or up
      if( WINDOW_SCROLL_TOP < turnbackPoint ) {
        // run the animation
        myLoop({
          countdown: 9, // number of iterations
          duration: 150, // in ms
          countup: 0 // starts to count up at 0 
        },
        (countdown, duration, countup) => { // what happens each time
          thibaultImgMain.setAttribute("src", "assets/img/thibault-jan-beyer_"+ countup +".jpg");
        });
        // tell that it has been successfully scrolled down
        scrolledUp = true;
        scrolledDown = false;
      }
    }
  }, 850);

//end
})();
