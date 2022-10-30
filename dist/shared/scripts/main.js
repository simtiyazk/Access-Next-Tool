"use strict";

(function () {
  function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }return s;
  }return e;
})()({ 1: [function (require, module, exports) {
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
  }, {}], 2: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, {}], 3: [function (require, module, exports) {
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
  }, {}], 4: [function (require, module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
      }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

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
  }, {}], 5: [function (require, module, exports) {
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

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }

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
  }, { "./helpers/helper": 1, "./helpers/utils": 3, "./modules/draggable": 6, "./modules/forced-popup": 7, "./modules/global-nav": 8, "./modules/global-swipe-nav": 9, "./modules/popup": 10, "./modules/scroll": 11, "./modules/slide-carousel": 12, "./modules/slide-menu": 13, "./modules/tab-click": 14, "./modules/tool-tip-content": 15 }], 6: [function (require, module, exports) {
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
  }, { "../helpers/pinch-flag": 2, "../helpers/zoom-flag": 4 }], 7: [function (require, module, exports) {
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
  }, {}], 8: [function (require, module, exports) {
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
  }, {}], 9: [function (require, module, exports) {
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
  }, { "../helpers/zoom-flag": 4 }], 10: [function (require, module, exports) {
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
  }, {}], 11: [function (require, module, exports) {
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
  }, { "../helpers/pinch-flag": 2 }], 12: [function (require, module, exports) {
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
  }, {}], 13: [function (require, module, exports) {
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
  }, {}], 14: [function (require, module, exports) {
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
  }, {}], 15: [function (require, module, exports) {
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
  }, {}] }, {}, [5]);
//# sourceMappingURL=main.js.map
