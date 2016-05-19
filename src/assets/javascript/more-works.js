/**
 * 
 * Pulls more works in from outside screen
 * Based on the a11y-dialog from edenspiekermann via https://github.com/edenspiekermann/a11y-dialog
 * 
 */
(function (global) {

  // Helper function to get all focusable children from a node
  function getFocusableChildren(node) {
    var focusableElements = [
      'a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])',
      'textarea:not([disabled])', 'button:not([disabled])', 'iframe', 'object',
      'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'
    ];

    return $$(focusableElements.join(','), node).filter(function (child) {
      return !!(child.offsetWidth || child.offsetHeight || child.getClientRects().length);
    });
  }

  // Helper function to get all nodes in context matching selector as an array
  function $$(selector, context) {
    return Array.prototype.slice.call((context || document).querySelectorAll(selector));
  }

  // Helper function trapping the tab key inside a node
  function trapTabKey(node, event) {
    var focusableChildren = getFocusableChildren(node);
    var focusedItemIndex = focusableChildren.indexOf(document.activeElement);

    if (event.shiftKey && focusedItemIndex === 0) {
      focusableChildren[focusableChildren.length - 1].focus();
      event.preventDefault();
    } else if (!event.shiftKey && focusedItemIndex === focusableChildren.length - 1) {
      focusableChildren[0].focus();
      event.preventDefault();
    }
  }

  // Helper function to focus first focusable item in node
  function setFocusToFirstItem(node) {
    var focusableChildren = getFocusableChildren(node);
    if (focusableChildren.length) focusableChildren[0].focus();
  }

  var focusedBeforeDialog;

  /**
   * A11yDialog constructor
   * @param {Node} node - Dialog element
   * @param {Node} main - Main element of the page
   */
  var A11yDialog = function (node, main) {
    var namespace = 'data-a11y-dialog';
    var that = this;
    main = main || document.querySelector('#main');

    this.shown = false;
    this.show = show;
    this.hide = hide;

    $$('[' + namespace + '-show="' + node.id + '"]').forEach(function (opener) {
      opener.addEventListener('click', show);
    });

    $$('[' + namespace + '-hide]', node).concat($$('[' + namespace + '-hide="' + node.id + '"]')).forEach(function (closer) {
      closer.addEventListener('click', hide);
    });

    document.addEventListener('keydown', function (event) {
      if (that.shown && event.which === 27) {
        event.preventDefault();
        hide();
      }

      if (that.shown && event.which === 9) {
        trapTabKey(node, event);
      }
    });

    function maintainFocus(event) {
      if (that.shown && !node.contains(event.target)) {
        setFocusToFirstItem(node);
      }
    }

    function show() {
      that.shown = true;
      node.removeAttribute('aria-hidden');
      main.setAttribute('aria-hidden', 'true');
      focusedBeforeDialog = document.activeElement;
      setFocusToFirstItem(node);
      document.body.addEventListener('focus', maintainFocus, true);

      // TJB Modifications [start]
      thibaultImgMain.classList.add('more-works--hider'); // hides img because weird behaviour
      main.classList.add('more-works--pusher'); // pushes main to the left
      node.classList.remove('more-works--start'); // pushes more-works to the left
      document.body.classList.add('more-works--locker'); // removes the scroll ability
      document.getElementsByTagName('html')[0].classList.add('more-works--locker'); // removes the scroll ability
      WORKS_OPEN = true;
      // TJB Modifications [end]
    }

    function hide() {
      // TJB Modifications [start]
      node.classList.add('more-works--start'); // pushes more-works to the right
      main.classList.remove('more-works--pusher'); // pushes main to the right
      setTimeout(function () {  // makes sure that normal behaviour is dilayed by 1s
        // TJB Modifications [end]

        that.shown = false;
        node.setAttribute('aria-hidden', 'true');
        main.removeAttribute('aria-hidden');
        focusedBeforeDialog && focusedBeforeDialog.focus(); // jshint ignore:line
        document.body.removeEventListener('focus', maintainFocus, true);

        // TJB Modifications [start]
        thibaultImgMain.classList.remove('more-works--hider'); // show weird img again
        document.body.classList.remove('more-works--locker'); // restores the scroll ability
        document.getElementsByTagName('html')[0].classList.remove('more-works--locker'); // restores the scroll ability
        WORKS_OPEN = false;
      }, 1000);
      // TJB Modifications [end]
    }
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = A11yDialog;
  } else if (typeof define === 'function' && define.amd) {
    define('A11yDialog', [], function () {
      return A11yDialog;
    });
  } else if (typeof global === 'object') {
    global.A11yDialog = A11yDialog;
  }
} (window));

// Get the dialog element (with the accessor method you want)
var dialogEl = document.getElementById('more-works');

// Instanciate a new A11yDialog module
var dialog = new A11yDialog(dialogEl);
