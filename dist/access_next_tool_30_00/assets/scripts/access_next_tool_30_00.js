'use strict';

$(document).ready(function () {
  var jsonResultpayload;

  /* Initial dropdown set up - When the page loads with no previous data */
  // $("#styled-checkbox-1").attr('disabled', true);
  var productText = "";
  var prodselected, channelSelected, benefitSelected;

  //check if edit item is set in the local storage and then set the value
  // to the save as and delete the edititem occurence in the local storage
  var editItemId = JSON.parse(localStorage.getItem('edititem'));
  var storeValue = localStorage.getItem('storeValue');
  var controlCenter = JSON.parse(localStorage.getItem('controlCenter'));

  localStorage.removeItem('controlCenter');
  localStorage.removeItem('edititem');
  localStorage.removeItem('storeValue');

  var plansSelected = [],
      isPlansSelected = true,
      isSaved = true;

  //ENV variables

  //UAT - Static data
  // DEV - Dynamic data
  var env = 'UAT';
  var jsonObj = [];

  if (env == 'UAT') {
    jsonObj = [{
      "counties": [{
        "countyFips": "02013",
        "countyName": "Aleutians East, AK",
        "brands": [{
          "brand": "Cuvitru/HyQvia",
          "channels": [{
            "channel": "Commercial",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 5,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Premera",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "MHBP",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "UnitedHealthcare (UHC)",
                "payerAccess": "Covered",
                "topPayer": 7
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "Kroger",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }]
          }, {
            "channel": "Medicare",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }]
            }]
          }]
        }, {
          "brand": "Gammagard",
          "channels": [{
            "channel": "Commercial",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 5,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Premera",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "MHBP",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "UnitedHealthcare (UHC)",
                "payerAccess": "Covered",
                "topPayer": 7
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 1,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered without restrictions",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered without restrictions",
                "topPayer": 4
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Kroger",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 1,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered without restrictions",
                "topPayer": 2
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered without restrictions",
                "topPayer": 5
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }]
          }, {
            "channel": "Medicare",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 1,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Humana",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered without restrictions",
                "topPayer": 2
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 1,
              "planCountCovered": 3,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Humana",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered without restrictions",
                "topPayer": 3
              }]
            }]
          }]
        }, {
          "brand": "HyQvia",
          "channels": [{
            "channel": "Commercial",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 5,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Premera",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "MHBP",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "UnitedHealthcare (UHC)",
                "payerAccess": "Covered",
                "topPayer": 7
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "Kroger",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Navitus Health Solutions",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }]
          }, {
            "channel": "Medicare",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }]
            }]
          }]
        }, {
          "brand": "Cuvitru",
          "channels": [{
            "channel": "Commercial",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 5,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Premera",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "MHBP",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "UnitedHealthcare (UHC)",
                "payerAccess": "Covered",
                "topPayer": 7
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "Kroger",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Moda Health",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 8,
              "payers": [{
                "payerName": "Aetna Health",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "Express Scripts (ESI)",
                "payerAccess": "Covered",
                "topPayer": 2
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 3
              }, {
                "payerName": "FEPBlue",
                "payerAccess": "Covered",
                "topPayer": 4
              }, {
                "payerName": "CVS Caremark",
                "payerAccess": "Covered",
                "topPayer": 5
              }, {
                "payerName": "Elixir",
                "payerAccess": "Covered",
                "topPayer": 6
              }, {
                "payerName": "CIGNA",
                "payerAccess": "Covered",
                "topPayer": 7
              }, {
                "payerName": "Government Employees Health Association (GEHA)",
                "payerAccess": "Covered",
                "topPayer": 8
              }]
            }]
          }, {
            "channel": "Medicare",
            "benefitType": [{
              "benefit": "Medical",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 1
              }]
            }, {
              "benefit": "Medical and Pharmacy",
              "planCountUnrestricted": 0,
              "planCountCovered": 1,
              "payers": [{
                "payerName": "Noridian Healthcare Solutions [MAC]",
                "payerAccess": "Covered",
                "topPayer": 1
              }, {
                "payerName": "OptumRx",
                "payerAccess": "Covered",
                "topPayer": 2
              }]
            }]
          }]
        }]
      }]
    }];

    $('#spinnerContent').show();
    setTimeout(function () {
      jsonResultpayload = jsonObj[0].counties[0].brands;
      $('#spinnerContent').hide();
      initialSetup();
    }, 1000);
  } else {

    //use the current Account Id to fetch the id's of all related Addresses
    var getAddressesForAccount = function getAddressesForAccount() {
      if (result.success == true) {
        // AN_County
        var getCountybyFipscode = function getCountybyFipscode() {
          if (result.success == true) {
            var getJSONpayloadbyFipscode = function getJSONpayloadbyFipscode() {
              if (result.success == true) {
                var resultArr = result.AN_County__c[0].JSON_Payload__c;

                var resArr = resultArr.replace(/\\/, "");
                jsonResultpayload = JSON.parse(resArr.slice(1, -1));

                $('#spinnerContent').hide();
                initialSetup();
              } else {
                $('.customer-popup').css("display", "block");
              }
            };

            var objectName = "AN_County__c";
            var fields = ["JSON_Payload__c"];
            var whereClause = "WHERE FIPS_Code__c = '02013'";
            var sortClause = ["Name, ASC"];
            var limit = "10";
            com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, getJSONpayloadbyFipscode);
          } else {
            $('.customer-popup').css("display", "block");
          }
        };

        var objectName = "AN_Relationships__c";
        var fields = ["FIPS_Code__c"];
        var whereClause = "WHERE Account_ID__c = '0018A00000VQSO7QAP'";
        var sortClause = ["Name, ASC"];
        var limit = "10";
        com.veeva.clm.queryRecord(objectName, fields, whereClause, sortClause, limit, getCountybyFipscode);
      } else {
        $('.customer-popup').css("display", "block");
      }
    };

    $('#spinnerContent').show();
    //result from API
    // App allowing if user has selected an account
    com.veeva.clm.getDataForCurrentObject("Account", "ID", getAddressesForAccount);
  }

  //-----------------//


  function initialSetup() {
    $.each(jsonResultpayload, function (i, row) {
      productText += '<span class=\'custom-option\' brand-id=\'' + i + '\'>' + row.brand + ' </span>';
    });
    $('#productDD').html(productText);

    // if editItemId or storeValue is not set then set the default values for the dropdowns
    if (!editItemId && !storeValue) {
      var prods = $(".productDD > span");
      $.each(prods, function (i, row) {
        if (row.innerText.toUpperCase() == 'CUVITRU') {
          $(this).click();
          $('.product').text(row.innerText);
        }
      });
      setDropdowns();
    }

    if (storeValue && storeValue != undefined) {
      // Handle for - if user selecting the product on access_next_tool_20_00 to set the dropdown value
      var selectedProd = $(".productDD > span");
      $.each(selectedProd, function (i, row) {
        if (row.innerText.toUpperCase() == storeValue) {
          $(this).click();
        }
      });
      if (storeValue == 'GAMMAGARD') {
        $('.item-logo>img').attr('src', '../shared/images/gammagard_logo.png');
        $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_60_00.zip)');
        $('.row-head .title.cuvi-logo').html('<img src="../shared/images/gammagard_logo_white.png">');
      } else if (storeValue == "HYQVIA") {
        $('.item-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
        $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_50_00.zip)');
        $('.row-head .title.cuvi-logo').html('<img src="../shared/images/hyqvia_logo_white.png">');
      } else if (storeValue == 'CUVITRU/HYQVIA') {
        $('.item-logo>img').attr('src', '../shared/images/takeda_logo.png');
        $('.plans-table-ar .row div').removeClass('hyqvia-show');
        $('.item.item-table').addClass('takeda-wid-custom');
        $('.row-head .title.cuvi-logo').html('<img src="../shared/images/cuvitru_logo_white.png" alt="Cuvitru logo">');
        $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_70_00.zip)');
      } else if (storeValue == "CUVITRU") {
        $('.item-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
        $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_40_00.zip)');
        $('.row-head .title.cuvi-logo').html('<img src="../shared/images/cuvitru_logo_white.png">');
      }
      setDropdowns();
    }

    //Handle for - on click of Edit the template to set the dropdown value
    if (editItemId >= 0 && editItemId != undefined) {
      var localTemplates = JSON.parse(localStorage.getItem('savedTemplates'));
      var prodId = void 0,
          prodText = void 0;
      var _selectedProd = localTemplates[editItemId].product;
      var selectedChannel = localTemplates[editItemId].channel;
      var selectedBenefit = localTemplates[editItemId].benefittype;
      var selectedAccess = localTemplates[editItemId].access;
      plansSelected = localTemplates[editItemId].plan;

      $.each(jsonResultpayload, function (i, row) {
        if (row.brand == _selectedProd) {
          prodId = i;
        }
      });

      $('.custom-options.productDD > span.custom-option').each(function (index) {
        if (prodId == index) {
          $(this).click();
        }
        if (_selectedProd.toUpperCase().match('CUVITRU/HYQVIA')) {
          $('.item-logo>img').attr('src', '../shared/images/takeda_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_70_00.zip)');
        } else if (_selectedProd.toUpperCase().match("HYQVIA")) {
          $('.item-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_50_00.zip)');
        } else if (_selectedProd.toUpperCase().match("GAMMAGARD")) {
          $('.item-logo>img').attr('src', '../shared/images/gammagard_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_60_00.zip)');
        } else if (_selectedProd.toUpperCase().match("CUVITRU")) {
          $('.item-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_40_00.zip)');
        }
      });

      $('.custom-options.channelDD > span.custom-option').each(function (index) {
        if ($(this).text() == selectedChannel) {
          $(this).click();
        }
      });

      $('.custom-options.benefitDD > span.custom-option').each(function (index, row) {
        var benefitId = $(this).attr('benefit-id');
        if (benefitId) {
          if (benefitSelected.benefit == selectedBenefit) {
            benefitSelected = channelSelected.benefitType[benefitId];
            var payerText = '';
            var uText = '';
            $.each(benefitSelected.payers, function (i, row) {
              isPlansSelected = false;
              var isActive = '';
              var updateTable = '';
              var accessClicked = $('.custom-options.accessDD > span.custom-option.selected').text();
              var benefitTypeClicked = benefitSelected.benefit;
              if (plansSelected && plansSelected.length > 0) {
                isActive = plansSelected.includes(row.payerName) ? 'active' : '';
                updateTable = plansSelected.includes(row.payerName) ? "<div class='row'> <div class='plans plan0 pd-6'>" + row.payerName + "</div><div class='access pd-6 color-steal-blue'>" + accessClicked + "</div><div class='hyqvia-show hs color-steal-blue access'>" + accessClicked + "</div><div class='benefitType color-steal-blue'>" + benefitTypeClicked + "</div> </div>" : '';
              } else {
                updateTable = "<div class='row'> <div class='plans plan0 pd-6'>" + row.payerName + "</div><div class='access pd-6 color-steal-blue'>" + accessClicked + "</div><div class='hyqvia-show hs color-steal-blue access'>" + accessClicked + "</div><div class='benefitType color-steal-blue'>" + benefitTypeClicked + "</div> </div>";
              }

              payerText += "<div class='option " + isActive + "'><label><input type='checkbox' name='plan1'><div class='check'></div>" + row.payerName + "</label></div>";
              uText += updateTable;
            });
            $("#payerlist").html(payerText);
            $("#upData").html(uText);
          }
        }

        if ($(this).text() == selectedBenefit) {
          $(this).click();
        }
      });

      if (selectedAccess == 'Covered with restrictions') {
        $(".accessDD > span:nth-child(1)").trigger('click');
      } else {
        $(".accessDD > span:nth-child(2)").trigger('click');
      }
    }

    if (controlCenter) {
      var _prodId = void 0;
      var _selectedProd2 = controlCenter.product;
      var _selectedChannel = controlCenter.channel;
      var _selectedBenefit = controlCenter.benefittype;
      var _selectedAccess = controlCenter.access;
      plansSelected = controlCenter.plans;

      $.each(jsonResultpayload, function (i, row) {
        if (row.brand == _selectedProd2) {
          _prodId = i;
        }
      });

      $('.custom-options.productDD > span.custom-option').each(function (index) {
        if (_prodId == index) {
          $(this).click();
        }
        if (_selectedProd2.toUpperCase().match('CUVITRU/HYQVIA')) {
          $('.item-logo>img').attr('src', '../shared/images/takeda_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_70_00.zip)');
        } else if (_selectedProd2.toUpperCase().match("HYQVIA")) {
          $('.item-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_50_00.zip)');
        } else if (_selectedProd2.toUpperCase().match("GAMMAGARD")) {
          $('.item-logo>img').attr('src', '../shared/images/gammagard_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_60_00.zip)');
        } else if (_selectedProd2.toUpperCase().match("CUVITRU")) {
          $('.item-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
          $('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_40_00.zip)');
        }
      });

      $('.custom-options.channelDD > span.custom-option').each(function (index) {
        if ($(this).text() == _selectedChannel) {
          $(this).click();
        }
      });

      $('.custom-options.benefitDD > span.custom-option').each(function (index, row) {
        var benefitId = $(this).attr('benefit-id');
        if (benefitId) {
          benefitSelected = channelSelected.benefitType[benefitId];
          var payerText = '';
          $.each(benefitSelected.payers, function (i, row) {
            payerText += "<div class='option'><input type='checkbox' name='plan1'><div class='check'></div> <label>" + row.payerName + "</label></div>";
          });
          $("#payerlist").html(payerText);
        }
        if ($(this).text() == _selectedBenefit) {
          $(this).click();
        }
      });

      if (_selectedAccess == 'Covered with restrictions') {
        $(".accessDD > span:nth-child(1)").trigger('click');
      } else {
        $(".accessDD > span:nth-child(2)").trigger('click');
      }
    }
  }

  function setDropdowns() {
    //Handle for - To set default values to dropdown
    var channels = $(".channelDD > span");
    $.each(channels, function (i, row) {
      if (row.innerText.toUpperCase() == 'COMMERCIAL') {
        $(this).click();
        $('.channel').text(row.innerText);
      }
    });

    var accesses = $(".accessDD > span");
    $.each(accesses, function (i, row) {
      if (row.innerText.toUpperCase() == 'COVERED WITH RESTRICTIONS') {
        $(this).click();
        $('.access').text(row.innerText);
      }
    });

    $('.benefitType').text('None');
    //$("#styled-checkbox-1").attr("disabled", true);
  }

  //on select of the product, populating and setting the channel
  $("body").on("click", "#productDD span", function () {
    $('.product').text($('.custom-options.productDD > span.custom-option.selected').text());

    var brandId = $(this).attr('brand-id');
    prodselected = jsonResultpayload[brandId];
    var channelsList = '';
    $.each(prodselected.channels, function (i, row) {
      channelsList += '<span class=\'custom-option\' channel-id=\'' + i + '\'>' + row.channel + '</span>';
    });

    $('#channelDD').html(channelsList);
    $("#upData").html('');
    setDropdowns();

    if (!isPlansSelected) {
      plansSelected = [];
    }
    var storeValue = $('.custom-options.productDD > span.custom-option.selected').text().toUpperCase();
    if (storeValue.match('GAMMAGARD')) {
      $('.row-head .title.cuvi-logo').html('<img src="../shared/images/gammagard_logo_white.png">');
      $('.b-transparent.hyq-logo.title').addClass('hyqvia-show');
    } else if (storeValue.match('CUVITRU/HYQVIA')) {
      $('.row-head .title.cuvi-logo').html('<img src="../shared/images/cuvitru_logo_white.png" alt="Cuvitru logo">');
    } else if (storeValue.match("HYQVIA")) {
      $('.row-head .title.cuvi-logo').html('<img src="../shared/images/hyqvia_logo_white.png">');
      $('.b-transparent.hyq-logo.title').addClass('hyqvia-show');
    } else if (storeValue.match("CUVITRU")) {
      $('.row-head .title.cuvi-logo').html('<img src="../shared/images/cuvitru_logo_white.png">');
      $('.b-transparent.hyq-logo.title').addClass('hyqvia-show');
    }
    localStorage.removeItem('cuvitrusetitem');
  });

  //on select of the channel, populating and setting the benefit type
  $("body").on("click", "#channelDD span", function () {
    $('.channel').text($('.custom-options.channelDD > span.custom-option.selected').text());

    var channelId = $(this).attr('channel-id');
    channelSelected = prodselected.channels[channelId];

    var benefitList = '';
    $.each(channelSelected.benefitType, function (i, row) {
      benefitList += '<span class=\'custom-option\' benefit-id=\'' + i + '\'>' + row.benefit + '</span>';
    });
    $('#benefitDD').html(benefitList);

    $('.benefitType').text('None');
    benefitSelected = '';
    $('div.custom-select.dropdown3 div.custom-select__trigger span').text('None');
    //$("#styled-checkbox-1").attr("disabled", true);
    $("#upData").html('');
    if (!isPlansSelected) {
      plansSelected = [];
    }
  });

  $("body").on("click", "#benefitDD span", function () {
    var benefitId = $(this).attr('benefit-id');
    benefitSelected = channelSelected.benefitType[benefitId];

    var productTypeClicked = prodselected.brand;
    var benefitTypeClicked = benefitSelected.benefit;
    var accessClicked = $('.custom-options.accessDD > span.custom-option.selected').text();

    if (benefitId) {
      var payerText = '';
      var uText = '';
      $.each(benefitSelected.payers, function (i, row) {
        isPlansSelected = false;
        var isActive = '';
        var updateTable = '';
        if (plansSelected && plansSelected.length > 0) {
          isActive = plansSelected.includes(row.payerName) ? 'active' : '';
          updateTable = plansSelected.includes(row.payerName) ? "<div class='row'> <div class='plans plan0 pd-6'>" + row.payerName + "</div><div class='access pd-6 color-steal-blue'>" + accessClicked + "</div><div class='hyqvia-show hs color-steal-blue access'>" + accessClicked + "</div><div class='benefitType color-steal-blue'>" + benefitTypeClicked + "</div> </div>" : '';
        } else {
          updateTable = "<div class='row'> <div class='plans plan0 pd-6'>" + row.payerName + "</div><div class='access pd-6 color-steal-blue'>" + accessClicked + "</div><div class='hyqvia-show hs color-steal-blue access'>" + accessClicked + "</div><div class='benefitType color-steal-blue'>" + benefitTypeClicked + "</div> </div>";
        }
        payerText += "<div class='option " + isActive + "'><label><input type='checkbox' name='plan1'><div class='check'></div>" + row.payerName + "</label></div>";
        uText += updateTable;
      });

      $("#payerlist").html(payerText);
      $("#upData").html(uText);
    }

    $('.benefitType').text(benefitTypeClicked);

    /* if ($('.custom-options.benefitDD > span.custom-option.selected')) {
        $("#styled-checkbox-1").removeAttr("disabled");
     } else {
        $("#styled-checkbox-1").attr("disabled", true);
     }*/

    if (productTypeClicked.toUpperCase().match('CUVITRU/HYQVIA')) {
      $('.plans-table-ar .row div').removeClass('hyqvia-show');
    }
  });

  $("body").on("click", "#accessDD span", function () {
    $('.access').text($('.custom-options.accessDD > span.custom-option.selected').text());
  });

  $('#payerlist').on('change', '.option', function () {
    var $this = $(this).toggleClass('active');
  });

  $(".cta-save").click(function () {
    isSaved = false;
    CmyScroll.scrollTo(0, 0);
    var plans = [];
    $.each($(".option.active label"), function () {
      plans.push($(this).text());
    });
    var productTypeClicked = prodselected.brand;
    var benefitTypeClicked = benefitSelected.benefit;
    var accessClicked = $('.custom-options.accessDD > span.custom-option.selected').text();
    var uText = '';
    plans.forEach(function (element) {
      uText += "<div class='row'> <div class='plans plan0 pd-6'>" + element + "</div><div class='access pd-6 color-steal-blue'>" + accessClicked + "</div><div class='hyqvia-show hs color-steal-blue access'>" + accessClicked + "</div><div class='benefitType color-steal-blue'>" + benefitTypeClicked + "</div> </div>";
    });

    $("#upData").html(uText);
    if (productTypeClicked.toUpperCase().match('CUVITRU/HYQVIA')) {
      $('.plans-table-ar .row div').removeClass('hyqvia-show');
    }

    localStorage.cuvitrusetitem = plans;
    $('.grid-container').removeClass('select-plans');
    $('.item-plans').addClass('hide');
    $('.wrap-ctas,.owl-nav,#cuvitru-carousel > div.owl-dots').removeClass('no-action');
    $('#styled-checkbox-1').prop('disabled', false);
    $('.cta_plans').show();
    checkplanSelected();
  });

  // save and edit template
  $(".cta-white").click(function () {
    var product = prodselected.brand;
    var channel = channelSelected.channel;
    var benefittype = $('.custom-options.benefitDD > span.custom-option.selected').text() ? $('.custom-options.benefitDD > span.custom-option.selected').text() : 'None';
    var access = $('.custom-options.accessDD > span.custom-option.selected').text();

    var savedTemplates = JSON.parse(localStorage.getItem('savedTemplates'));
    var backLabel = 'Sample IG Portifolio Message';

    var plans = [];
    $.each($(".option.active label"), function () {
      plans.push($(this).text());
    });

    if (!product) {
      return;
    }

    if (controlCenter) {
      editItemId = controlCenter.editItemId;
    }
    if (editItemId >= 0 && editItemId != undefined) {
      // edit save template
      var backLabel = savedTemplates[editItemId].label;
      var newTemplates = new addTemplate(backLabel, product, channel, access, benefittype, plans);
      savedTemplates[editItemId] = newTemplates;
      localStorage["savedTemplates"] = JSON.stringify(savedTemplates);
    } else {
      // save newly created template
      if (savedTemplates !== null) {
        var newTemplates = new addTemplate(backLabel, product, channel, access, benefittype, plans);
        savedTemplates[savedTemplates.length] = newTemplates;
        localStorage["savedTemplates"] = JSON.stringify(savedTemplates);
      } else {
        var objTemplate = new addTemplate(backLabel, product, channel, access, benefittype, plans);
        localStorage.setItem('savedTemplates', JSON.stringify(objTemplate));
        var savedTemplates = new Array();
        savedTemplates[0] = objTemplate;
        localStorage["savedTemplates"] = JSON.stringify(savedTemplates);
      }
    }
  });

  function addTemplate(label, product, channel, access, benefittype, plans) {
    var today = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).split(' ').join(' ');
    this.updatedDate = today;
    this.label = label;
    this.product = product;
    this.channel = channel;
    this.access = access;
    this.benefittype = benefittype;
    this.plan = plans;
  }

  $('.presentBtn').on('click', function () {
    var product = prodselected.brand;
    var channel = channelSelected.channel;
    var benefittype = benefitSelected ? benefitSelected.benefit : 'None';
    var access = $('.custom-options.accessDD > span.custom-option.selected').text();
    var plans = [];
    $.each($(".option.active label"), function () {
      plans.push($(this).text());
    });
    localStorage.setItem('cuvitrusetitem', plans);
    var dateToday = new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).split(' ').join(' ');

    var newTemplates = {
      'updatedDate': dateToday,
      'product': product,
      'channel': channel,
      'access': access,
      'benefittype': benefittype,
      'plans': plans,
      'editItemId': editItemId
    };

    if (plansSelected && isSaved) {
      var plansPre = [];
      $.each(plansSelected, function (i, row) {
        plansPre.push(row);
      });
      localStorage.setItem('cuvitrusetitem', plansPre);
    }

    localStorage.setItem('controlCenter', JSON.stringify(newTemplates));
    $('#styled-checkbox-1').prop('checked', false);
  });

  $('.cuvitru-carousel').owlCarousel({
    margin: 10,
    dots: true,
    nav: true,
    items: 1,
    animateIn: 'fadeIn',
    navText: ['<div></div>', '<div></div>']
  });

  $("#styled-checkbox-1").click(function () {
    $('.c_checkbox label').parent().toggleClass('plans-active-cls');
    $("#cuvitru-carousel > div.owl-nav, #cuvitru-carousel > div.owl-dots").show();
    $(".cuvitru-carousel").css("pointer-events", "unset");
    if ($('.c_checkbox label').parent().hasClass('plans-active-cls')) {
      $('.owl-nav>.owl-next').trigger('click');
    } else {
      $('.owl-nav>.owl-prev').trigger('click');
      $("#cuvitru-carousel > div.owl-nav, #cuvitru-carousel > div.owl-dots").hide();
      $(".cuvitru-carousel").css("pointer-events", "none");
    }
    plansSelected = [];
    $('.custom-options.benefitDD > span.custom-option.selected').click();
    $('#payerlist .option').addClass('active');
  });

  // custom plans functionality
  $(".cta_plans").click(function () {
    $('.grid-container').addClass('select-plans');
    $('.item-plans').removeClass('hide');
    $('.wrap-ctas,.owl-nav,#cuvitru-carousel > div.owl-dots').addClass('no-action');
    $('#styled-checkbox-1').prop('disabled', true);
    $(this).hide();
    CmyScroll1 = new IScroll('.plans_iscroll', {
      mouseWheel: true,
      scrollbars: true,
      scrollX: false,
      scrollY: true
    });
  });

  function checkplanSelected() {
    $(".row .plans").each(function () {
      if ($(this).text() === "Health Plan Name") {
        $(this).parent().hide();
      } else {
        $(this).show();
      }
    });
  }

  $('.cuvitru-carousel').on('change.owl.carousel', function (e) {
    var carousel = e.currentTarget,
        totalPageNumber = e.page.count,
        // count start from 1
    currentPageNumber = e.page.index + 1; // index start from 0
    if (currentPageNumber === totalPageNumber - 1) {
      $('.cta_plans').removeClass('hide-imp');
    } else {
      $('.cta_plans').addClass('hide-imp');
    }
  });
});

var CmyScroll;
var CmyScroll1;
window.onload = function () {
  CmyScroll = new IScroll('.CC_iscroll', {
    mouseWheel: true,
    scrollbars: true,
    scrollX: false,
    scrollY: true
  });
};

// Access dropdown ArrayList
var accessText = "";
var accessList = ["Covered with restrictions", "Covered without restrictions"];
accessList.forEach(accessFunction);
$("#accessDD").html(accessText);
function accessFunction(item, index) {
  accessText += "<span class='custom-option'>" + item + "</span>";
}
//# sourceMappingURL=access_next_tool_30_00.js.map
