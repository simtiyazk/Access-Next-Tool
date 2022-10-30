"use strict";

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

  customboxappear();
  getSavedTemplates();
  function getSavedTemplates() {
    var getNewTemplates = JSON.parse(localStorage.getItem('savedTemplates'));
  }
  function customboxappear() {
    var customids = 0;
    customids++;

    cuvidataupdate();

    $('.deleteIcon').on('click', function () {
      var storedArr = JSON.parse(localStorage.getItem('savedTemplates'));
      var targetId = parseInt(this.getAttribute('item-id'));
      var modifiedArr = storedArr.filter(function (x, i) {
        return i !== targetId;
      });
      localStorage.setItem('savedTemplates', JSON.stringify(modifiedArr));
      $('#box-id-' + targetId).css({ 'display': 'none' });
    });

    $('.selectBtn').on('click', function () {
      var target = this.getAttribute('item-id');
      localStorage.setItem('edititem', target);
      var modifiedArr = JSON.parse(localStorage.getItem('savedTemplates'));
      $('.nextTool30').click();
      com.veeva.clm.gotoSlide("access_next_tool_30_00.zip");
    });

    $('.ctextAreaContent').bind('input propertychange', function () {
      var targetId = this.getAttribute('item-id');
      var updateArray = JSON.parse(localStorage.getItem('savedTemplates'));
      var tempLabel = this.value;
      updateArray[targetId].label = tempLabel;
      localStorage.setItem('savedTemplates', JSON.stringify(updateArray));
      $('#' + targetId).val(tempLabel);
    });

    function cuvidataupdate() {
      var savedTemplates = JSON.parse(localStorage.getItem('savedTemplates'));
      if (savedTemplates) {
        for (var i = 0; i < savedTemplates.length; i++) {
          var channelval = savedTemplates[i].channel;
          var accval = savedTemplates[i].access;
          var benefival = savedTemplates[i].benefittype || 'None';
          var label = savedTemplates[i].label;
          var updatedDate = savedTemplates[i].updatedDate;
          var boxdiv = $('<div class="box" id="box-id-' + i + '"><div class="nonOverlay"><div class="fileIcon"><img src="' + newSrc + '" alt="file icon"></div><div class="date">' + updatedDate + '</div><textarea maxlength="36" cols="40" rows="3" class="message CtextArea" placeholder="Sample IG Portifolio Message" id="' + i + '"> ' + label + '</textarea><div class="iconList"><div class="favIcon inactivefavicon"><img src="../shared/images/favIcon.svg" alt="favourite icon"></div><div item-id="' + i + '" class="deleteIcon"><img src="../shared/images/deleteIcon.svg" alt="delete icon"></div></div></div><div class="activeOverlay"><div class="fileIcon"><img src="' + actvnewSrc + '" alt="file icon"></div><div class="date">' + updatedDate + '</div><textarea  item-id="' + i + '" id="CtextArea" maxlength="36" cols="40" rows="3" class="message ctextAreaContent" placeholder="Sample IG Portifolio Message">' + label + '</textarea><div class="hr_line"></div><div class="messageDescription"><b>Channel : ' + channelval + '</b><br><b>Benefit Type : ' + benefival + '</b><br><b>Access : ' + accval + '</b></div><button class="selectBtn btn-mt-20" id="btn_sel" item-id="' + i + '">SELECT</button></div>');

          $('.global-content').find('.savedTemplateBlock').append(boxdiv);

          if (savedTemplates[i].product.toUpperCase().match('CUVITRU/HYQVIA')) {
            var newSrc = '../shared/images/takeda_logo.png';
            var actvnewSrc = '../shared/images/takeda_logo.png';
          } else if (savedTemplates[i].product.toUpperCase().match('HYQVIA')) {
            var newSrc = '../shared/images/hyqvia_logo.png';
            var actvnewSrc = '../shared/images/hyqvia_logo_white.png';
          } else if (savedTemplates[i].product.toUpperCase().match('GAMMAGARD')) {
            var newSrc = '../shared/images/gammagard_logo.png';
            var actvnewSrc = '../shared/images/gammagard_logo_white.png';
          } else if (savedTemplates[i].product.toUpperCase().match('CUVITRU')) {
            var newSrc = '../shared/images/cuvitru_logo.png';
            var actvnewSrc = '../shared/images/cuvitru_logo_white.png';
          }

          $('.activeOverlay .messageDescription span.channel').text(channelval);
          $('.activeOverlay .messageDescription span.access').text(accval);
          $('.activeOverlay .messageDescription span.benefitType').text(benefival);
          $('.savedTemplateBlock .box:last-child .fileIcon>img').attr('src', newSrc);
          $('.savedTemplateBlock .box:last-child .activeOverlay .fileIcon>img').attr('src', actvnewSrc);
        }
      }
    }
  }

  $('.activeOverlay').on('click', function () {
    $('.box').removeClass('scalebox');
    $('.box .activeOverlay').css({ 'opacity': '0', 'z-index': '0' });
    $(this).closest('.box').addClass('scalebox');
    $(this).css({ 'opacity': '1', 'z-index': '2' });
    $('.wrapper').addClass('opened');
  });

  $('.wrapper.opened').on('click', function () {
    if ($(this).find('.box').hasClass('scalebox') == true) {
      $('.box').removeClass('scalebox');
    }
  });

  $('.box .iconList .favIcon>img').on('click', function () {
    var currentsrc = $(this).closest('.box').children('.nonOverlay').children('.fileIcon').children('img').attr('src');
    var actvcurrentsrc = $(this).closest('.box').children('.nonOverlay').children('.fileIcon').children('img').attr('src');
    if ($(this).parent().hasClass('activefavicon')) {
      $(this).attr('src', '../shared/images/favIcon.svg');
      $(this).css('width', '27px');
      $(this).closest('.box').css('border', '1px solid #D7D7D7');
      $(this).parent().css({ 'left': '61px', 'bottom': '52px' });
      $(this).parent().removeClass('activefavicon');
      $(this).parent().addClass('inactivefavicon');
      $(this).closest('.box').children('.nonOverlay').children('.fileIcon').children('img').attr('src', currentsrc);
      $(this).closest('.box').insertAfter('.savedTemplateBlock .box:last-child');
    } else {
      $(this).attr('src', '../shared/images/favIconActive.svg');
      $(this).closest('.box').children('.nonOverlay').children('.fileIcon').children('img').attr('src', actvcurrentsrc);
      $(this).css('width', '50px');
      $(this).parent().css({ 'left': '49px', 'bottom': '39px' });
      $(this).closest('.box').css('border', '1px solid #51B1BF');
      $(this).closest('.box').prependTo('.savedTemplateBlock');
      $(this).parent().addClass('activefavicon');
      $(this).parent().removeClass('inactivefavicon');
    }
  });

  function myfunction(param) {
    var abc = 200 + $(".savedTemplateBlock").width();
    $("#scroller").css({
      'width': abc
    });
  }
  myfunction();
});
setInterval(InputText(), 10);
function InputText() {
  $("#textArea").on('change keyup paste', function () {
    var textChange = $(this).val();
    $(".textArea").val($(this).val());
    localStorage.setItem("textChange", textChange);
  });
  var updateText = localStorage.getItem('textChange');
  $(".textArea").text(updateText);
  $("#textArea").text(updateText);
}

var myScroll;
function loaded() {
  myScroll = new IScroll('#wrapper11', { scrollX: true, scrollY: false, scrollbars: true });
}

document.addEventListener('touchmove', function (e) {
  e.preventDefault();
}, false);
window.onload = function () {
  loaded();
};
//# sourceMappingURL=access_next_tool_10_00.js.map
