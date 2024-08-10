// 객체 리터럴 표기법을 사용한 모듈 정의
const myModule = {
	myProperty: 'someValue',
	myConfig: {
		useCaching: true,
		language: 'en',
	},
	saySomething() {
		console.log('Where is Paul Irish debugging today?');
	},
	reportMyConfig() {
		console.log(
			`Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`
		);
	},
	updateMyConfig(newConfig) {
		if (typeof newConfig === 'object') {
			this.myConfig = newConfig;
			console.log(this.myConfig.language);
		}
	},
};

myModule.saySomething(); // Where is Paul Irish debugging today?
myModule.reportMyConfig(); // Caching is: enabled
myModule.updateMyConfig({
	language: 'fr',
	useCaching: false,
}); // fr
myModule.reportMyConfig(); // Caching is: disabled
