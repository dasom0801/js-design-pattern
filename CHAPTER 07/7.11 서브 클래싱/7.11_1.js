class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = 'male';
	}
}

class Superhero extends Person {
	constructor(firstName, lastName, powers) {
		// 부모 클래스의 생성자를 호출한다.
		super(firstName, lastName);
		this.powers = powers;
	}
}

const clark = new Person('Clark', 'Kent');
const SuperMan = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(SuperMan);
