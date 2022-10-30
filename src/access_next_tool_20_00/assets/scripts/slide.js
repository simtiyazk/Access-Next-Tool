'use strict';
const Slide = {
	id: '20_00'
};

$(() => {

//private
var self, el, runningInVeeva, popupOpen, touchclick = ('ontouchend' in document.documentElement) ? 'touchend' : (window.navigator.pointerEnabled) ? 'pointerup' : 'click';

class Slide {

	constructor() {
		//set vars
    self = this;
    popupOpen = ''
    el = $('#access_next_tool_20_00');

    runningInVeeva = ((location.hostname === '' || location.hostname.indexOf('veevamobile') > -1)) && (navigator.userAgent.indexOf('Mobile') > 0 || (navigator.userAgent.indexOf('Touch') > 0));
    //initial setup
    }
  }

	//----- handlers ------//

var slide = new Slide();

});
