'use strict';

function getPDF(controlCenter) {
  $('#viewPdfPopup').hide();
  $('#spinnerContent').show();
  if (controlCenter) {
    var accessAvailable = [];
    var benefitTypePharmacy = [];
    if (controlCenter.plans) {
      accessAvailable = Array(controlCenter.plans.length).fill(controlCenter.access);
      benefitTypePharmacy = Array(controlCenter.plans.length).fill(controlCenter.benefittype);
    }
    var dataObj = {
      "placeholderVariables[brandName]": controlCenter.product,
      "placeholderVariables[monthYear]": controlCenter.updatedDate,
      "placeholderVariables[available]": controlCenter.access,
      "placeholderVariables[medicare]": controlCenter.channel,
      "placeholderVariables[pharmacy]": controlCenter.benefittype,
      "placeholderVariables[healthPlanName]": controlCenter.plans,
      "placeholderVariables[accessAvailable]": accessAvailable,
      "placeholderVariables[benefitTypePharmacy]": benefitTypePharmacy,
      "placeholderVariables[location]": "New York"
    };
  }

  var settings = {
    "url": "http://eh-viiv-stage.omnicomhealthgroup.com/TAKAccessNext/api/Token",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "data": {
      "username": "adminApi",
      "password": "MjQ2NDg4fQ"
    }
  };

  $.ajax(settings, dataObj).done(function (response) {
    var pdfGeneratorSettings = {
      "url": "http://eh-viiv-stage.omnicomhealthgroup.com/TAKAccessNext/api/PdfGenerator/TAKAccessNext",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + response.Token
      },
      "data": dataObj
    };

    $.ajax(pdfGeneratorSettings).done(function (response) {
      console.log(response);
      $('#spinnerContent').hide();
      $('#viewPdfPopup').show();
      $("#pdfReadyLink").attr("href", response);
    }).fail(function (jqXHR, textStatus, errorThrown) {
      $('#result').html(jqXHR.responseText || textStatus);
    });

    //$("#result").html(response);
  }).fail(function (jqXHR, textStatus, errorThrown) {
    $('#result').html(jqXHR.responseText || textStatus);
  });
}
//# sourceMappingURL=apis.js.map
