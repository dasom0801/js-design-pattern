import _private from './7.9_2-privateMethods.js';

const module = {
	facade({ val, run }) {
		_private.set(val);
		_private.get();
		if (run) {
			_private.run();
		}
	},
};

export default module;
