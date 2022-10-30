'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoomFlag = require('../helpers/zoom-flag');

/*
 * Global Swipe Nav
 */
exports.default = function () {

  var presentationName = 'access_next_tool',
      slidesConfig = ['00_00', '10_00', '20_00', '30_00', '40_00', '50_00', '60_00', '70_00'],
      v20SlideConfig = [],
      v30SlideConfig = [],
      v50SlideConfig = [];

  var dragging = false,
      mousePosX = 0,
      mousePosXEnd = 0;

  var prefixPresentation = function prefixPresentation(presentation) {
    if (typeof presentation === 'undefined') {
      return presentationName;
    } else {
      return presentationName + '_' + presentation;
    }
  };

  var prefixSlide = function prefixSlide(slide, presentation) {
    presentation = prefixPresentation(presentation);
    return presentation + '_' + slide;
  };

  var goTo = function goTo(slideId, presentation) {
    var activePopUp = $('.pop-up').hasClass('active');
    var activePDFPopUp = $('.pdf-popup-container').hasClass('open');
    var activeSlider = $('.rangeslider-wrap').hasClass('slider-active');

    if (typeof slideId === 'undefined' || activePopUp || activePDFPopUp || activeSlider) {
      return;
    }

    if (_zoomFlag.zoomed.getZoomed()) {
      return;
    }

    var href = '';
    var slide = prefixSlide(slideId, presentation);

    if (typeof presentation === 'undefined') {
      presentation = presentationName;
    } else {
      presentation = prefixPresentation(presentation);
    }

    href = 'veeva:gotoSlide(' + slide + '.zip)';
    console.log('veeva:gotoSlide(' + slide + '.zip)');
    window.location = href;
  };

  var assignEvent = function assignEvent(element, event, callback, useCapture) {
    useCapture = typeof useCapture !== 'undefined' ? useCapture : false;

    if (element !== null) {

      if (event === 'tap press') {
        var ev = 'touchend';

        //On touch start we reset values and set the start position
        element.addEventListener('touchstart', function (e) {
          dragging = false;
          mousePosX = e.touches[0].pageX;
          mousePosXEnd = e.touches[0].pageX;
        });

        //When moving we record the last position
        element.addEventListener('touchmove', function (e) {
          mousePosXEnd = e.touches[0].pageX;
        });

        //When the touch finishes, we calculate the distance from the start position
        //if it's bigger than the treshold we set the flag to trigger the swipe
        element.addEventListener('touchend', function (e) {
          //Treshold set to a third of the screen width, if bigger than this we trigger the swipe
          var treshold = $(window).width() / 3;

          //This covers the swipe to the right and to the left
          if (mousePosXEnd - mousePosX > treshold || mousePosXEnd - mousePosX < -treshold) {
            dragging = true;
          } else {
            dragging = false;
          }

          //For testing
          console.log(mousePosX + ' ' + mousePosXEnd + ' ' + dragging);
        });
        element.addEventListener(ev, callback);
        // }
      } else {
        var mc = new Hammer(element);
        mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        mc.on(event, callback);
      }
    }
  };

  var configureListener = function configureListener() {
    if (typeof Slide !== 'undefined' && typeof Slide.id !== 'undefined' && Slide.id && (typeof Slide.disableSwipe === 'undefined' || !Slide.disableSwipe) && typeof slidesConfig !== 'undefined' && slidesConfig.length > 0) {
      var slideId = typeof Slide.swipeId !== 'undefined' && Slide.swipeId ? Slide.swipeId : Slide.id;
      var slideIndex = slidesConfig.indexOf(slideId);

      // assignEvent(document.body, 'swipeleft', function() {
      //   console.log('swipe left is go');
      //   if(slideIndex < slidesConfig.length - 1) {
      //     goTo(slidesConfig[slideIndex + 1]);
      //   }

      // });

      // assignEvent(document.body, 'swiperight', function() {
      //   console.log('swipe right is go');
      //   if(slideIndex > 0) {
      //     goTo(slidesConfig[slideIndex - 1]);
      //   }
      // });
    }

    //Check if the slide has vertical navigation
    if (Slide.vSwipeId) {
      var vSlideId = Slide.vSwipeId,
          vSlideIndex = void 0,
          vSlideConfig = void 0;
      //Filter wich vertical slide config will be used
      switch (vSlideId.split('_')[0]) {
        case '20':
          vSlideConfig = v20SlideConfig;
          break;
        case '30':
          vSlideConfig = v30SlideConfig;
          break;
        case '50':
          vSlideConfig = v50SlideConfig;
          break;
        default:
          break;
      }

      //Asign vertical slide index of slide
      vSlideIndex = vSlideConfig.indexOf(vSlideId);

      //Assign up and down swipe events from Hammer
      assignEvent(document.body, 'swipeup', function () {
        console.log('swipe up is go');
        if (vSlideIndex < vSlideConfig.length - 1) {
          goTo(vSlideConfig[vSlideIndex + 1]);
        }
      });

      assignEvent(document.body, 'swipedown', function () {
        console.log('swipe down is go');
        if (vSlideIndex > 0) {
          goTo(vSlideConfig[vSlideIndex - 1]);
        }
      });
    }

    //Assign events for tab pop ups navigation
    //Validate if tab pop up exists on slide
    //Note: this will not create conflict with global
    //vertical navigation because all navigation is
    //disabled when pop ups are active
    if (!$('.patient-profile-popup').hasClass('disabled')) {
      var tabPopUp = $('.tab-popup'),
          tab1 = tabPopUp.find('.tab-1'),
          tab2 = tabPopUp.find('.tab-2');

      assignEvent(document.body, 'swipeup', function () {
        //Validate if pop up is active and if tab1 is active to
        //switch active classes with tab2
        if (tabPopUp.hasClass('active') && tab1.hasClass('active')) {
          console.log('tabpopup swipe up is go');
          tab1.removeClass('active');
          tab2.addClass('active');
        }
      });

      //Validate if pop up is active and if tab2 is active to
      //switch active classes with tab1
      assignEvent(document.body, 'swipedown', function () {
        if (tabPopUp.hasClass('active') && tab2.hasClass('active')) {
          console.log('tabpopup swipe down is go');
          tab2.removeClass('active');
          tab1.addClass('active');
        }
      });
    }
  };

  var initSwipeNav = function initSwipeNav() {
    configureListener();
  };

  initSwipeNav();
};
//# sourceMappingURL=global-swipe-nav.js.map
