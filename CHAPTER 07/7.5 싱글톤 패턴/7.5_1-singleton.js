// 싱글톤에 대한 참조를 가지는 인스턴스
let instance;

// 비공개 메서드와 변수
const privateMethod = () => {
	console.log('I am private');
};
const privateVariable = 'Im also private';
const randomNumber = Math.random();

// 싱글톤
class MySingleton {
	// 싱글톤 인스턴스가 이미 존재한다면 참조를 반환하고
	// 존재하지 않으면 생성한다.
	constructor() {
		if (!instance) {
			this.publicProperty = 'I am also public';
			instance = this;
		}
		return instance;
	}

	// 공개 메서드
	publicMethod() {
		console.log('The public can see me!');
	}

	getRandomNumber() {
		return randomNumber;
	}
}

export default MySingleton;
