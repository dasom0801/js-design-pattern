// 모듈 패턴

let counter = 0;

const testModule = {
	incrementCounter() {
		return counter++;
	},
	resetCounter() {
		console.log(`counter value prior to reset: ${counter}`);
		counter = 0;
	},
};

export default testModule;
