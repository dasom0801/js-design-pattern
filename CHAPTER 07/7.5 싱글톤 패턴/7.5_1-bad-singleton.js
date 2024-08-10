let instance;

class MyBadSingleton {
	// 항상 새로운 싱글톤 인스턴스를 생성
	constructor() {
		this.randomNumber = Math.random();
		instance = this;
		return instance;
	}

	getRandomNumber() {
		return this.randomNumber;
	}
}

export default MyBadSingleton;
