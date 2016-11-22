/**
 *
 * The writer will take text, hide it and then create a fake text-writing animation
 * * by http://thibaultjanbeyer.com
 *
 */
(function () {
  var wasWritten = [false, false, false, false]; // 4 levers
  var writerQuestion = getChar(document.getElementsByClassName('writer-question'));
  var writerAnswer = getChar(document.getElementsByClassName('writer-answer'));
  var writerQuestionHidden = document.getElementsByClassName('writer-question--hidden');
  var writerAnswerHidden = document.getElementsByClassName('writer-answer--hidden');

  // stores and returns an array with objects like so:
  // [{el: singleElementObject, char: ["H","e","l","l","o"]}, {el: singleElementObject, text: "Hello", char: ["H","e","l","l","o"]}]
  // also deletes the original text
  function getChar(nodes) {
    var array = [];
    for (var i = 0; i < nodes.length; i++) {
      var object = {};
      object.el = nodes[i];
      object.text = nodes[i].textContent;
      object.char = object.text.split('');
      array[i] = object;

      // delete original text
      nodes[i].textContent = '';
    }
    return array;
  }

  // writes the characters one by one
  // we use out custom loop function defined in img-iteration.js
  // the step will be used to define in which state we are
  function writeChar(step) {
    WRITER_OPEN = false;
    wasWritten[step - 1] = true;
    // Since it’s the first step is somewhat special it will get its own if clause,
    if (step === 1) {

      document.getElementsByClassName('concact-pic--big')[0].classList.remove('concact-pic--big');

      setTimeout(function () {
        // the first loop will reveal the first elements chars, hence element 0
        // afterwards it will call the secong loop
        myLoop(
          { countdown: writerQuestion[0].char.length - 1, duration: 100, countup: 0 },
          (countdown, duration, countup) => {
            writerQuestion[0].el.innerHTML += writerQuestion[0].char[countup];

            // start second loop
            if (countdown === 0) {
              myLoop(
                { countdown: writerQuestion[1].char.length - 1, duration: 65, countup: 0 },
                (countdown, duration, countup) => {
                  writerQuestion[1].el.innerHTML += writerQuestion[1].char[countup];

                  if (countdown === 0) {
                    writerAnswerHidden[0].classList.remove('writer-answer--hidden');
                    // start the third loop
                    myLoop(
                      { countdown: writerAnswer[0].char.length - 1, duration: 65, countup: 0 },
                      (countdown, duration, countup) => {
                        writerAnswer[0].el.innerHTML += writerAnswer[0].char[countup];
                      });
                  }
                });
            }
          });
      }, 2000);
      // if it’s the last, hence the submit button
    } else if (step === 3) {
      writerQuestionHidden[0].classList.remove('writer-question--hidden');
      myLoop(
        { countdown: writerQuestion[step].char.length - 1, duration: 65, countup: 0 },
        (countdown, duration, countup) => {
          writerQuestion[step].el.innerHTML += writerQuestion[step].char[countup];
        });
      // all the other steps are done with this
    } else {
      writerQuestionHidden[0].classList.remove('writer-question--hidden');
      writerAnswerHidden[0].classList.remove('writer-answer--hidden');

      myLoop(
        { countdown: writerQuestion[step].char.length - 1, duration: 65, countup: 0 },
        (countdown, duration, countup) => {
          writerQuestion[step].el.innerHTML += writerQuestion[step].char[countup];

          if (countdown === 0) {
            // start the third loop
            myLoop(
              { countdown: writerAnswer[step - 1].char.length - 1, duration: 65, countup: 0 },
              (countdown, duration, countup) => {
                writerAnswer[step - 1].el.innerHTML += writerAnswer[step - 1].char[countup];
              });
          }
        });
    }
  }

  // check to see if we can begin
  setInterval(function () {
    if (WRITER_OPEN && wasWritten[0] === false) {
      writeChar(1);
    }
  }, 1000);

  var nextButtons = document.getElementsByClassName('writer--next');
  // check if something is written in the first input
  var myName = document.getElementById('myName');
  var liveName = document.getElementById('liveName');
  myName.onkeyup = function (e) {
    liveName.textContent = myName.value;
    if (e.keyCode === 13 && wasWritten[1] === false) {
      e.preventDefault();
      writeChar(2);
    }
  };
  // or if the next button is hit
  nextButtons[0].addEventListener('click', function (e) {
    e.preventDefault();
    if (wasWritten[1] === false) {
      liveName.textContent = myName.value;
      writeChar(2);
    }
  });

  // adapting the height of the second input to it’s content
  var myMessage = document.getElementById('myMessage');
  myMessage.onkeyup = function (e) {
    myMessage.style.height = myMessage.scrollHeight + 'px';
  };
  // if the submit button is hit
  nextButtons[1].addEventListener('click', function (e) {
    e.preventDefault();
    if (wasWritten[2] === false) {
      writeChar(3);
    }
    writeMail();
  });

  function writeMail() {
    var mailto = 'hi@thibaultjanbeyer.com';
    var subject = encodeURI('Hi Thibault, my name is ') + encodeURI(myName.value);
    var body = encodeURI('I just wanted to say... ') + '%0A%0A' + encodeURI(myMessage.value);
    window.location.href = 'mailto:' + mailto + '?Subject=' + subject + '&Body=' + body;
  }

})();
