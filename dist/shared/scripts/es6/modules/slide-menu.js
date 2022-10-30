'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {

	//notification menu open
	$('#customerAccountName, .customerIcon').on('click', function () {
		$('.global-top-nav').css('z-index', '0');
		$('#customerAccount').hide();
		$('#customerAccountName').hide();
		$('.notification-nav').css('right', '0px');
	});
	//notification menu close
	$('.back_notification').on('click', function () {
		$('.global-top-nav').css('z-index', '2');
		$('.notification-nav').css('right', '-293px');
		$('#customerAccount').show();
		$('#customerAccountName').show();
	});
};
//# sourceMappingURL=slide-menu.js.map
