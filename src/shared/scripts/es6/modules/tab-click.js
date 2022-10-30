export default () => {

// slide 90.00
  const sliderOne = $('.slider-one');
  const sliderTwo = $('.slider-two');
  const sliderContentOne = $('.slider-content-one');
  const sliderContentTwo = $('.slider-content-two');


  sliderOne.on('click', function() {
    sliderContentOne.show();
    sliderContentTwo.hide();
    sliderfooter.hide();
  });

  sliderTwo.on('click', function() {
    sliderContentOne.hide();
    sliderContentTwo.show();
    sliderfooter.show();
  });
};
