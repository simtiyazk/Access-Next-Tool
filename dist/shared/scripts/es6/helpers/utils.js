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
//# sourceMappingURL=utils.js.map
