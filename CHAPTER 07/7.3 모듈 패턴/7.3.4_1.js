let _counter = new WeakMap();

class Module {
	constructor() {
		_counter.set(this, 0);
	}

	incrementCounter() {
		let counter = _counter.get(this);
		counter++;
		_counter.set(this, counter);
		return _counter.get(this);
	}
	resetCounter() {
		console.log(`counter value prior to reset: ${_counter.get(this)}`);
		_counter.set(this, 0);
	}
}

const testModule = new Module();
testModule.incrementCounter();
testModule.resetCounter();
