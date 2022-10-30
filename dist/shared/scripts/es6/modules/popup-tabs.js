'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

/*
* Popup tab logic
*/
exports.default = function () {

   var tabPopup = $('.tab-popup'),
       tabLinks = tabPopup.find('.tab-link a');

   if (tabPopup.length > 0) {
      tabLinks.on('click', function (e) {
         e.preventDefault();
         var currentActive = tabPopup.filter('.active'),
             currentTabLinks = currentActive.find('.tab-link a'),
             currentTabs = currentActive.find('.tab');

         var targetTab = $(e.target).data('target');

         currentTabs.removeClass('active');
         $('#' + targetTab).addClass('active');
      });
   }
};
//# sourceMappingURL=popup-tabs.js.map
