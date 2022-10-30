"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

$(document).ready(function () {
  // App allowing if user has selected an account
  com.veeva.clm.getDataForCurrentObject("Account", "ID", getAddressesForAccount);

  //use the current Account Id to fetch the id's of all related Addresses
  function getAddressesForAccount() {
    if (result.success == true) {
      $('.customer-popup').css("display", "none");
    } else {
      $('.customer-popup').css("display", "block");
    }
  }

  $(".print").click(function () {
    var controlCenter = JSON.parse(localStorage.getItem("controlCenter"));
    getPDF(controlCenter);
  });
  $('.print, .print a, .mail').css({ "pointer-events": "none" });
  $(".owl-nav,.owl-dots,.sideLine").hide();
  $(".owl-stage-outer").css("pointer-events", "none");
  $('.output-carousel', '.hyqvia-carousel', '.gammagard-carousel', '.takeda-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });
  getaccessvalues();
  getbenefivalues();
  getchannelvalues();
  readValue();
});

function readValue() {
  var _str$split, _str$split2;

  var x = localStorage["cuvitrusetitem"];
  var str = x;
  var pl = (_str$split = str.split(","), _str$split2 = _toArray(_str$split), _str$split);
  $('.Cuvitru_main tr').show();
  //$('.p-l-28').text('Health Plan Name');
  $('.dplan0').text(pl[0]);
  $('.dplan1').text(pl[1]);
  $('.dplan2').text(pl[2]);
  $('.dplan3').text(pl[3]);
  $('.dplan4').text(pl[4]);
  $('.dplan5').text(pl[5]);
  $('.dplan6').text(pl[6]);
  $('.dplan7').text(pl[7]);
  if (x.length == 0) {
    $('.p-l-28').text('Health Plan Name');
    $(".owl-nav,.owl-dots,.sideLine").hide();
    $('.print, .print a, .mail').css({ "pointer-events": "none" });
    $(".owl-stage-outer").css("pointer-events", "none");
  } else {
    $(".owl-nav,.owl-dots,.sideLine").show();
    $('.print, .print a, .mail').css({ "pointer-events": "all" });
    $(".owl-stage-outer").css("pointer-events", "unset");
  }
  checkplanSelected();
}
function checkplanSelected() {
  $("tr .p-l-28").each(function () {
    if ($(this).text() === "Health Plan Name") {
      $(this).parent().hide();
    } else {
      $(this).show();
    }
  });
}
function getaccessvalues() {
  var accval = localStorage.getItem("backAccess");
  $('.access').text(accval);
  if (accval == null || accval == undefined) {
    $('.access').text('Covered with restrictions*');
  }
}
function getbenefivalues() {
  var benefival = localStorage.getItem("backBenefit");
  $('.benefitType').text(benefival);
  if (benefival == null || benefival == undefined) {
    $('.benefitType').text('Pharmacy');
  }
}
function getchannelvalues() {
  var chanval = localStorage.getItem("backChannel");
  $('.channel').text(chanval);
  if (chanval == null || chanval == undefined) {
    $('.channel').text('Medicare');
  }
}

var HmyScroll;
var controlCenterEnv = $('#controlCenterEnv').attr('class');
window.onload = function () {
  HmyScroll = new IScroll('.' + controlCenterEnv, {
    mouseWheel: true,
    scrollbars: true,
    scrollX: false,
    scrollY: true
  });
};
//# sourceMappingURL=common.js.map
