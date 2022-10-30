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
//# sourceMappingURL=slide-carousel.js.map
