// Object.create를 이용한 상속
const myCar = {
	name: 'Ford Escort',
	drive() {
		console.log("Weee, I'm driving!");
	},
	panic() {
		console.log('Wait. How do you stop this thing?');
	},
};

// 새로운 car를 인스턴스화하기 위해 Object.create를 사용
const yourCar = Object.create(myCar);

// 프로토타입이 제대로 들어왔음을 알 수 있다.
console.log(yourCar.name);

const vehicle = {
	getModel() {
		console.log(`The model of this vehicle is...${this.model}`);
	},
};

const car = Object.create(vehicle, {
	id: {
		value: MY_GLOBAL.nextId(),
		// writable:false, configurable:false 는 기본값
		enumerable: true,
	},
	model: {
		value: 'Ford',
		enumerable: true,
	},
});
