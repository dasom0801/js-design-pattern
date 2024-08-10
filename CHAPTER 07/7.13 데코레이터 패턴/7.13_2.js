// 여러 데코레이터로 객체의 기능 확장하기

// 데코레이터를 사용할 생성자
class MacBook {
	constructor() {
		this.cost = 997;
		this.screenSize = 11.6;
	}
	getCost() {
		return this.cost;
	}
	getScreenSize() {
		return this.screenSize;
	}
}

// 데코레이터 1
class Memory extends MacBook {
	constructor(macBook) {
		super();
		this.macBook = macBook;
	}

	getCost() {
		return this.macBook.getCost() + 75;
	}
}

// 데코레이터 2
class Engraving extends MacBook {
	constructor(macBook) {
		super();
		this.macBook = macBook;
	}

	getCost() {
		return this.macBook.getCost() + 200;
	}
}

// 데코레이터 3
class Insurance extends MacBook {
	constructor(macBook) {
		super();
		this.macBook = macBook;
	}

	getCost() {
		return this.macBook.getCost() + 250;
	}
}

// 메인 객체 초기화
let mb = new MacBook();

// 데코레이터 초기화
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);

console.log(mb.getCost());
console.log(mb.getScreenSize());
