let isPinched = false;

class PinchModel {
	constructor(args) {
		if (args !== undefined){
			isPinched = args;
		}
	}

	getPinch() {
		return isPinched;
	}

	setPinch(args) {
		isPinched = args;
	}
}

export let pinched = new PinchModel(false);

