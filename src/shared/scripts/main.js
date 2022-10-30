(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {

   var header = $('header'),
       disclaimer = $('.disclaimer');

   var supCharacter = function supCharacter($element) {
      if ($element.length !== 0) {
         var html = $element.html().replace(/®/g, '<sup>®</sup>').replace('109/L', '10<sup>9</sup>/L').replace(/breakline/g, '<br />');
         $element.html(html);
      }
   };

   supCharacter(header);
   supCharacter(disclaimer);
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isPinched = false;

var PinchModel = function () {
	function PinchModel(args) {
		_classCallCheck(this, PinchModel);

		if (args !== undefined) {
			isPinched = args;
		}
	}

	_createClass(PinchModel, [{
		key: "getPinch",
		value: function getPinch() {
			return isPinched;
		}
	}, {
		key: "setPinch",
		value: function setPinch(args) {
			isPinched = args;
		}
	}]);

	return PinchModel;
}();

var pinched = exports.pinched = new PinchModel(false);

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

exports.default = function () {
   var self = {};
   var touchclick = 'ontouchend' in document.documentElement ? 'touchend' : window.navigator.pointerEnabled ? 'pointerup' : 'click'; // Handles Tap or click events
   self.isVeeva = navigator.userAgent.match(/iPad/i) != null;console.log('veevaUtils.isVeeva: ' + self.isVeeva);
   //global listeners
   document.addEventListener('touchmove', function (e) {
      e.preventDefault();
   }, false); //prevent webview window from scrolling
   // $('a[href="#"]').on('click', function (e) { e.preventDefault(); }); //prevent default behavior for anchor tags with hash

   function overrideLinks() {
      $('a[href^="veeva:gotoSlide("]').on(touchclick, function (e) {
         e.preventDefault();
         var target = $(e.currentTarget),
             delay = target.data('delay') !== undefined && $.isNumeric(target.data('delay')) ? target.data('delay') : 0,
             keyMessage = target.attr('href').slice(16, -1).split(',')[0].replace('.zip', '');

         if (self.isVeeva === true) {
            setTimeout(function () {
               window.open(target.attr('href'));
            }, delay);
         } else {
            setTimeout(function () {
               location.href = '../' + keyMessage + '/' + keyMessage + '.html';
            }, delay);
         }
      });
   }
   FastClick.attach(document.body); //fastclick for mobile

   // $('a').on('touchend', function (e) {
   //   var path = $(this).attr('href');
   //   document.location = path;
   //   e.stopPropagation();
   // });
   overrideLinks();
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isZoomed = false;

var ZoomModel = function () {
	function ZoomModel(args) {
		_classCallCheck(this, ZoomModel);

		if (args !== undefined) {
			isZoomed = args;
		}
	}

	_createClass(ZoomModel, [{
		key: "getZoomed",
		value: function getZoomed() {
			return isZoomed;
		}
	}, {
		key: "setZoomed",
		value: function setZoomed(args) {
			isZoomed = args;
		}
	}]);

	return ZoomModel;
}();

var zoomed = exports.zoomed = new ZoomModel(false);

},{}],5:[function(require,module,exports){
'use strict';

var _helper = require('./helpers/helper');

var _helper2 = _interopRequireDefault(_helper);

var _utils = require('./helpers/utils');

var _utils2 = _interopRequireDefault(_utils);

var _globalSwipeNav = require('./modules/global-swipe-nav');

var _globalSwipeNav2 = _interopRequireDefault(_globalSwipeNav);

var _globalNav = require('./modules/global-nav');

var _globalNav2 = _interopRequireDefault(_globalNav);

var _scroll = require('./modules/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _popup = require('./modules/popup');

var _popup2 = _interopRequireDefault(_popup);

var _tabClick = require('./modules/tab-click');

var _tabClick2 = _interopRequireDefault(_tabClick);

var _draggable = require('./modules/draggable');

var _draggable2 = _interopRequireDefault(_draggable);

var _forcedPopup = require('./modules/forced-popup');

var _forcedPopup2 = _interopRequireDefault(_forcedPopup);

var _slideCarousel = require('./modules/slide-carousel');

var _slideCarousel2 = _interopRequireDefault(_slideCarousel);

var _slideMenu = require('./modules/slide-menu');

var _slideMenu2 = _interopRequireDefault(_slideMenu);

var _toolTipContent = require('./modules/tool-tip-content');

var _toolTipContent2 = _interopRequireDefault(_toolTipContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import disableswipeaction from './modules/disable-swipe-action';

// import videoPopup from './modules/video-popup';

// import toolTipPopup from './modules/tooltip-popup';


// Modules
// Helpers
$(function () {

  // Helpers
  (0, _helper2.default)();
  (0, _utils2.default)();

  // Modules
  (0, _draggable2.default)();
  (0, _globalSwipeNav2.default)();
  (0, _globalNav2.default)();
  (0, _scroll2.default)();
  (0, _popup2.default)();
  // popupTab();
  // videoPopup();
  (0, _forcedPopup2.default)();
  // toolTipPopup();
  (0, _tabClick2.default)();
  // analytics();
  (0, _slideCarousel2.default)();
  (0, _slideMenu2.default)();
  (0, _toolTipContent2.default)();
  // disableswipeaction();
});
// import analytics from './modules/analytics';

},{"./helpers/helper":1,"./helpers/utils":3,"./modules/draggable":6,"./modules/forced-popup":7,"./modules/global-nav":8,"./modules/global-swipe-nav":9,"./modules/popup":10,"./modules/scroll":11,"./modules/slide-carousel":12,"./modules/slide-menu":13,"./modules/tab-click":14,"./modules/tool-tip-content":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zoomFlag = require('../helpers/zoom-flag');

var _pinchFlag = require('../helpers/pinch-flag');

// import interact from 'interactjs';
exports.default = function () {

  var mainSection = $('.section-image-wrapper');
  var isExpanded = false;

  function hammerIt(elm) {
    var hammertime = new Hammer(elm, {});
    hammertime.get('pinch').set({
      enable: true
    });
    var posX = 0,
        posY = 0,
        scale = 1,
        lastScale = 1,
        lastPosX = 0,
        lastPosY = 0,
        maxPosX = 0,
        maxPosY = 0,
        transform = '',
        el = elm;

    hammertime.on('tap doubletap pan pinch panend pinchend swipeleft swiperight swipedown swipeup', function (ev) {
      if (ev.type === 'doubletap') {
        transform = 'translate3d(0, 0, 0) ' + 'scale3d(2, 2, 1) ';
        scale = 2;
        lastScale = 2;
        try {
          if (window.getComputedStyle(el, null).getPropertyValue('-webkit-transform').toString() !== 'matrix(1, 0, 0, 1, 0, 0)') {
            transform = 'translate3d(0, 0, 0) ' + 'scale3d(1, 1, 1) ';
            scale = 1;
            lastScale = 1;
          }
        } catch (err) {
          console.log(err);
        }
        //set transform Anchor point
        $(el).css({ 'transform-origin': ev.center.x + 'px ' + ev.center.y + 'px 0px' });
        el.style.webkitTransform = transform;
        transform = '';
      }

      //pan
      if (scale !== 1) {
        posX = lastPosX + ev.deltaX;
        posY = lastPosY + ev.deltaY;
        maxPosX = Math.ceil((scale - 1) * el.clientWidth / 2);
        maxPosY = Math.ceil((scale - 1) * el.clientHeight / 2);
        if (posX > maxPosX) {
          posX = maxPosX;
        }
        if (posX < -maxPosX) {
          posX = -maxPosX;
        }
        if (posY > maxPosY) {
          posY = maxPosY;
        }
        if (posY < -maxPosY) {
          posY = -maxPosY;
        }
      }

      //pinch

      if (ev.type === 'pinch') {
        _pinchFlag.pinched.setPinch(true);
        $(el).css({ 'transform-origin': ev.center.x + 'px ' + ev.center.y + 'px 0px' });
        scale = Math.max(.99999, Math.min(lastScale * ev.scale, 4));
      }

      if (ev.type === 'pinchend') {
        lastScale = scale;_pinchFlag.pinched.setPinch(false);
      }

      //panend
      if (ev.type === 'panend') {
        lastPosX = posX < maxPosX ? posX : maxPosX;
        lastPosY = posY < maxPosY ? posY : maxPosY;
      }

      if (scale !== 1) {
        transform = 'translate3d(' + posX + 'px,' + posY + 'px, 0) ' + 'scale3d(' + scale + ', ' + scale + ', 1)';
      }

      if (transform) {
        //set transform Anchor point
        el.style.webkitTransform = transform;
      }

      if (scale <= 1) {
        _zoomFlag.zoomed.setZoomed(false);
      } else {
        _zoomFlag.zoomed.setZoomed(true);
      }
    });
  }

  //Showing overlay for one of the interactive slides
  function showOverlay() {
    $('#overlay-container').fadeIn('fast', function () {});
  }

  //Showing overlay for the slide 30
  function showOverlay30() {
    $('#overlay-container-30').fadeIn('fast', function () {});
    if (!$('.swiper-container-vertical').hasClass('swiper-container-vertical')) {
      var slide30Swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    }
  }

  //Hiding overlays
  function hideOverlay() {
    console.log('hideOverlay ');
    $('#overlay-container').fadeOut('fast', function () {});
  }

  function hideOverlay30() {
    console.log('hideOverlay 30');
    $('#overlay-container-30').fadeOut('fast', function () {});
  }

  //Toggle sub section expandable states
  function toogleSubSection(elem) {
    if (isExpanded === false) {
      expandSubSection(elem);
    } else {
      collapseSubSection(elem);
    }
  }

  //Expands the secondary overlay to fullscreen
  function expandSubSection(el) {

    if (isExpanded === false) {

      $('.open-overlay').removeClass('hide');
      $('.open-overlay-30').removeClass('hide');
      $('.interactive').addClass('hide-on-expand');

      mainSection.slideUp('slow');

      var currentCarousel = $(el);
      var value = 'none';
      currentCarousel.css({ '-webkit-transform': value, '-moz-transform': value, '-o-transform': value, 'msTransform': value, 'transform': value });

      try {
        currentCarousel.slick('unslick');
      } catch (e) {
        //
      }

      isExpanded = true;
    }
  }

  //Collaps the secondary overlay to fullscreen
  function collapseSubSection(el) {
    var currentCarousel = $(el);

    if (isExpanded === true) {

      $('.open-overlay').addClass('hide');
      $('.open-overlay-30').addClass('hide');
      $('.interactive').removeClass('hide-on-expand');

      mainSection.slideDown('slow');

      try {
        currentCarousel.slick('unslick');
      } catch (e) {
        console.log(e);
      }

      currentCarousel.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        draggable: false,
        initialSlide: 0, // needs to be reset, so next slide (secundary carousel) won't be affected
        cssEase: 'easeOutElastic'
      });

      var value = 'none';
      $('.section-carousel').css({ '-webkit-transform': value, '-moz-transform': value, '-o-transform': value, 'msTransform': value, 'transform': value });

      // Remove from the setTimeout
      $('.slick-dots').css('display', 'block');
      currentCarousel.on('init', function (event, slick) {
        currentCarousel.find('.slide').removeClass('auto-height');
      });

      setTimeout(function () {

        $('.slick-dots').css('display', 'block');

        currentCarousel.on('init', function (event, slick) {
          currentCarousel.find('.slide').removeClass('auto-height');
        });

        isExpanded = false;
      }, 600);
    }
  }

  $('.slide').each(function () {
    hammerIt(this);
  });
};

},{"../helpers/pinch-flag":2,"../helpers/zoom-flag":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var slide = $('.slide'),
	    popup = $('#' + slide.data('forced-popup'));

	var viewedPopup = sessionStorage.getItem('studyPopup');

	if (!viewedPopup && popup.length) {
		popup.toggleClass('hide active');
		sessionStorage.setItem('studyPopup', true);
	}
};

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

/*
 * Side Nav
 */
exports.default = function () {
	console.log('clickstream');
	//private
	var self,
	    el,
	    nextButton,
	    headerNav1,
	    headerNav2,
	    headerNav3,
	    headerNav4,
	    headerNav5,
	    references,
	    referencesClose,
	    runningInVeeva,
	    openPopupFunction,
	    openPopupComposition,
	    closeBtnPopupFunction,
	    closeBtnPopupComposition,
	    closeContainerPopup,
	    touchclick = 'ontouchend' in document.documentElement ? 'touchend' : window.navigator.pointerEnabled ? 'pointerup' : 'click';

	//set vars
	self = undefined;
	el = $('.slide');
	headerNav1 = el.find('.lowest-button');
	headerNav2 = el.find('.patients-button');
	headerNav3 = el.find('.risk-button');
	headerNav4 = el.find('.safety-button');
	headerNav5 = el.find('.summary-button');
	runningInVeeva = (location.hostname === '' || location.hostname.indexOf('veevamobile') > -1) && (navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('Touch') > 0);
	//initial setup


	headerNav1.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Lower Is Better Header', function () {});
	});

	headerNav2.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Patient at Risk Header', function () {});
	});

	headerNav3.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Risk Reduction Header', function () {});
	});
	headerNav4.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Safety Header', function () {});
	});

	headerNav5.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Resources Header', function () {});
	});

	var globalContent = $('.global-content'),
	    navContainer = $('.lux-idtl-globla-nav'),
	    navToogle = navContainer.find('.hamburger'),
	    sideBar = navContainer.find('.side-bar');

	//Toggle global nav bar
	navToogle.on('click tab', function (e) {
		sideBar.toggleClass('active');

		if (sideBar.hasClass('active')) {
			globalContent.on('click tab', function () {
				sideBar.removeClass('active');
				globalContent.off('click tab');
			});
		}
	});
};

},{}],9:[function(require,module,exports){
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

},{"../helpers/zoom-flag":4}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

/*
 * Popup logic
 */
exports.default = function () {

   var popupCta = $('.pop-up-trigger');
   // const pdfPopupCta = $('.pdf-pop-up-trigger');
   var popupCta1 = $('.pop-up-trigger');

   if (popupCta.length === 0) {
      return;
   } else {
      popupCta.on('click', function togglePopUp(e) {
         e.preventDefault();
         if ($(this).attr('disabled')) {
            return;
         } else {
            var popUps = $('.pop-up'),
                activePopUp = popUps.filter('.active'),
                openingPopUp = $(this).data('popup');

            if (activePopUp.length > 0 && activePopUp.find('.tab').filter('.active').data('ref')) {
               openingPopUp = activePopUp.find('.tab').filter('.active').data('ref');
            }

            popUps.addClass('hide');
            popUps.removeClass('active');

            $('#' + openingPopUp).toggleClass('hide active');
            $(this).toggleClass('active');
         }
      });

      $('.popup-close').on('click', function closeCurrentPopUp() {
         var closetPopUp = $(this).closest('.pop-up');
         //  currentVideo = closetPopUp.find('video');

         // if(currentVideo.length > 0) {
         //    currentVideo[0].pause();
         //    currentVideo[0].currentTime = 0;
         // }
         closetPopUp.addClass('hide');
         closetPopUp.removeClass('active');
         popupCta1.removeClass('active');
      });
   }

   // if (pdfPopupCta.length === 0){
   //    return;
   // } else {
   //    pdfPopupCta.on('click', function togglePopUp (e){
   //       e.preventDefault();
   //       if ($(this).attr('disabled')) {
   //          return;
   //       } else {
   //          let popUps = $('.pdf-popup-container'),
   //              activePopUp = popUps.filter('.open'),
   //              openingPopUp = $(this).data('popup');

   //          if(activePopUp.length > 0 && activePopUp.find('.tab').filter('.open').data('ref')) {
   //             openingPopUp = activePopUp.find('.tab').filter('.open').data('ref');
   //          }

   //          popUps.addClass('closed');
   //          popUps.removeClass('open');

   //          $(`#${openingPopUp}`).toggleClass('closed open');
   //          $(this).toggleClass('open');
   //       }
   //    });

   //    $('.pdf-popup-close').on('click', function closeCurrentPopUp(){
   //       let closetPopUp = $(this).closest('.pdf-popup-container');

   //       closetPopUp.addClass('closed');
   //       closetPopUp.removeClass('open');
   //    });

   // }
};

},{}],11:[function(require,module,exports){
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

},{"../helpers/pinch-flag":2}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  $('.tutorial-carousel').owlCarousel({
    margin: 0,
    dots: true,
    nav: true,
    items: 1,
    navSpeed: 5000,
    animateIn: 'fadeIn'
  });

  $('.notification-carousel').owlCarousel({
    margin: 0,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $('.output-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $('.takeda-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $('.gammagard-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $('.hyqvia-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $('.cuvitru-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  var owl1 = $('.notification-carousel');
  var trackViewedSlide = [];
  $('.remaining-swipes').text(2);
  owl1.on('changed.owl.carousel', function (property) {
    var current = property.item.index;
    if (trackViewedSlide.indexOf(current) === -1) {
      trackViewedSlide.push(current);
    }
    var viewedCount = property.item.count - trackViewedSlide.length;
    $('.remaining-swipes').text(viewedCount <= -1 ? 0 : viewedCount);
  });
};

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	//notification menu open
	$('#customerAccountName, .customerIcon').on('click', function () {
		$('.global-top-nav').css('z-index', '0');
		$('#customerAccount').hide();
		$('#customerAccountName').hide();
		$('.notification-nav').css('right', '0px');
	});
	//notification menu close
	$('.back_notification').on('click', function () {
		$('.global-top-nav').css('z-index', '2');
		$('.notification-nav').css('right', '-293px');
		$('#customerAccount').show();
		$('#customerAccountName').show();
	});
};

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {

  // slide 90.00
  var sliderOne = $('.slider-one');
  var sliderTwo = $('.slider-two');
  var sliderContentOne = $('.slider-content-one');
  var sliderContentTwo = $('.slider-content-two');

  sliderOne.on('click', function () {
    sliderContentOne.show();
    sliderContentTwo.hide();
    sliderfooter.hide();
  });

  sliderTwo.on('click', function () {
    sliderContentOne.hide();
    sliderContentTwo.show();
    sliderfooter.show();
  });
};

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  $('.channel_tt').on('click', function () {
    $('.channel-tt-content').show();
  });
  $('.channel-tt-content .closeToolTip').on('click', function () {
    $('.channel-tt-content').hide();
  });

  $('.benefit_tt').on('click', function () {
    $('.benefit-tt-content').show();
  });
  $('.benefit-tt-content .closeToolTip').on('click', function () {
    $('.benefit-tt-content').hide();
  });

  $('.top_tt').on('click', function () {
    $('.top-tt-content').show();
  });
  $('.top-tt-content .closeToolTip').on('click', function () {
    $('.top-tt-content').hide();
  });

  $('.brandtt').on('click', function () {
    $('.brand-tt-content').show();
  });
  $('.brand-tt-content .closeToolTip').on('click', function () {
    $('.brand-tt-content').hide();
  });
};

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2hhcmVkL3NjcmlwdHMvZXM2L2hlbHBlcnMvaGVscGVyLmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9oZWxwZXJzL3BpbmNoLWZsYWcuanMiLCJzcmMvc2hhcmVkL3NjcmlwdHMvZXM2L2hlbHBlcnMvdXRpbHMuanMiLCJzcmMvc2hhcmVkL3NjcmlwdHMvZXM2L2hlbHBlcnMvem9vbS1mbGFnLmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9tYWluLmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9tb2R1bGVzL2RyYWdnYWJsZS5qcyIsInNyYy9zaGFyZWQvc2NyaXB0cy9lczYvbW9kdWxlcy9mb3JjZWQtcG9wdXAuanMiLCJzcmMvc2hhcmVkL3NjcmlwdHMvZXM2L21vZHVsZXMvZ2xvYmFsLW5hdi5qcyIsInNyYy9zaGFyZWQvc2NyaXB0cy9lczYvbW9kdWxlcy9nbG9iYWwtc3dpcGUtbmF2LmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9tb2R1bGVzL3BvcHVwLmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9tb2R1bGVzL3Njcm9sbC5qcyIsInNyYy9zaGFyZWQvc2NyaXB0cy9lczYvbW9kdWxlcy9zbGlkZS1jYXJvdXNlbC5qcyIsInNyYy9zaGFyZWQvc2NyaXB0cy9lczYvbW9kdWxlcy9zbGlkZS1tZW51LmpzIiwic3JjL3NoYXJlZC9zY3JpcHRzL2VzNi9tb2R1bGVzL3RhYi1jbGljay5qcyIsInNyYy9zaGFyZWQvc2NyaXB0cy9lczYvbW9kdWxlcy90b29sLXRpcC1jb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2tCQ0FlLFlBQU07O0FBRWxCLE9BQU0sU0FBUyxFQUFFLFFBQUYsQ0FBZjtBQUFBLE9BQ00sYUFBYSxFQUFFLGFBQUYsQ0FEbkI7O0FBR0EsT0FBTSxlQUFlLFNBQWYsWUFBZSxDQUFDLFFBQUQsRUFB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LCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICAgY29uc3QgaGVhZGVyID0gJCgnaGVhZGVyJyksXG4gICAgICAgICBkaXNjbGFpbWVyID0gJCgnLmRpc2NsYWltZXInKTtcblxuICAgY29uc3Qgc3VwQ2hhcmFjdGVyID0gKCRlbGVtZW50KSA9PiB7XG4gICAgICBpZigkZWxlbWVudC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgIGxldCBodG1sID0gJGVsZW1lbnQuaHRtbCgpLnJlcGxhY2UoL8KuL2csICc8c3VwPsKuPC9zdXA+JykucmVwbGFjZSgnMTA5L0wnLCAnMTA8c3VwPjk8L3N1cD4vTCcpLnJlcGxhY2UoL2JyZWFrbGluZS9nLCAnPGJyIC8+Jyk7XG4gICAgICAgICAkZWxlbWVudC5odG1sKGh0bWwpO1xuICAgICAgfVxuICAgfTtcblxuICAgc3VwQ2hhcmFjdGVyKGhlYWRlcik7XG4gICBzdXBDaGFyYWN0ZXIoZGlzY2xhaW1lcik7XG5cbn07XG4iLCJsZXQgaXNQaW5jaGVkID0gZmFsc2U7XG5cbmNsYXNzIFBpbmNoTW9kZWwge1xuXHRjb25zdHJ1Y3RvcihhcmdzKSB7XG5cdFx0aWYgKGFyZ3MgIT09IHVuZGVmaW5lZCl7XG5cdFx0XHRpc1BpbmNoZWQgPSBhcmdzO1xuXHRcdH1cblx0fVxuXG5cdGdldFBpbmNoKCkge1xuXHRcdHJldHVybiBpc1BpbmNoZWQ7XG5cdH1cblxuXHRzZXRQaW5jaChhcmdzKSB7XG5cdFx0aXNQaW5jaGVkID0gYXJncztcblx0fVxufVxuXG5leHBvcnQgbGV0IHBpbmNoZWQgPSBuZXcgUGluY2hNb2RlbChmYWxzZSk7XG5cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgIGNvbnN0IHNlbGYgPSB7fTtcbiAgIGNvbnN0IHRvdWNoY2xpY2sgPSAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkgPyAndG91Y2hlbmQnIDogKHdpbmRvdy5uYXZpZ2F0b3IucG9pbnRlckVuYWJsZWQpID8gJ3BvaW50ZXJ1cCcgOiAnY2xpY2snOyAvLyBIYW5kbGVzIFRhcCBvciBjbGljayBldmVudHNcbiAgIHNlbGYuaXNWZWV2YSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSkgIT0gbnVsbDsgY29uc29sZS5sb2coJ3ZlZXZhVXRpbHMuaXNWZWV2YTogJyArIHNlbGYuaXNWZWV2YSk7XG4gICAvL2dsb2JhbCBsaXN0ZW5lcnNcbiAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uIChlKSB7IGUucHJldmVudERlZmF1bHQoKTsgfSwgZmFsc2UpOyAvL3ByZXZlbnQgd2VidmlldyB3aW5kb3cgZnJvbSBzY3JvbGxpbmdcbiAgIC8vICQoJ2FbaHJlZj1cIiNcIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0pOyAvL3ByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBmb3IgYW5jaG9yIHRhZ3Mgd2l0aCBoYXNoXG5cbiAgIGZ1bmN0aW9uIG92ZXJyaWRlTGlua3MoKSB7XG4gICAgICAkKCdhW2hyZWZePVwidmVldmE6Z290b1NsaWRlKFwiXScpLm9uKHRvdWNoY2xpY2ssIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICB2YXIgdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgZGVsYXkgPSAodGFyZ2V0LmRhdGEoJ2RlbGF5JykgIT09IHVuZGVmaW5lZCAmJiAkLmlzTnVtZXJpYyh0YXJnZXQuZGF0YSgnZGVsYXknKSkpID8gdGFyZ2V0LmRhdGEoJ2RlbGF5JykgOiAwLFxuICAgICAgICAgICAga2V5TWVzc2FnZSA9IHRhcmdldC5hdHRyKCdocmVmJykuc2xpY2UoMTYsIC0xKS5zcGxpdCgnLCcpWzBdLnJlcGxhY2UoJy56aXAnLCAnJyk7XG5cbiAgICAgICAgIGlmIChzZWxmLmlzVmVldmEgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyB3aW5kb3cub3Blbih0YXJnZXQuYXR0cignaHJlZicpKTsgfSwgZGVsYXkpO1xuICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBsb2NhdGlvbi5ocmVmID0gYC4uLyR7a2V5TWVzc2FnZX0vJHtrZXlNZXNzYWdlfS5odG1sYDsgfSwgZGVsYXkpO1xuICAgICAgICAgfVxuICAgICAgfSk7XG4gICB9XG4gICBGYXN0Q2xpY2suYXR0YWNoKGRvY3VtZW50LmJvZHkpOyAvL2Zhc3RjbGljayBmb3IgbW9iaWxlXG5cbiAgIC8vICQoJ2EnKS5vbigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgLy8gICB2YXIgcGF0aCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgLy8gICBkb2N1bWVudC5sb2NhdGlvbiA9IHBhdGg7XG4gICAvLyAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAvLyB9KTtcbiAgIG92ZXJyaWRlTGlua3MoKTtcbn07XG4iLCJsZXQgaXNab29tZWQgPSBmYWxzZTsgXG5cbmNsYXNzIFpvb21Nb2RlbCB7XG5cdGNvbnN0cnVjdG9yKGFyZ3MpIHtcblx0XHRpZiAoYXJncyAhPT0gdW5kZWZpbmVkKXtcblx0XHRcdGlzWm9vbWVkID0gYXJncztcblx0XHR9XG5cdH1cblxuXHRnZXRab29tZWQoKSB7XG5cdFx0cmV0dXJuIGlzWm9vbWVkO1xuXHR9XG5cblx0c2V0Wm9vbWVkKGFyZ3MpIHtcblx0XHRpc1pvb21lZCA9IGFyZ3M7XG5cdH1cbn1cblxuZXhwb3J0IGxldCB6b29tZWQgPSBuZXcgWm9vbU1vZGVsKGZhbHNlKTtcblxuIiwiLy8gSGVscGVyc1xuaW1wb3J0IGhlbHBlciBmcm9tICcuL2hlbHBlcnMvaGVscGVyJztcbmltcG9ydCB1dGlscyBmcm9tICcuL2hlbHBlcnMvdXRpbHMnO1xuXG4vLyBNb2R1bGVzXG5pbXBvcnQgZ2xvYmFsU3dpcGVOYXYgZnJvbSAnLi9tb2R1bGVzL2dsb2JhbC1zd2lwZS1uYXYnO1xuaW1wb3J0IGdsb2JhbE5hdiBmcm9tICcuL21vZHVsZXMvZ2xvYmFsLW5hdic7XG5pbXBvcnQgc2Nyb2xsIGZyb20gJy4vbW9kdWxlcy9zY3JvbGwnO1xuLy8gaW1wb3J0IGFuYWx5dGljcyBmcm9tICcuL21vZHVsZXMvYW5hbHl0aWNzJztcbmltcG9ydCBwb3B1cCBmcm9tICcuL21vZHVsZXMvcG9wdXAnO1xuLy8gaW1wb3J0IHRvb2xUaXBQb3B1cCBmcm9tICcuL21vZHVsZXMvdG9vbHRpcC1wb3B1cCc7XG5pbXBvcnQgdGFiY2xpY2sgZnJvbSAnLi9tb2R1bGVzL3RhYi1jbGljayc7XG5pbXBvcnQgZHJhZ2dhYmxlIGZyb20gJy4vbW9kdWxlcy9kcmFnZ2FibGUnO1xuLy8gaW1wb3J0IHZpZGVvUG9wdXAgZnJvbSAnLi9tb2R1bGVzL3ZpZGVvLXBvcHVwJztcbmltcG9ydCBmb3JjZWRQb3B1cCBmcm9tICcuL21vZHVsZXMvZm9yY2VkLXBvcHVwJztcbmltcG9ydCBzbGlkZUNhcm91c2VsIGZyb20gJy4vbW9kdWxlcy9zbGlkZS1jYXJvdXNlbCc7XG5pbXBvcnQgc2xpZGVNZW51IGZyb20gJy4vbW9kdWxlcy9zbGlkZS1tZW51JztcbmltcG9ydCB0b29sVGlwQ29udGVudCBmcm9tICcuL21vZHVsZXMvdG9vbC10aXAtY29udGVudCc7XG4vLyBpbXBvcnQgZGlzYWJsZXN3aXBlYWN0aW9uIGZyb20gJy4vbW9kdWxlcy9kaXNhYmxlLXN3aXBlLWFjdGlvbic7XG5cbiQoKCkgPT4ge1xuXG4gIC8vIEhlbHBlcnNcbiAgaGVscGVyKCk7XG4gIHV0aWxzKCk7XG5cbiAgLy8gTW9kdWxlc1xuICBkcmFnZ2FibGUoKTtcbiAgZ2xvYmFsU3dpcGVOYXYoKTtcbiAgZ2xvYmFsTmF2KCk7XG4gIHNjcm9sbCgpO1xuICBwb3B1cCgpO1xuICAvLyBwb3B1cFRhYigpO1xuICAvLyB2aWRlb1BvcHVwKCk7XG4gIGZvcmNlZFBvcHVwKCk7XG4gIC8vIHRvb2xUaXBQb3B1cCgpO1xuICB0YWJjbGljaygpO1xuICAvLyBhbmFseXRpY3MoKTtcbiAgc2xpZGVDYXJvdXNlbCgpO1xuICBzbGlkZU1lbnUoKTtcbiAgdG9vbFRpcENvbnRlbnQoKTtcbiAgLy8gZGlzYWJsZXN3aXBlYWN0aW9uKCk7XG5cbn0pO1xuIiwiLy8gaW1wb3J0IGludGVyYWN0IGZyb20gJ2ludGVyYWN0anMnO1xuaW1wb3J0IHsgem9vbWVkIH0gZnJvbSAnLi4vaGVscGVycy96b29tLWZsYWcnO1xuaW1wb3J0IHsgcGluY2hlZCB9IGZyb20gJy4uL2hlbHBlcnMvcGluY2gtZmxhZyc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBsZXQgbWFpblNlY3Rpb24gPSAkKCcuc2VjdGlvbi1pbWFnZS13cmFwcGVyJyk7XG4gIHZhciBpc0V4cGFuZGVkID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gaGFtbWVySXQoZWxtKSB7XG4gICAgICBsZXQgaGFtbWVydGltZSA9IG5ldyBIYW1tZXIoZWxtLCB7fSk7XG4gICAgICBoYW1tZXJ0aW1lLmdldCgncGluY2gnKS5zZXQoe1xuICAgICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgICB2YXIgcG9zWCA9IDAsXG4gICAgICAgICAgcG9zWSA9IDAsXG4gICAgICAgICAgc2NhbGUgPSAxLFxuICAgICAgICAgIGxhc3RTY2FsZSA9IDEsXG4gICAgICAgICAgbGFzdFBvc1ggPSAwLFxuICAgICAgICAgIGxhc3RQb3NZID0gMCxcbiAgICAgICAgICBtYXhQb3NYID0gMCxcbiAgICAgICAgICBtYXhQb3NZID0gMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSAnJyxcbiAgICAgICAgICBlbCA9IGVsbTtcblxuICAgICAgaGFtbWVydGltZS5vbigndGFwIGRvdWJsZXRhcCBwYW4gcGluY2ggcGFuZW5kIHBpbmNoZW5kIHN3aXBlbGVmdCBzd2lwZXJpZ2h0IHN3aXBlZG93biBzd2lwZXVwJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgICAgICBpZiAoZXYudHlwZSA9PT0gJ2RvdWJsZXRhcCcpIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtID1cbiAgICAgICAgICAgICAgICAgICd0cmFuc2xhdGUzZCgwLCAwLCAwKSAnICtcbiAgICAgICAgICAgICAgICAgICdzY2FsZTNkKDIsIDIsIDEpICc7XG4gICAgICAgICAgICAgIHNjYWxlID0gMjtcbiAgICAgICAgICAgICAgbGFzdFNjYWxlID0gMjtcbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnLXdlYmtpdC10cmFuc2Zvcm0nKS50b1N0cmluZygpICE9PSAnbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0cmFuc2xhdGUzZCgwLCAwLCAwKSAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NjYWxlM2QoMSwgMSwgMSkgJztcbiAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgbGFzdFNjYWxlID0gMTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvL3NldCB0cmFuc2Zvcm0gQW5jaG9yIHBvaW50XG4gICAgICAgICAgICAgICQoZWwpLmNzcyh7J3RyYW5zZm9ybS1vcmlnaW4nOiBldi5jZW50ZXIueCArICdweCAnICsgZXYuY2VudGVyLnkgKyAncHggMHB4J30pO1xuICAgICAgICAgICAgICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgICAgIHRyYW5zZm9ybSA9ICcnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vcGFuXG4gICAgICAgICAgaWYgKHNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICAgIHBvc1ggPSBsYXN0UG9zWCArIGV2LmRlbHRhWDtcbiAgICAgICAgICAgICAgcG9zWSA9IGxhc3RQb3NZICsgZXYuZGVsdGFZO1xuICAgICAgICAgICAgICBtYXhQb3NYID0gTWF0aC5jZWlsKChzY2FsZSAtIDEpICogZWwuY2xpZW50V2lkdGggLyAyKTtcbiAgICAgICAgICAgICAgbWF4UG9zWSA9IE1hdGguY2VpbCgoc2NhbGUgLSAxKSAqIGVsLmNsaWVudEhlaWdodCAvIDIpO1xuICAgICAgICAgICAgICBpZiAocG9zWCA+IG1heFBvc1gpIHtcbiAgICAgICAgICAgICAgICAgIHBvc1ggPSBtYXhQb3NYO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwb3NYIDwgLW1heFBvc1gpIHtcbiAgICAgICAgICAgICAgICAgIHBvc1ggPSAtbWF4UG9zWDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAocG9zWSA+IG1heFBvc1kpIHtcbiAgICAgICAgICAgICAgICAgIHBvc1kgPSBtYXhQb3NZO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChwb3NZIDwgLW1heFBvc1kpIHtcbiAgICAgICAgICAgICAgICAgIHBvc1kgPSAtbWF4UG9zWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgLy9waW5jaFxuXG4gICAgICAgICAgaWYgKGV2LnR5cGUgPT09ICdwaW5jaCcpIHtcbiAgICAgICAgICAgICBwaW5jaGVkLnNldFBpbmNoKHRydWUpO1xuICAgICAgICAgICAgICAkKGVsKS5jc3Moeyd0cmFuc2Zvcm0tb3JpZ2luJzogZXYuY2VudGVyLnggKyAncHggJyArIGV2LmNlbnRlci55ICsgJ3B4IDBweCd9KTtcbiAgICAgICAgICAgICAgc2NhbGUgPSBNYXRoLm1heCguOTk5OTksIE1hdGgubWluKGxhc3RTY2FsZSAqIChldi5zY2FsZSksIDQpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZihldi50eXBlID09PSAncGluY2hlbmQnKXsgbGFzdFNjYWxlID0gc2NhbGU7IHBpbmNoZWQuc2V0UGluY2goZmFsc2UpOyB9XG5cbiAgICAgICAgICAvL3BhbmVuZFxuICAgICAgICAgIGlmKGV2LnR5cGUgPT09ICdwYW5lbmQnKXtcbiAgICAgICAgICAgICAgbGFzdFBvc1ggPSBwb3NYIDwgbWF4UG9zWCA/IHBvc1ggOiBtYXhQb3NYO1xuICAgICAgICAgICAgICBsYXN0UG9zWSA9IHBvc1kgPCBtYXhQb3NZID8gcG9zWSA6IG1heFBvc1k7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNjYWxlICE9PSAxKSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybSA9XG4gICAgICAgICAgICAgICAgICAndHJhbnNsYXRlM2QoJyArIHBvc1ggKyAncHgsJyArIHBvc1kgKyAncHgsIDApICcgK1xuICAgICAgICAgICAgICAgICAgJ3NjYWxlM2QoJyArIHNjYWxlICsgJywgJyArIHNjYWxlICsgJywgMSknO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgLy9zZXQgdHJhbnNmb3JtIEFuY2hvciBwb2ludFxuICAgICAgICAgICAgICBlbC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNjYWxlIDw9IDEpIHtcbiAgICAgICAgICAgIHpvb21lZC5zZXRab29tZWQoZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB6b29tZWQuc2V0Wm9vbWVkKHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLy9TaG93aW5nIG92ZXJsYXkgZm9yIG9uZSBvZiB0aGUgaW50ZXJhY3RpdmUgc2xpZGVzXG4gIGZ1bmN0aW9uIHNob3dPdmVybGF5KCkge1xuICAgICQoJyNvdmVybGF5LWNvbnRhaW5lcicpLmZhZGVJbignZmFzdCcsIGZ1bmN0aW9uKCkge30pO1xuICB9XG5cbiAgLy9TaG93aW5nIG92ZXJsYXkgZm9yIHRoZSBzbGlkZSAzMFxuICBmdW5jdGlvbiBzaG93T3ZlcmxheTMwKCl7XG4gICAgJCgnI292ZXJsYXktY29udGFpbmVyLTMwJykuZmFkZUluKCdmYXN0JywgZnVuY3Rpb24oKSB7fSk7XG4gICAgaWYgKCEkKCcuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCcpLmhhc0NsYXNzKCdzd2lwZXItY29udGFpbmVyLXZlcnRpY2FsJykpIHtcbiAgICAgIHZhciBzbGlkZTMwU3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XG4gICAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICAgICAgICBjbGlja2FibGU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9IaWRpbmcgb3ZlcmxheXNcbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkoKXtcbiAgICBjb25zb2xlLmxvZygnaGlkZU92ZXJsYXkgJyk7XG4gICAgJCgnI292ZXJsYXktY29udGFpbmVyJykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uKCkge30pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU92ZXJsYXkzMCgpe1xuICAgIGNvbnNvbGUubG9nKCdoaWRlT3ZlcmxheSAzMCcpO1xuICAgICQoJyNvdmVybGF5LWNvbnRhaW5lci0zMCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbigpIHt9KTtcbiAgfVxuXG4gIC8vVG9nZ2xlIHN1YiBzZWN0aW9uIGV4cGFuZGFibGUgc3RhdGVzXG4gIGZ1bmN0aW9uIHRvb2dsZVN1YlNlY3Rpb24oZWxlbSkge1xuICAgICAgaWYoaXNFeHBhbmRlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZXhwYW5kU3ViU2VjdGlvbihlbGVtKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBjb2xsYXBzZVN1YlNlY3Rpb24oZWxlbSk7XG4gICAgICB9XG4gIH1cblxuICAvL0V4cGFuZHMgdGhlIHNlY29uZGFyeSBvdmVybGF5IHRvIGZ1bGxzY3JlZW5cbiAgZnVuY3Rpb24gZXhwYW5kU3ViU2VjdGlvbihlbCkge1xuXG4gICAgaWYoaXNFeHBhbmRlZCA9PT0gZmFsc2UpIHtcblxuICAgICAgJCgnLm9wZW4tb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdoaWRlJyk7XG4gICAgICAkKCcub3Blbi1vdmVybGF5LTMwJykucmVtb3ZlQ2xhc3MoJ2hpZGUnKTtcbiAgICAgICQoJy5pbnRlcmFjdGl2ZScpLmFkZENsYXNzKCdoaWRlLW9uLWV4cGFuZCcpO1xuXG4gICAgICBtYWluU2VjdGlvbi5zbGlkZVVwKCdzbG93Jyk7XG5cbiAgICAgIHZhciBjdXJyZW50Q2Fyb3VzZWwgPSAkKGVsKTtcbiAgICAgIHZhciB2YWx1ZSA9ICdub25lJztcbiAgICAgIGN1cnJlbnRDYXJvdXNlbC5jc3Moeyctd2Via2l0LXRyYW5zZm9ybSc6IHZhbHVlLCAnLW1vei10cmFuc2Zvcm0nOiB2YWx1ZSwgJy1vLXRyYW5zZm9ybSc6IHZhbHVlLCAnbXNUcmFuc2Zvcm0nOiB2YWx1ZSwgJ3RyYW5zZm9ybSc6IHZhbHVlfSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGN1cnJlbnRDYXJvdXNlbC5zbGljaygndW5zbGljaycpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIC8vXG4gICAgICB9XG5cbiAgICAgIGlzRXhwYW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vQ29sbGFwcyB0aGUgc2Vjb25kYXJ5IG92ZXJsYXkgdG8gZnVsbHNjcmVlblxuICBmdW5jdGlvbiBjb2xsYXBzZVN1YlNlY3Rpb24oZWwpIHtcbiAgICB2YXIgY3VycmVudENhcm91c2VsID0gJChlbCk7XG5cbiAgICBpZihpc0V4cGFuZGVkID09PSB0cnVlKSB7XG5cbiAgICAgICQoJy5vcGVuLW92ZXJsYXknKS5hZGRDbGFzcygnaGlkZScpO1xuICAgICAgJCgnLm9wZW4tb3ZlcmxheS0zMCcpLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAkKCcuaW50ZXJhY3RpdmUnKS5yZW1vdmVDbGFzcygnaGlkZS1vbi1leHBhbmQnKTtcblxuICAgICAgbWFpblNlY3Rpb24uc2xpZGVEb3duKCdzbG93Jyk7XG5cbiAgICAgIHRyeXtcbiAgICAgICAgICBjdXJyZW50Q2Fyb3VzZWwuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgfWNhdGNoKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRDYXJvdXNlbC5zbGljayh7XG4gICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsIC8vIG5lZWRzIHRvIGJlIHJlc2V0LCBzbyBuZXh0IHNsaWRlIChzZWN1bmRhcnkgY2Fyb3VzZWwpIHdvbid0IGJlIGFmZmVjdGVkXG4gICAgICAgICAgY3NzRWFzZTogJ2Vhc2VPdXRFbGFzdGljJ1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSAnbm9uZSc7XG4gICAgICAgICQoJy5zZWN0aW9uLWNhcm91c2VsJykuY3NzKHsnLXdlYmtpdC10cmFuc2Zvcm0nOiB2YWx1ZSwgJy1tb3otdHJhbnNmb3JtJzogdmFsdWUsICctby10cmFuc2Zvcm0nOiB2YWx1ZSwgJ21zVHJhbnNmb3JtJzogdmFsdWUsICd0cmFuc2Zvcm0nOiB2YWx1ZX0pO1xuXG4gICAgICAvLyBSZW1vdmUgZnJvbSB0aGUgc2V0VGltZW91dFxuICAgICAgJCgnLnNsaWNrLWRvdHMnKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAgIGN1cnJlbnRDYXJvdXNlbC5vbignaW5pdCcsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaykge1xuICAgICAgICBjdXJyZW50Q2Fyb3VzZWwuZmluZCgnLnNsaWRlJykucmVtb3ZlQ2xhc3MoJ2F1dG8taGVpZ2h0Jyk7XG4gICAgICB9KTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAkKCcuc2xpY2stZG90cycpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXG4gICAgICAgIGN1cnJlbnRDYXJvdXNlbC5vbignaW5pdCcsIGZ1bmN0aW9uKGV2ZW50LCBzbGljaykge1xuICAgICAgICAgIGN1cnJlbnRDYXJvdXNlbC5maW5kKCcuc2xpZGUnKS5yZW1vdmVDbGFzcygnYXV0by1oZWlnaHQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXNFeHBhbmRlZCA9IGZhbHNlO1xuICAgICAgfSwgNjAwKTtcbiAgICB9XG4gIH1cblxuXG4gJCgnLnNsaWRlJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICBoYW1tZXJJdCh0aGlzKTtcbiAgfSk7XG59O1xuXG5cbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblx0Y29uc3Qgc2xpZGUgPSAkKCcuc2xpZGUnKSxcblx0XHRcdFx0cG9wdXAgPSAkKGAjJHtzbGlkZS5kYXRhKCdmb3JjZWQtcG9wdXAnKX1gKTtcblxuXHRsZXQgdmlld2VkUG9wdXAgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzdHVkeVBvcHVwJyk7XG5cblx0aWYgKCF2aWV3ZWRQb3B1cCAmJiBwb3B1cC5sZW5ndGgpIHsgXG5cdFx0cG9wdXAudG9nZ2xlQ2xhc3MoJ2hpZGUgYWN0aXZlJyk7XG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc3R1ZHlQb3B1cCcsIHRydWUpOyBcblx0fVxufTsiLCIvKlxuICogU2lkZSBOYXZcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zb2xlLmxvZygnY2xpY2tzdHJlYW0nKTtcblx0Ly9wcml2YXRlXG5cdHZhciBzZWxmLCBlbCwgbmV4dEJ1dHRvbiwgaGVhZGVyTmF2MSwgaGVhZGVyTmF2MiwgaGVhZGVyTmF2MywgaGVhZGVyTmF2NCwgaGVhZGVyTmF2NSwgcmVmZXJlbmNlcywgcmVmZXJlbmNlc0Nsb3NlLCBydW5uaW5nSW5WZWV2YSwgb3BlblBvcHVwRnVuY3Rpb24sIG9wZW5Qb3B1cENvbXBvc2l0aW9uLCBjbG9zZUJ0blBvcHVwRnVuY3Rpb24sIGNsb3NlQnRuUG9wdXBDb21wb3NpdGlvbiwgY2xvc2VDb250YWluZXJQb3B1cCwgdG91Y2hjbGljayA9ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSA/ICd0b3VjaGVuZCcgOiAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCkgPyAncG9pbnRlcnVwJyA6ICdjbGljayc7XG5cblx0XG5cdC8vc2V0IHZhcnNcblx0c2VsZiA9IHRoaXM7XG5cdGVsID0gJCgnLnNsaWRlJyk7XG5cdGhlYWRlck5hdjEgPSBlbC5maW5kKCcubG93ZXN0LWJ1dHRvbicpO1xuXHRoZWFkZXJOYXYyID0gZWwuZmluZCgnLnBhdGllbnRzLWJ1dHRvbicpO1xuXHRoZWFkZXJOYXYzID0gZWwuZmluZCgnLnJpc2stYnV0dG9uJyk7XG5cdGhlYWRlck5hdjQgPSBlbC5maW5kKCcuc2FmZXR5LWJ1dHRvbicpO1xuXHRoZWFkZXJOYXY1ID0gZWwuZmluZCgnLnN1bW1hcnktYnV0dG9uJyk7XG5cdHJ1bm5pbmdJblZlZXZhID0gKChsb2NhdGlvbi5ob3N0bmFtZSA9PT0gJycgfHwgbG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZigndmVldmFtb2JpbGUnKSA+IC0xKSkgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignTW9iaWxlJykgPiAwIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RvdWNoJykgPiAwKSk7XG5cdC8vaW5pdGlhbCBzZXR1cFxuXG5cblx0aGVhZGVyTmF2MS5vbih0b3VjaGNsaWNrLCBmdW5jdGlvbigpIHtcblx0XHR2ZWV2YVV0aWxzLnRyYWNrRXZlbnQoJ0hlYWRlciBFbGVtZW50cycsICdTZWxlY3RlZCBJdGVtJywgJ0xvd2VyIElzIEJldHRlciBIZWFkZXInLCBmdW5jdGlvbigpe30pO1xuXHR9KTtcblx0XG5cdGhlYWRlck5hdjIub24odG91Y2hjbGljaywgZnVuY3Rpb24oKSB7XG5cdFx0dmVldmFVdGlscy50cmFja0V2ZW50KCdIZWFkZXIgRWxlbWVudHMnLCAnU2VsZWN0ZWQgSXRlbScsICdQYXRpZW50IGF0IFJpc2sgSGVhZGVyJywgZnVuY3Rpb24oKXt9KTtcblx0fSk7XG5cblx0aGVhZGVyTmF2My5vbih0b3VjaGNsaWNrLCBmdW5jdGlvbigpIHtcblx0XHR2ZWV2YVV0aWxzLnRyYWNrRXZlbnQoJ0hlYWRlciBFbGVtZW50cycsICdTZWxlY3RlZCBJdGVtJywgJ1Jpc2sgUmVkdWN0aW9uIEhlYWRlcicsIGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXHRoZWFkZXJOYXY0Lm9uKHRvdWNoY2xpY2ssIGZ1bmN0aW9uKCkge1xuXHRcdHZlZXZhVXRpbHMudHJhY2tFdmVudCgnSGVhZGVyIEVsZW1lbnRzJywgJ1NlbGVjdGVkIEl0ZW0nLCAnU2FmZXR5IEhlYWRlcicsIGZ1bmN0aW9uKCl7fSk7XG5cdH0pO1xuXHRcblx0aGVhZGVyTmF2NS5vbih0b3VjaGNsaWNrLCBmdW5jdGlvbigpIHtcblx0XHR2ZWV2YVV0aWxzLnRyYWNrRXZlbnQoJ0hlYWRlciBFbGVtZW50cycsICdTZWxlY3RlZCBJdGVtJywgJ1Jlc291cmNlcyBIZWFkZXInLCBmdW5jdGlvbigpe30pO1xuXHR9KTsgIFxuXHRcdFxuXG5cdGNvbnN0IGdsb2JhbENvbnRlbnQgPSAkKCcuZ2xvYmFsLWNvbnRlbnQnKSxcblx0XHRcdFx0bmF2Q29udGFpbmVyID0gJCgnLmx1eC1pZHRsLWdsb2JsYS1uYXYnKSxcblx0XHRcdFx0bmF2VG9vZ2xlID0gbmF2Q29udGFpbmVyLmZpbmQoJy5oYW1idXJnZXInKSxcblx0XHRcdFx0c2lkZUJhciA9IG5hdkNvbnRhaW5lci5maW5kKCcuc2lkZS1iYXInKTtcblxuXHQvL1RvZ2dsZSBnbG9iYWwgbmF2IGJhclxuXHRuYXZUb29nbGUub24oJ2NsaWNrIHRhYicsIGZ1bmN0aW9uIChlKSB7XG5cdFx0c2lkZUJhci50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRpZiAoc2lkZUJhci5oYXNDbGFzcygnYWN0aXZlJykpIHtcblx0XHRcdFx0Z2xvYmFsQ29udGVudC5vbignY2xpY2sgdGFiJyxmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHNpZGVCYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpOyBcblx0XHRcdFx0XHRnbG9iYWxDb250ZW50Lm9mZignY2xpY2sgdGFiJyk7XG5cdFx0XHRcdH0pOyAgXHRcdFxuXHRcdH1cblxuICB9KTsgXG59OyIsImltcG9ydCB7IHpvb21lZCB9IGZyb20gJy4uL2hlbHBlcnMvem9vbS1mbGFnJztcbi8qXG4gKiBHbG9iYWwgU3dpcGUgTmF2XG4gKi9cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuICBjb25zdCBwcmVzZW50YXRpb25OYW1lID0gJ2FjY2Vzc19uZXh0X3Rvb2wnLFxuICAgICAgICBzbGlkZXNDb25maWcgPSBbXG4gICAgICAgICAgJzAwXzAwJyxcbiAgICAgICAgICAnMTBfMDAnLFxuICAgICAgICAgICcyMF8wMCcsXG4gICAgICAgICAgJzMwXzAwJyxcbiAgICAgICAgICAnNDBfMDAnLFxuICAgICAgICAgICc1MF8wMCcsXG4gICAgICAgICAgJzYwXzAwJyxcbiAgICAgICAgICAnNzBfMDAnXG4gICAgICAgIF0sXG5cbiAgICAgICAgdjIwU2xpZGVDb25maWcgPSBbXG5cbiAgICAgICAgXSxcblxuICAgICAgICB2MzBTbGlkZUNvbmZpZyA9IFtcblxuICAgICAgICBdLFxuXG4gICAgICAgIHY1MFNsaWRlQ29uZmlnID0gW1xuXG4gICAgICAgIF07XG5cbiAgdmFyIGRyYWdnaW5nID0gZmFsc2UsXG4gICAgICBtb3VzZVBvc1ggPSAwLFxuICAgICAgbW91c2VQb3NYRW5kID0gMDtcblxuICBjb25zdCBwcmVmaXhQcmVzZW50YXRpb24gPSAocHJlc2VudGF0aW9uKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwcmVzZW50YXRpb24gPT09ICd1bmRlZmluZWQnKXtcbiAgICAgIHJldHVybiBwcmVzZW50YXRpb25OYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcHJlc2VudGF0aW9uTmFtZSArICdfJyArIHByZXNlbnRhdGlvbjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcHJlZml4U2xpZGUgPSAoc2xpZGUsIHByZXNlbnRhdGlvbikgPT4ge1xuICAgIHByZXNlbnRhdGlvbiA9IHByZWZpeFByZXNlbnRhdGlvbihwcmVzZW50YXRpb24pO1xuICAgIHJldHVybiBwcmVzZW50YXRpb24gKyAnXycgKyBzbGlkZTtcbiAgfTtcblxuICBjb25zdCBnb1RvID0gKHNsaWRlSWQsIHByZXNlbnRhdGlvbikgPT4ge1xuICAgIHZhciBhY3RpdmVQb3BVcCA9ICQoJy5wb3AtdXAnKS5oYXNDbGFzcygnYWN0aXZlJyk7XG4gICAgdmFyIGFjdGl2ZVBERlBvcFVwID0gJCgnLnBkZi1wb3B1cC1jb250YWluZXInKS5oYXNDbGFzcygnb3BlbicpO1xuICAgIHZhciBhY3RpdmVTbGlkZXIgPSAkKCcucmFuZ2VzbGlkZXItd3JhcCcpLmhhc0NsYXNzKCdzbGlkZXItYWN0aXZlJyk7XG5cbiAgICBpZiAodHlwZW9mIHNsaWRlSWQgPT09ICd1bmRlZmluZWQnIHx8IGFjdGl2ZVBvcFVwIHx8IGFjdGl2ZVBERlBvcFVwIHx8IGFjdGl2ZVNsaWRlcil7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHpvb21lZC5nZXRab29tZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBocmVmID0gJyc7XG4gICAgdmFyIHNsaWRlID0gcHJlZml4U2xpZGUoc2xpZGVJZCwgcHJlc2VudGF0aW9uKTtcblxuICAgIGlmICh0eXBlb2YgcHJlc2VudGF0aW9uID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcHJlc2VudGF0aW9uID0gcHJlc2VudGF0aW9uTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwcmVzZW50YXRpb24gPSBwcmVmaXhQcmVzZW50YXRpb24ocHJlc2VudGF0aW9uKTtcbiAgICB9XG5cbiAgICBocmVmID0gJ3ZlZXZhOmdvdG9TbGlkZSgnICsgc2xpZGUgKyAnLnppcCknO1xuICAgIGNvbnNvbGUubG9nKCd2ZWV2YTpnb3RvU2xpZGUoJyArIHNsaWRlICsgJy56aXApJyk7XG4gICAgd2luZG93LmxvY2F0aW9uID0gaHJlZjtcblxuICB9O1xuXG4gIGNvbnN0IGFzc2lnbkV2ZW50ID0gKGVsZW1lbnQsIGV2ZW50LCBjYWxsYmFjaywgdXNlQ2FwdHVyZSkgPT4ge1xuICAgIHVzZUNhcHR1cmUgPSB0eXBlb2YgdXNlQ2FwdHVyZSAhPT0gJ3VuZGVmaW5lZCcgPyB1c2VDYXB0dXJlIDogZmFsc2U7XG5cbiAgICBpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXG4gICAgICBpZiAoZXZlbnQgPT09ICd0YXAgcHJlc3MnKSB7XG4gICAgICAgIHZhciBldiA9ICd0b3VjaGVuZCc7XG5cbiAgICAgICAgLy9PbiB0b3VjaCBzdGFydCB3ZSByZXNldCB2YWx1ZXMgYW5kIHNldCB0aGUgc3RhcnQgcG9zaXRpb25cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICBtb3VzZVBvc1ggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgbW91c2VQb3NYRW5kID0gZS50b3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL1doZW4gbW92aW5nIHdlIHJlY29yZCB0aGUgbGFzdCBwb3NpdGlvblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIG1vdXNlUG9zWEVuZCA9IGUudG91Y2hlc1swXS5wYWdlWDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9XaGVuIHRoZSB0b3VjaCBmaW5pc2hlcywgd2UgY2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoZSBzdGFydCBwb3NpdGlvblxuICAgICAgICAvL2lmIGl0J3MgYmlnZ2VyIHRoYW4gdGhlIHRyZXNob2xkIHdlIHNldCB0aGUgZmxhZyB0byB0cmlnZ2VyIHRoZSBzd2lwZVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgLy9UcmVzaG9sZCBzZXQgdG8gYSB0aGlyZCBvZiB0aGUgc2NyZWVuIHdpZHRoLCBpZiBiaWdnZXIgdGhhbiB0aGlzIHdlIHRyaWdnZXIgdGhlIHN3aXBlXG4gICAgICAgICAgdmFyIHRyZXNob2xkID0gJCh3aW5kb3cpLndpZHRoKCkvMztcblxuICAgICAgICAgIC8vVGhpcyBjb3ZlcnMgdGhlIHN3aXBlIHRvIHRoZSByaWdodCBhbmQgdG8gdGhlIGxlZnRcbiAgICAgICAgICBpZihtb3VzZVBvc1hFbmQgLSBtb3VzZVBvc1ggPiB0cmVzaG9sZCB8fCBtb3VzZVBvc1hFbmQgLSBtb3VzZVBvc1ggPCAtdHJlc2hvbGQpe1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvL0ZvciB0ZXN0aW5nXG4gICAgICAgICAgY29uc29sZS5sb2cobW91c2VQb3NYICsgJyAnICsgbW91c2VQb3NYRW5kICsgJyAnICsgZHJhZ2dpbmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXYsIGNhbGxiYWNrKTtcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBtYyA9IG5ldyBIYW1tZXIoZWxlbWVudCk7XG4gICAgICAgIG1jLmdldCgnc3dpcGUnKS5zZXQoe2RpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9BTEx9KTtcbiAgICAgICAgbWMub24oZXZlbnQsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY29uZmlndXJlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBTbGlkZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIFNsaWRlLmlkICE9PSAndW5kZWZpbmVkJyAmJiBTbGlkZS5pZCAmJiAodHlwZW9mIFNsaWRlLmRpc2FibGVTd2lwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIVNsaWRlLmRpc2FibGVTd2lwZSkgJiYgdHlwZW9mIHNsaWRlc0NvbmZpZyAhPT0gJ3VuZGVmaW5lZCcgJiYgc2xpZGVzQ29uZmlnLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBzbGlkZUlkID0gdHlwZW9mIFNsaWRlLnN3aXBlSWQgIT09ICd1bmRlZmluZWQnICYmIFNsaWRlLnN3aXBlSWQgPyBTbGlkZS5zd2lwZUlkIDogU2xpZGUuaWQ7XG4gICAgICB2YXIgc2xpZGVJbmRleCA9IHNsaWRlc0NvbmZpZy5pbmRleE9mKHNsaWRlSWQpO1xuXG4gICAgICAvLyBhc3NpZ25FdmVudChkb2N1bWVudC5ib2R5LCAnc3dpcGVsZWZ0JywgZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzd2lwZSBsZWZ0IGlzIGdvJyk7XG4gICAgICAvLyAgIGlmKHNsaWRlSW5kZXggPCBzbGlkZXNDb25maWcubGVuZ3RoIC0gMSkge1xuICAgICAgLy8gICAgIGdvVG8oc2xpZGVzQ29uZmlnW3NsaWRlSW5kZXggKyAxXSk7XG4gICAgICAvLyAgIH1cblxuICAgICAgLy8gfSk7XG5cbiAgICAgIC8vIGFzc2lnbkV2ZW50KGRvY3VtZW50LmJvZHksICdzd2lwZXJpZ2h0JywgZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzd2lwZSByaWdodCBpcyBnbycpO1xuICAgICAgLy8gICBpZihzbGlkZUluZGV4ID4gMCkge1xuICAgICAgLy8gICAgIGdvVG8oc2xpZGVzQ29uZmlnW3NsaWRlSW5kZXggLSAxXSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIC8vQ2hlY2sgaWYgdGhlIHNsaWRlIGhhcyB2ZXJ0aWNhbCBuYXZpZ2F0aW9uXG4gICAgaWYgKFNsaWRlLnZTd2lwZUlkKSB7XG4gICAgICBsZXQgdlNsaWRlSWQgPSBTbGlkZS52U3dpcGVJZCxcbiAgICAgICAgICB2U2xpZGVJbmRleCxcbiAgICAgICAgICB2U2xpZGVDb25maWc7XG4gICAgICAvL0ZpbHRlciB3aWNoIHZlcnRpY2FsIHNsaWRlIGNvbmZpZyB3aWxsIGJlIHVzZWRcbiAgICAgIHN3aXRjaCAodlNsaWRlSWQuc3BsaXQoJ18nKVswXSkge1xuICAgICAgICBjYXNlICcyMCc6XG4gICAgICAgICAgdlNsaWRlQ29uZmlnID0gdjIwU2xpZGVDb25maWc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJzMwJzpcbiAgICAgICAgICB2U2xpZGVDb25maWcgPSB2MzBTbGlkZUNvbmZpZztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnNTAnOlxuICAgICAgICAgIHZTbGlkZUNvbmZpZyA9IHY1MFNsaWRlQ29uZmlnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvL0FzaWduIHZlcnRpY2FsIHNsaWRlIGluZGV4IG9mIHNsaWRlXG4gICAgICB2U2xpZGVJbmRleCA9IHZTbGlkZUNvbmZpZy5pbmRleE9mKHZTbGlkZUlkKTtcblxuICAgICAgLy9Bc3NpZ24gdXAgYW5kIGRvd24gc3dpcGUgZXZlbnRzIGZyb20gSGFtbWVyXG4gICAgICBhc3NpZ25FdmVudChkb2N1bWVudC5ib2R5LCAnc3dpcGV1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3dpcGUgdXAgaXMgZ28nKTtcbiAgICAgICAgaWYodlNsaWRlSW5kZXggPCB2U2xpZGVDb25maWcubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGdvVG8odlNsaWRlQ29uZmlnW3ZTbGlkZUluZGV4ICsgMV0pO1xuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG4gICAgICBhc3NpZ25FdmVudChkb2N1bWVudC5ib2R5LCAnc3dpcGVkb3duJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzd2lwZSBkb3duIGlzIGdvJyk7XG4gICAgICAgIGlmKHZTbGlkZUluZGV4ID4gMCkge1xuICAgICAgICAgIGdvVG8odlNsaWRlQ29uZmlnW3ZTbGlkZUluZGV4IC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvL0Fzc2lnbiBldmVudHMgZm9yIHRhYiBwb3AgdXBzIG5hdmlnYXRpb25cbiAgICAvL1ZhbGlkYXRlIGlmIHRhYiBwb3AgdXAgZXhpc3RzIG9uIHNsaWRlXG4gICAgLy9Ob3RlOiB0aGlzIHdpbGwgbm90IGNyZWF0ZSBjb25mbGljdCB3aXRoIGdsb2JhbFxuICAgIC8vdmVydGljYWwgbmF2aWdhdGlvbiBiZWNhdXNlIGFsbCBuYXZpZ2F0aW9uIGlzXG4gICAgLy9kaXNhYmxlZCB3aGVuIHBvcCB1cHMgYXJlIGFjdGl2ZVxuICAgIGlmKCEkKCcucGF0aWVudC1wcm9maWxlLXBvcHVwJykuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtcbiAgICAgIGxldCB0YWJQb3BVcCA9ICQoJy50YWItcG9wdXAnKSxcbiAgICAgICAgICB0YWIxID0gdGFiUG9wVXAuZmluZCgnLnRhYi0xJyksXG4gICAgICAgICAgdGFiMiA9IHRhYlBvcFVwLmZpbmQoJy50YWItMicpO1xuXG4gICAgICBhc3NpZ25FdmVudChkb2N1bWVudC5ib2R5LCAnc3dpcGV1cCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAvL1ZhbGlkYXRlIGlmIHBvcCB1cCBpcyBhY3RpdmUgYW5kIGlmIHRhYjEgaXMgYWN0aXZlIHRvXG4gICAgICAgIC8vc3dpdGNoIGFjdGl2ZSBjbGFzc2VzIHdpdGggdGFiMlxuICAgICAgICBpZih0YWJQb3BVcC5oYXNDbGFzcygnYWN0aXZlJykgJiYgdGFiMS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGFicG9wdXAgc3dpcGUgdXAgaXMgZ28nKTtcbiAgICAgICAgICB0YWIxLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB0YWIyLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vVmFsaWRhdGUgaWYgcG9wIHVwIGlzIGFjdGl2ZSBhbmQgaWYgdGFiMiBpcyBhY3RpdmUgdG9cbiAgICAgIC8vc3dpdGNoIGFjdGl2ZSBjbGFzc2VzIHdpdGggdGFiMVxuICAgICAgYXNzaWduRXZlbnQoZG9jdW1lbnQuYm9keSwgJ3N3aXBlZG93bicsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZih0YWJQb3BVcC5oYXNDbGFzcygnYWN0aXZlJykgJiYgdGFiMi5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygndGFicG9wdXAgc3dpcGUgZG93biBpcyBnbycpO1xuICAgICAgICAgIHRhYjIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIHRhYjEuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaW5pdFN3aXBlTmF2ID0gKCkgPT4ge1xuICAgIGNvbmZpZ3VyZUxpc3RlbmVyKCk7XG4gIH07XG5cbiAgaW5pdFN3aXBlTmF2KCk7XG5cbn07XG4iLCIvKlxuICogUG9wdXAgbG9naWNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gICBjb25zdCBwb3B1cEN0YSA9ICQoJy5wb3AtdXAtdHJpZ2dlcicpO1xuICAgLy8gY29uc3QgcGRmUG9wdXBDdGEgPSAkKCcucGRmLXBvcC11cC10cmlnZ2VyJyk7XG4gICBsZXQgcG9wdXBDdGExID0gJCgnLnBvcC11cC10cmlnZ2VyJyk7XG5cbiAgIGlmIChwb3B1cEN0YS5sZW5ndGggPT09IDApe1xuICAgICAgcmV0dXJuO1xuICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwQ3RhLm9uKCdjbGljaycsIGZ1bmN0aW9uIHRvZ2dsZVBvcFVwIChlKXtcbiAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcG9wVXBzID0gJCgnLnBvcC11cCcpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVBvcFVwID0gcG9wVXBzLmZpbHRlcignLmFjdGl2ZScpLFxuICAgICAgICAgICAgICAgIG9wZW5pbmdQb3BVcCA9ICQodGhpcykuZGF0YSgncG9wdXAnKTtcblxuICAgICAgICAgICAgaWYoYWN0aXZlUG9wVXAubGVuZ3RoID4gMCAmJiBhY3RpdmVQb3BVcC5maW5kKCcudGFiJykuZmlsdGVyKCcuYWN0aXZlJykuZGF0YSgncmVmJykpIHtcbiAgICAgICAgICAgICAgIG9wZW5pbmdQb3BVcCA9IGFjdGl2ZVBvcFVwLmZpbmQoJy50YWInKS5maWx0ZXIoJy5hY3RpdmUnKS5kYXRhKCdyZWYnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcG9wVXBzLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKGAjJHtvcGVuaW5nUG9wVXB9YCkudG9nZ2xlQ2xhc3MoJ2hpZGUgYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAkKCcucG9wdXAtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiBjbG9zZUN1cnJlbnRQb3BVcCgpe1xuICAgICAgICAgbGV0IGNsb3NldFBvcFVwID0gJCh0aGlzKS5jbG9zZXN0KCcucG9wLXVwJyk7XG4gICAgICAgICAgICAvLyAgY3VycmVudFZpZGVvID0gY2xvc2V0UG9wVXAuZmluZCgndmlkZW8nKTtcblxuICAgICAgICAgLy8gaWYoY3VycmVudFZpZGVvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgIC8vICAgIGN1cnJlbnRWaWRlb1swXS5wYXVzZSgpO1xuICAgICAgICAgLy8gICAgY3VycmVudFZpZGVvWzBdLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgIC8vIH1cbiAgICAgICAgIGNsb3NldFBvcFVwLmFkZENsYXNzKCdoaWRlJyk7XG4gICAgICAgICBjbG9zZXRQb3BVcC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICBwb3B1cEN0YTEucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICB9XG5cbiAgIC8vIGlmIChwZGZQb3B1cEN0YS5sZW5ndGggPT09IDApe1xuICAgLy8gICAgcmV0dXJuO1xuICAgLy8gfSBlbHNlIHtcbiAgIC8vICAgIHBkZlBvcHVwQ3RhLm9uKCdjbGljaycsIGZ1bmN0aW9uIHRvZ2dsZVBvcFVwIChlKXtcbiAgIC8vICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgIC8vICAgICAgIGlmICgkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJykpIHtcbiAgIC8vICAgICAgICAgIHJldHVybjtcbiAgIC8vICAgICAgIH0gZWxzZSB7XG4gICAvLyAgICAgICAgICBsZXQgcG9wVXBzID0gJCgnLnBkZi1wb3B1cC1jb250YWluZXInKSxcbiAgIC8vICAgICAgICAgICAgICBhY3RpdmVQb3BVcCA9IHBvcFVwcy5maWx0ZXIoJy5vcGVuJyksXG4gICAvLyAgICAgICAgICAgICAgb3BlbmluZ1BvcFVwID0gJCh0aGlzKS5kYXRhKCdwb3B1cCcpO1xuXG4gICAvLyAgICAgICAgICBpZihhY3RpdmVQb3BVcC5sZW5ndGggPiAwICYmIGFjdGl2ZVBvcFVwLmZpbmQoJy50YWInKS5maWx0ZXIoJy5vcGVuJykuZGF0YSgncmVmJykpIHtcbiAgIC8vICAgICAgICAgICAgIG9wZW5pbmdQb3BVcCA9IGFjdGl2ZVBvcFVwLmZpbmQoJy50YWInKS5maWx0ZXIoJy5vcGVuJykuZGF0YSgncmVmJyk7XG4gICAvLyAgICAgICAgICB9XG5cbiAgIC8vICAgICAgICAgIHBvcFVwcy5hZGRDbGFzcygnY2xvc2VkJyk7XG4gICAvLyAgICAgICAgICBwb3BVcHMucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgLy8gICAgICAgICAgJChgIyR7b3BlbmluZ1BvcFVwfWApLnRvZ2dsZUNsYXNzKCdjbG9zZWQgb3BlbicpO1xuICAgLy8gICAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgLy8gICAgICAgfVxuICAgLy8gICAgfSk7XG5cbiAgIC8vICAgICQoJy5wZGYtcG9wdXAtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiBjbG9zZUN1cnJlbnRQb3BVcCgpe1xuICAgLy8gICAgICAgbGV0IGNsb3NldFBvcFVwID0gJCh0aGlzKS5jbG9zZXN0KCcucGRmLXBvcHVwLWNvbnRhaW5lcicpO1xuXG4gICAvLyAgICAgICBjbG9zZXRQb3BVcC5hZGRDbGFzcygnY2xvc2VkJyk7XG4gICAvLyAgICAgICBjbG9zZXRQb3BVcC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgLy8gICAgfSk7XG5cbiAgIC8vIH1cbn07XG4iLCJpbXBvcnQgeyBwaW5jaGVkIH0gZnJvbSAnLi4vaGVscGVycy9waW5jaC1mbGFnJztcblxuLypcbiAqIFBvcHVwIGxvZ2ljXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4gIGNvbnN0IHNjcm9sbCA9ICQoJy5zY3JvbGxlcicpLFxuICAgICAgICBzY3JvbGxWZWxvY2l0eSA9IDE1LFxuICAgICAgICBnbG9iYWxJc2lTY3JvbGxlciA9ICQoJyNnbG9iYWwtaXNpIC5zY3JvbGxlcicpLFxuICAgICAgICBnbG9iYWxJc2lTY3JvbGxlckNvbnRlbnQgPSBnbG9iYWxJc2lTY3JvbGxlci5maW5kKCcuaXNpLXNjcm9sbGVyLWNvbnRlbnQnKSxcbiAgICAgICAgc2Nyb2xsT2Zmc2V0ID0gZ2xvYmFsSXNpU2Nyb2xsZXIub2Zmc2V0KCk7XG4gICAgICAvLyAgIGNvbnN0IHNjcm9sbCA9IG5ldyBJU2Nyb2xsKCcuc2Nyb2xsZXInLCB7XG4gICAgICAvLyAgICAgc2Nyb2xsYmFyczogdHJ1ZVxuICAgICAgLy8gfSk7XG4gIGxldCBsYXN0WSxcbiAgICAgIGN1cnJlbnRZLFxuICAgICAgY3VycmVudFNjcm9sbCxcbiAgICAgIGlzaVNjcm9sbFBvc2l0aW9uLFxuICAgICAgY2hlY2tGb250TG9hZDtcblxuICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGdsb2JhbElzaVNjcm9sbGVyQ29udGVudC5oZWlnaHQoKSk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudC5vZmZzZXQoKS50b3ApO1xuICAgIGNvbnNvbGUubG9nKHNjcm9sbE9mZnNldCk7XG4gICAgLy8gbGV0IHNjcm9sbERpc3RhbmNlID0gTWF0aC5mbG9vcigoZWxlbWVudC5vZmZzZXQoKS50b3AgLSBzY3JvbGxPZmZzZXQpKTtcbiAgICBsZXQgc2Nyb2xsRGlzdGFuY2UgPSAwO1xuICAgIHN3aXRjaChlbGVtZW50LmF0dHIoJ2lkJykpIHtcbiAgICAgIGNhc2UgJ2luZGljYXRpb24nOlxuICAgICAgICBzY3JvbGxEaXN0YW5jZSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnd2FybmluZ3MtcHJlY2F1dGlvbnMnOlxuICAgICAgICBzY3JvbGxEaXN0YW5jZSA9IDEwMTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZXRpbmFsLWFibm9ybWFsaXRpZXMnOlxuICAgICAgICBzY3JvbGxEaXN0YW5jZSA9IDIwNTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdpbmNyZWFzZWQtaW50cmFvY3VsYXInOlxuICAgICAgICBzY3JvbGxEaXN0YW5jZSA9IDMwNztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjYXRhcmFjdCc6XG4gICAgICAgIHNjcm9sbERpc3RhbmNlID0gNDA5O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NvbW1vbi1zZW5zZSc6XG4gICAgICAgIHNjcm9sbERpc3RhbmNlID0gNTI4O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2ltbXVub2dlbmljaXR5JzpcbiAgICAgICAgc2Nyb2xsRGlzdGFuY2UgPSA2MTE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGVkaWF0cmljLXVzZSc6XG4gICAgICAgIHNjcm9sbERpc3RhbmNlID0gNzQwO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZ2xvYmFsSXNpU2Nyb2xsZXIuc2Nyb2xsVG9wKHNjcm9sbERpc3RhbmNlKTtcbiAgfTtcblxuICBzY3JvbGwub24oJ3RvdWNobW92ZScsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAocGluY2hlZC5nZXRQaW5jaCgpID09PSBmYWxzZSkge1xuICAgICAgY3VycmVudFkgPSBlLm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgY3VycmVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmKGN1cnJlbnRZID4gbGFzdFkpe1xuICAgICAgICAgJCh0aGlzKS5zY3JvbGxUb3AoY3VycmVudFNjcm9sbCAtIHNjcm9sbFZlbG9jaXR5KTtcbiAgICAgIH1lbHNlIGlmKGN1cnJlbnRZIDwgbGFzdFkpe1xuICAgICAgICAgJCh0aGlzKS5zY3JvbGxUb3AoY3VycmVudFNjcm9sbCArIHNjcm9sbFZlbG9jaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0WSA9IGN1cnJlbnRZO1xuICB9KTtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgIGNvbnN0IHNjcm9sbEVsZW0gPSAkKCcuc2xpZGUnKS5kYXRhKCdpc2lzY3JvbGwnKTtcblxuICAgIGlmKHNjcm9sbEVsZW0pIHtcbiAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgc2Nyb2xsVG9TZWN0aW9uKCQoYCMke3Njcm9sbEVsZW19YCkpOyB9LCAxMDApO1xuICAgICAgLy8gc2Nyb2xsVG9TZWN0aW9uKCQoYCMke3Njcm9sbEVsZW19YCkpO1xuICAgICAgY2hlY2tGb250TG9hZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGdsb2JhbElzaVNjcm9sbGVyQ29udGVudC5oZWlnaHQoKSA+PSA4OTEpIHtcbiAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJChgIyR7c2Nyb2xsRWxlbX1gKSk7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja0ZvbnRMb2FkKTtcbiAgICAgICAgfVxuICAgICAgfSwgMTAwKTtcbiAgICB9XG4gIH0pO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgJCgnLnR1dG9yaWFsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgIG1hcmdpbjowLFxuICAgIGRvdHM6IHRydWUsXG4gICAgbmF2OiB0cnVlLFxuICAgIGl0ZW1zOiAxLFxuICAgIG5hdlNwZWVkOiA1MDAwLFxuICAgIGFuaW1hdGVJbjogJ2ZhZGVJbidcbiAgfSk7XG5cbiAgJCgnLm5vdGlmaWNhdGlvbi1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICBtYXJnaW46MCxcbiAgICBkb3RzOiB0cnVlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBpdGVtczogMSxcbiAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxuICAgIG5hdlRleHQ6W1xuICAgICAgJzxkaXY+PC9kaXY+JyxcbiAgICAgICc8ZGl2PjwvZGl2PidcbiAgICAgIF1cbiAgfSk7XG5cbiAgJCgnLm91dHB1dC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICBtYXJnaW46MTAsXG4gICAgZG90czogdHJ1ZSxcbiAgICBuYXY6IHRydWUsXG4gICAgaXRlbXM6IDEsXG4gICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICBuYXZUZXh0OltcbiAgICAgICc8ZGl2PjwvZGl2PicsXG4gICAgICAnPGRpdj48L2Rpdj4nXG4gICAgICBdXG4gIH0pO1xuXG4gICQoJy50YWtlZGEtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgbWFyZ2luOjEwLFxuICAgIGRvdHM6IHRydWUsXG4gICAgbmF2OiB0cnVlLFxuICAgIGl0ZW1zOiAxLFxuICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXG4gICAgbmF2VGV4dDpbXG4gICAgICAnPGRpdj48L2Rpdj4nLFxuICAgICAgJzxkaXY+PC9kaXY+J1xuICAgICAgXVxuICB9KTtcblxuICAkKCcuZ2FtbWFnYXJkLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xuICAgIG1hcmdpbjoxMCxcbiAgICBkb3RzOiB0cnVlLFxuICAgIG5hdjogdHJ1ZSxcbiAgICBpdGVtczogMSxcbiAgICBhbmltYXRlSW46ICdmYWRlSW4nLFxuICAgIG5hdlRleHQ6W1xuICAgICAgJzxkaXY+PC9kaXY+JyxcbiAgICAgICc8ZGl2PjwvZGl2PidcbiAgICAgIF1cbiAgfSk7XG5cbiAgJCgnLmh5cXZpYS1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICBtYXJnaW46MTAsXG4gICAgZG90czogdHJ1ZSxcbiAgICBuYXY6IHRydWUsXG4gICAgaXRlbXM6IDEsXG4gICAgYW5pbWF0ZUluOiAnZmFkZUluJyxcbiAgICBuYXZUZXh0OltcbiAgICAgICc8ZGl2PjwvZGl2PicsXG4gICAgICAnPGRpdj48L2Rpdj4nXG4gICAgICBdXG4gIH0pO1xuXG4gICAkKCcuY3V2aXRydS1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgIG1hcmdpbjoxMCxcbiAgICAgIGRvdHM6IHRydWUsXG4gICAgICBuYXY6IHRydWUsXG4gICAgICBpdGVtczogMSxcbiAgICAgIGFuaW1hdGVJbjogJ2ZhZGVJbicsXG4gICAgICBuYXZUZXh0OltcbiAgICAgICAgICc8ZGl2PjwvZGl2PicsXG4gICAgICAgICAnPGRpdj48L2Rpdj4nXG4gICAgICAgICBdXG4gICB9KTtcblxuICB2YXIgb3dsMSA9ICQoJy5ub3RpZmljYXRpb24tY2Fyb3VzZWwnKTtcbiAgdmFyIHRyYWNrVmlld2VkU2xpZGUgPSBbXTtcbiAgJCgnLnJlbWFpbmluZy1zd2lwZXMnKS50ZXh0KDIpO1xuICBvd2wxLm9uKCdjaGFuZ2VkLm93bC5jYXJvdXNlbCcsIGZ1bmN0aW9uKHByb3BlcnR5KSB7XG4gICAgdmFyIGN1cnJlbnQgPSBwcm9wZXJ0eS5pdGVtLmluZGV4O1xuICAgIGlmICh0cmFja1ZpZXdlZFNsaWRlLmluZGV4T2YoY3VycmVudCkgPT09IC0xKSB7XG4gICAgICB0cmFja1ZpZXdlZFNsaWRlLnB1c2goY3VycmVudCk7XG4gICAgfVxuICAgIHZhciB2aWV3ZWRDb3VudCA9IHByb3BlcnR5Lml0ZW0uY291bnQgLSB0cmFja1ZpZXdlZFNsaWRlLmxlbmd0aDtcbiAgICAkKCcucmVtYWluaW5nLXN3aXBlcycpLnRleHQodmlld2VkQ291bnQ8PS0xPzA6dmlld2VkQ291bnQgKTtcbiAgfSk7XG5cbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cblx0Ly9ub3RpZmljYXRpb24gbWVudSBvcGVuXG5cdCQoJyNjdXN0b21lckFjY291bnROYW1lLCAuY3VzdG9tZXJJY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmdsb2JhbC10b3AtbmF2JykuY3NzKCd6LWluZGV4JywgJzAnKTtcblx0XHQkKCcjY3VzdG9tZXJBY2NvdW50JykuaGlkZSgpO1xuXHRcdCQoJyNjdXN0b21lckFjY291bnROYW1lJykuaGlkZSgpO1xuXHRcdCQoJy5ub3RpZmljYXRpb24tbmF2JykuY3NzKCdyaWdodCcsICcwcHgnKTtcblx0fSk7XG5cdC8vbm90aWZpY2F0aW9uIG1lbnUgY2xvc2Vcblx0JCgnLmJhY2tfbm90aWZpY2F0aW9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JCgnLmdsb2JhbC10b3AtbmF2JykuY3NzKCd6LWluZGV4JywgJzInKTtcblx0XHQkKCcubm90aWZpY2F0aW9uLW5hdicpLmNzcygncmlnaHQnLCAnLTI5M3B4Jyk7XG5cdFx0JCgnI2N1c3RvbWVyQWNjb3VudCcpLnNob3coKTtcblx0XHQkKCcjY3VzdG9tZXJBY2NvdW50TmFtZScpLnNob3coKTtcblx0fSk7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXG4vLyBzbGlkZSA5MC4wMFxuICBjb25zdCBzbGlkZXJPbmUgPSAkKCcuc2xpZGVyLW9uZScpO1xuICBjb25zdCBzbGlkZXJUd28gPSAkKCcuc2xpZGVyLXR3bycpO1xuICBjb25zdCBzbGlkZXJDb250ZW50T25lID0gJCgnLnNsaWRlci1jb250ZW50LW9uZScpO1xuICBjb25zdCBzbGlkZXJDb250ZW50VHdvID0gJCgnLnNsaWRlci1jb250ZW50LXR3bycpO1xuXG5cbiAgc2xpZGVyT25lLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHNsaWRlckNvbnRlbnRPbmUuc2hvdygpO1xuICAgIHNsaWRlckNvbnRlbnRUd28uaGlkZSgpO1xuICAgIHNsaWRlcmZvb3Rlci5oaWRlKCk7XG4gIH0pO1xuXG4gIHNsaWRlclR3by5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBzbGlkZXJDb250ZW50T25lLmhpZGUoKTtcbiAgICBzbGlkZXJDb250ZW50VHdvLnNob3coKTtcbiAgICBzbGlkZXJmb290ZXIuc2hvdygpO1xuICB9KTtcbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICQoJy5jaGFubmVsX3R0Jykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy5jaGFubmVsLXR0LWNvbnRlbnQnKS5zaG93KCk7XG4gIH0pO1xuICAkKCcuY2hhbm5lbC10dC1jb250ZW50IC5jbG9zZVRvb2xUaXAnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmNoYW5uZWwtdHQtY29udGVudCcpLmhpZGUoKTtcbiAgfSk7XG5cbiAgJCgnLmJlbmVmaXRfdHQnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJlbmVmaXQtdHQtY29udGVudCcpLnNob3coKTtcbiAgfSk7XG4gICQoJy5iZW5lZml0LXR0LWNvbnRlbnQgLmNsb3NlVG9vbFRpcCcpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuYmVuZWZpdC10dC1jb250ZW50JykuaGlkZSgpO1xuICB9KTtcblxuICAkKCcudG9wX3R0Jykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy50b3AtdHQtY29udGVudCcpLnNob3coKTtcbiAgfSk7XG4gICQoJy50b3AtdHQtY29udGVudCAuY2xvc2VUb29sVGlwJykub24oICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICQoJy50b3AtdHQtY29udGVudCcpLmhpZGUoKTtcbiAgfSk7XG4gIFxuICAkKCcuYnJhbmR0dCcpLm9uKCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAkKCcuYnJhbmQtdHQtY29udGVudCcpLnNob3coKTtcbiAgfSk7XG4gICQoJy5icmFuZC10dC1jb250ZW50IC5jbG9zZVRvb2xUaXAnKS5vbiggJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgJCgnLmJyYW5kLXR0LWNvbnRlbnQnKS5oaWRlKCk7XG4gIH0pO1xuXG59O1xuIl19
