// 자동차를 정의하는 클래스
export class Car {
	constructor({ doors = 4, state = 'brand new', color = 'silver' } = {}) {
		this.doors = doors;
		this.state = state;
		this.color = color;
	}
}

// 트럭을 정의하는 클래스
export class Truck {
	constructor({ state = 'used', wheelSize = 'large', color = 'blue' } = {}) {
		this.state = state;
		this.wheelSize = wheelSize;
		this.color = color;
	}
}
