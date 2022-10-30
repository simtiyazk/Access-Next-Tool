$(document).ready(function () {
  $(".gammagardISI").on('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.open('https://www.shirecontent.com/pi/pdfs/gamliquid_usa_eng.pdf');
  });
});
