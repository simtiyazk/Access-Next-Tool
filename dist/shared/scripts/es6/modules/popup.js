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
//# sourceMappingURL=popup.js.map
