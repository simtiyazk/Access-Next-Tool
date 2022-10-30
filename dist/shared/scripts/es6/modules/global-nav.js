'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

/*
 * Side Nav
 */
exports.default = function () {
	console.log('clickstream');
	//private
	var self,
	    el,
	    nextButton,
	    headerNav1,
	    headerNav2,
	    headerNav3,
	    headerNav4,
	    headerNav5,
	    references,
	    referencesClose,
	    runningInVeeva,
	    openPopupFunction,
	    openPopupComposition,
	    closeBtnPopupFunction,
	    closeBtnPopupComposition,
	    closeContainerPopup,
	    touchclick = 'ontouchend' in document.documentElement ? 'touchend' : window.navigator.pointerEnabled ? 'pointerup' : 'click';

	//set vars
	self = undefined;
	el = $('.slide');
	headerNav1 = el.find('.lowest-button');
	headerNav2 = el.find('.patients-button');
	headerNav3 = el.find('.risk-button');
	headerNav4 = el.find('.safety-button');
	headerNav5 = el.find('.summary-button');
	runningInVeeva = (location.hostname === '' || location.hostname.indexOf('veevamobile') > -1) && (navigator.userAgent.indexOf('Mobile') > 0 || navigator.userAgent.indexOf('Touch') > 0);
	//initial setup


	headerNav1.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Lower Is Better Header', function () {});
	});

	headerNav2.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Patient at Risk Header', function () {});
	});

	headerNav3.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Risk Reduction Header', function () {});
	});
	headerNav4.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Safety Header', function () {});
	});

	headerNav5.on(touchclick, function () {
		veevaUtils.trackEvent('Header Elements', 'Selected Item', 'Resources Header', function () {});
	});

	var globalContent = $('.global-content'),
	    navContainer = $('.lux-idtl-globla-nav'),
	    navToogle = navContainer.find('.hamburger'),
	    sideBar = navContainer.find('.side-bar');

	//Toggle global nav bar
	navToogle.on('click tab', function (e) {
		sideBar.toggleClass('active');

		if (sideBar.hasClass('active')) {
			globalContent.on('click tab', function () {
				sideBar.removeClass('active');
				globalContent.off('click tab');
			});
		}
	});
};
//# sourceMappingURL=global-nav.js.map
