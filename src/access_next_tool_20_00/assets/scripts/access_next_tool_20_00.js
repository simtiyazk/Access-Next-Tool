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

  $("#cuvitruBrandBox").change(function () {
    var ischecked = $(this).is(':checked');
    if (ischecked) {
      $('.cuvitru-brand').css('background-image', 'linear-gradient(90deg, #4C9BCF 0%, #51B1BF 100%)');
      $('.cuvitru-logo>img').attr('src', '../shared/images/cuvitru_logo_white.png');
    }
    if (!ischecked) {
      $('.cuvitru-brand').css('background-image', 'unset');
      $('.cuvitru-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
    }
  });
  $("#hyqviaBrandBox").change(function () {
    var ischecked = $(this).is(':checked');
    if (ischecked) {
      $('.hyqvia-brand').css('background', '#51B1BF');
      $('.hyqvia-logo>img').attr('src', '../shared/images/hyqvia_logo_white.png');
    }
    if (!ischecked) {
      $('.hyqvia-brand').css('background', '#ffffff');
      $('.hyqvia-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
    }
  });
  $("#gammagardBrandBox").change(function () {
    var ischecked = $(this).is(':checked');
    if (ischecked) {
      $('.gammagard-brand').css('background-image', 'linear-gradient(78deg, #ABB436 1%, #EBA800 100%)');
      $('.gammagard-logo>img').attr('src', '../shared/images/gammagard_logo_white.png');
    }
    if (!ischecked) {
      $('.gammagard-brand').css('background-image', 'unset');
      $('.gammagard-logo>img').attr('src', '../shared/images/gammagard_logo.png');
    }
  });
  $('.brand-section input[type="checkbox"]').on('change', function () {
    if ($('#cuvitruBrandBox').is(':checked') || $('#hyqviaBrandBox').is(':checked') || $('#gammagardBrandBox').is(':checked')) {
      $('.continueLink>a').css({ 'background': '#FF0000', 'pointer-events': 'unset' });
    }
    else if ($('#cuvitruBrandBox').not(':checked') && $('#hyqviaBrandBox').not(':checked') && $('#gammagardBrandBox').not(':checked')) {
      $('.continueLink>a').css({ 'background': '#EDECEC', 'pointer-events': 'none' });
    }
  });
  $("#cuvitruBrandBox").click(function () {
    if ($("#gammagardBrandBox").is(':checked')) {
      $('#cuvitruBrandBox').prop('checked', true);
      $('#gammagardBrandBox').prop('checked', false);
      $('.gammagard-brand').css('background-image', 'unset');
      $('.gammagard-logo>img').attr('src', '../shared/images/gammagard_logo.png');

    }
  });
  $("#hyqviaBrandBox").click(function () {
    if ($("#gammagardBrandBox").is(':checked')) {
      $('#hyqviaBrandBox').prop('checked', true);
      $('#gammagardBrandBox').prop('checked', false);
      $('.gammagard-brand').css('background-image', 'unset');
      $('.gammagard-logo>img').attr('src', '../shared/images/gammagard_logo.png');

    }
  });
  $("#gammagardBrandBox").click(function () {
    if ($("#cuvitruBrandBox").is(':checked') || $("#hyqviaBrandBox").is(':checked')) {
      $('#cuvitruBrandBox').prop('checked', false);
      $('#hyqviaBrandBox').prop('checked', false);
      $('#gammagardBrandBox').prop('checked', true);
      $('.cuvitru-brand').css('background-image', 'unset');
      $('.cuvitru-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
      $('.hyqvia-brand').css('background', '#ffffff');
      $('.hyqvia-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
    }

  });
  $(".continueLink").click(function () {
    if ($('#cuvitruBrandBox').is(':checked') && $('#hyqviaBrandBox').is(':checked') && $('#gammagardBrandBox').not(':checked')) {
      var storeValue = 'CUVITRU/HYQVIA';
      localStorage.setItem("storeValue", storeValue);
    }
    else if ($('#cuvitruBrandBox').is(':checked') && $('#hyqviaBrandBox').not(':checked') && $('#gammagardBrandBox').not(':checked')) {
      var storeValue = 'CUVITRU';
      localStorage.setItem("storeValue", storeValue);
    }
    else if ($('#cuvitruBrandBox').not(':checked') && $('#hyqviaBrandBox').is(':checked') && $('#gammagardBrandBox').not(':checked')) {
      var storeValue = 'HYQVIA';
      localStorage.setItem("storeValue", storeValue);
    }
    else if ($('#cuvitruBrandBox').not(':checked') && $('#hyqviaBrandBox').not(':checked') && $('#gammagardBrandBox').is(':checked')) {
      var storeValue = 'GAMMAGARD';
      localStorage.setItem("storeValue", storeValue);
    }
    $('#cuvitruBrandBox').prop('checked', false);
    $('#hyqviaBrandBox').prop('checked', false);
    $('#gammagardBrandBox').prop('checked', false);
  });
});