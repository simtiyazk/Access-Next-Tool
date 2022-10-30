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
//# sourceMappingURL=main.js.map
