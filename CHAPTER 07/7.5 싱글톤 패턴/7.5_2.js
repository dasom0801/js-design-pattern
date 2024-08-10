// options: 싱글톤의 구성을 담고 있는 객체를 뜻한다.
class Singleton {
	constructor(options = {}) {
		// 싱글톤에 속성을 할당한다.
		this.name = options.name || 'SingletonTester';
		this.pointX = options.pointX || 6;
		this.pointY = options.pointY || 10;
	}
}

let instance;

const SingletonTester = {
	name: 'SingletonTester',
	// 인스턴스를 가져오는 메서드
	// 싱글톤 객체의 싱글톤 인스턴스를 반환한다.
	getInstance(options) {
		if (instance === undefined) {
			instance = new Singleton(options);
		}
		return instance;
	},
};

const singletonTest = SingletonTester.getInstance({
	pointX: 5,
});

console.log(singletonTest.name);
console.log(singletonTest.pointX); // 5;
