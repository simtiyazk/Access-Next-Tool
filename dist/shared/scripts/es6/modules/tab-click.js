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
//# sourceMappingURL=tab-click.js.map
