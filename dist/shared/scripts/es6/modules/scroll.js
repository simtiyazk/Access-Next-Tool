'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pinchFlag = require('../helpers/pinch-flag');

/*
 * Popup logic
 */

exports.default = function () {

  var scroll = $('.scroller'),
      scrollVelocity = 15,
      globalIsiScroller = $('#global-isi .scroller'),
      globalIsiScrollerContent = globalIsiScroller.find('.isi-scroller-content'),
      scrollOffset = globalIsiScroller.offset();
  //   const scroll = new IScroll('.scroller', {
  //     scrollbars: true
  // });
  var lastY = void 0,
      currentY = void 0,
      currentScroll = void 0,
      isiScrollPosition = void 0,
      checkFontLoad = void 0;

  var scrollToSection = function scrollToSection(element) {
    console.log(globalIsiScrollerContent.height());
    console.log(element.offset().top);
    console.log(scrollOffset);
    // let scrollDistance = Math.floor((element.offset().top - scrollOffset));
    var scrollDistance = 0;
    switch (element.attr('id')) {
      case 'indication':
        scrollDistance = 0;
        break;
      case 'warnings-precautions':
        scrollDistance = 101;
        break;
      case 'retinal-abnormalities':
        scrollDistance = 205;
        break;
      case 'increased-intraocular':
        scrollDistance = 307;
        break;
      case 'cataract':
        scrollDistance = 409;
        break;
      case 'common-sense':
        scrollDistance = 528;
        break;
      case 'immunogenicity':
        scrollDistance = 611;
        break;
      case 'pediatric-use':
        scrollDistance = 740;
        break;
    }
    globalIsiScroller.scrollTop(scrollDistance);
  };

  scroll.on('touchmove', function (e) {
    if (_pinchFlag.pinched.getPinch() === false) {
      currentY = e.originalEvent.touches[0].clientY;
      currentScroll = $(this).scrollTop();

      if (currentY > lastY) {
        $(this).scrollTop(currentScroll - scrollVelocity);
      } else if (currentY < lastY) {
        $(this).scrollTop(currentScroll + scrollVelocity);
      }
    }

    lastY = currentY;
  });

  $(document).ready(function () {
    var scrollElem = $('.slide').data('isiscroll');

    if (scrollElem) {
      // setTimeout(function(){ scrollToSection($(`#${scrollElem}`)); }, 100);
      // scrollToSection($(`#${scrollElem}`));
      checkFontLoad = setInterval(function () {
        if (globalIsiScrollerContent.height() >= 891) {
          scrollToSection($('#' + scrollElem));
          clearInterval(checkFontLoad);
        }
      }, 100);
    }
  });
};
//# sourceMappingURL=scroll.js.map
