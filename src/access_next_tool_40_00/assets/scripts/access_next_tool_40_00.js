$(document).ready(function () {
  $(".CuvitruISI").on('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.open('https://www.shirecontent.com/PI/PDFS/Cuvitru_USA_ENG.PDF');
  });
});