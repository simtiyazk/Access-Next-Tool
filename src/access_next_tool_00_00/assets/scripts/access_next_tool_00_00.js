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

  localStorage.removeItem('controlCenter');
  localStorage.removeItem('edititem');
  localStorage.removeItem('storeValue');
});