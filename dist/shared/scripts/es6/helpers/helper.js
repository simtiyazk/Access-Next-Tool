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
//# sourceMappingURL=helper.js.map
