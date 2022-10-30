// Helpers
import helper from './helpers/helper';
import utils from './helpers/utils';

// Modules
import globalSwipeNav from './modules/global-swipe-nav';
import globalNav from './modules/global-nav';
import scroll from './modules/scroll';
// import analytics from './modules/analytics';
import popup from './modules/popup';
// import toolTipPopup from './modules/tooltip-popup';
import tabclick from './modules/tab-click';
import draggable from './modules/draggable';
// import videoPopup from './modules/video-popup';
import forcedPopup from './modules/forced-popup';
import slideCarousel from './modules/slide-carousel';
import slideMenu from './modules/slide-menu';
import toolTipContent from './modules/tool-tip-content';
// import disableswipeaction from './modules/disable-swipe-action';

$(() => {

  // Helpers
  helper();
  utils();

  // Modules
  draggable();
  globalSwipeNav();
  globalNav();
  scroll();
  popup();
  // popupTab();
  // videoPopup();
  forcedPopup();
  // toolTipPopup();
  tabclick();
  // analytics();
  slideCarousel();
  slideMenu();
  toolTipContent();
  // disableswipeaction();

});
