import { privateMethod } from './privateMethods.js';

const myModule = () => ({
	publicMethod() {
		privateMethod();
	},
});

export default myModule;
