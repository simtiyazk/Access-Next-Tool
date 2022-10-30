'use strict';

$(document).ready(function () {
  $(".takedaCuvitru").on('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.open('https://www.shirecontent.com/PI/PDFS/Cuvitru_USA_ENG.PDF');
  });

  $(".takedahyqvia").on('touchend', function (event) {
    event.stopPropagation();
    event.preventDefault();
    window.open('https://www.shirecontent.com/PI/PDFs/HYQVIA_USA_ENG.pdf');
  });

  displayfieldsByVeeva();
  function displayfieldsByVeeva() {
    // Account name
    com.veeva.clm.getDataForCurrentObject("Account", "Name", function (result) {
      //document.getElementById("customerAccountName").innerHTML = result.Account.Name;
      $("#customerAccountName,.notifi_content_container h2").text(result.Account.Name);
    });

    // Displaying details in Control center
    com.veeva.clm.getDataForCurrentObject("Account", "ID", getAddressesForAccount);

    //use the current Account Id to fetch the id's of all related Addresses
    function getAddressesForAccount() {
      if (result.success == true) {
        com.veeva.clm.getAddresses_Account(result.Account.ID, displayAddressIds);
      }
    }
    //return type is an array of record id's
    function displayAddressIds() {
      if (result.success == true) {
        JSON.stringify(result.Address_vod__c[0].ID, getCityStateZip); //a01Z000000OdSjAIAV
        //alert(JSON.stringify(result.Address_vod__c[1].Id)); //a01Z000000c5ANu
      }
    }
    function getCityStateZip() {
      if (result.success == true) {
        addressId = result.Address_vod__c[0].ID;
        com.veeva.clm.getAddressFields(addressId, ["City_vod__c", "State_vod__c", "Zip_vod__c"], displayCityStateZip);
      }
    }
    //return type is a JSON object (Address_vod__c) containing an array of length 1
    function displayCityStateZip() {
      if (result.success == true) {
        $('.notifi_content_container h3 span.city').text(result.Address_vod__c[0].City_vod__c); //Columbus
        //$('.notifi_content_container h3 span.state-code').text(result.Address_vod__c[0].State_vod__c);
        $('.notifi_content_container h3 span.state-code').text(result.Address_vod__c[0].Zip_vod__c);
      }
    }
  }
});
//# sourceMappingURL=access_next_tool_70_00.js.map
