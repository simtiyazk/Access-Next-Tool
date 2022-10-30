'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	var slide = $('.slide'),
	    popup = $('#' + slide.data('forced-popup'));

	var viewedPopup = sessionStorage.getItem('studyPopup');

	if (!viewedPopup && popup.length) {
		popup.toggleClass('hide active');
		sessionStorage.setItem('studyPopup', true);
	}
};
//# sourceMappingURL=forced-popup.js.map
