$(document).ready(function () {
  $(".HyqviaISI").on('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.open('https://www.shirecontent.com/PI/PDFs/HYQVIA_USA_ENG.pdf');
  });
});
