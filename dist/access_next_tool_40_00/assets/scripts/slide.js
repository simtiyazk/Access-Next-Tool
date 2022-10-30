'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slide = {
  id: '40_00'
};

$(function () {

  //private
  var self,
      el,
      runningInVeeva,
      popupOpen,
      touchclick = 'ontouchend' in document.documentElement ? 'touchend' : window.navigator.pointerEnabled ? 'pointerup' : 'click';

  var Slide = function Slide() {
    _classCallCheck(this, Slide);

    //set vars
    self = this;
    popupOpen = '';
    el = $('#access_next_tool_40_00');

    runningInVeeva = (location.hostname === '' || location.hostname.indexOf('veevamobile') > -1) && (navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('Touch') > 0);
    //initial setup
  };

  //----- handlers ------//

  var slide = new Slide();
});
//# sourceMappingURL=slide.js.map
