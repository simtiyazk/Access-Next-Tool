'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  $('.channel_tt').on('click', function () {
    $('.channel-tt-content').show();
  });
  $('.channel-tt-content .closeToolTip').on('click', function () {
    $('.channel-tt-content').hide();
  });

  $('.benefit_tt').on('click', function () {
    $('.benefit-tt-content').show();
  });
  $('.benefit-tt-content .closeToolTip').on('click', function () {
    $('.benefit-tt-content').hide();
  });

  $('.top_tt').on('click', function () {
    $('.top-tt-content').show();
  });
  $('.top-tt-content .closeToolTip').on('click', function () {
    $('.top-tt-content').hide();
  });

  $('.brandtt').on('click', function () {
    $('.brand-tt-content').show();
  });
  $('.brand-tt-content .closeToolTip').on('click', function () {
    $('.brand-tt-content').hide();
  });
};
//# sourceMappingURL=tool-tip-content.js.map
