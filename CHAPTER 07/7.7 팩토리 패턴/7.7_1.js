import { Car, Truck } from './7.7_1-car-types.js';

class VehicleFactory {
	constructor() {
		this.vehicleClass = Car;
	}

	// 새 차량 인스턴스를 생성하는 팩토리 함수
	createVehicle(options) {
		const { vehicleType, ...rest } = options;

		switch (vehicleType) {
			case 'car':
				this.vehicleClass = Car;
				break;
			case 'truck':
				this.vehicleClass = Truck;
				break;

			// 해당하지 않으면 VehicleFactory.prototype.vehicleClass에 Car 할당
		}
		return new this.vehicleClass(rest);
	}
}

// 자동차를 만드는 팩토리의 인스턴스 생성
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
	vehicleType: 'car',
	color: 'yellow',
	doors: 6,
});

console.log(car instanceof Car);
console.log(car);

// Truck 만드는 방법 1
const movingTruck = carFactory.createVehicle({
	vehicleType: 'truck',
	state: 'like new',
	color: 'red',
	wheelSize: 'small',
});

console.log(movingTruck instanceof Truck);
console.log(movingTruck);

// Truck 만드는 방법 2
class TruckFactory extends VehicleFactory {
	constructor() {
		super();
		this.vehicleClass = Truck;
	}
}

const truckFactory = new TruckFactory();
const myBigTruck = truckFactory.createVehicle({
	state: 'omg... so bad.',
	color: 'pink',
	wheelSize: 'so big',
});

console.log(myBigTruck instanceof Truck);
console.log(myBigTruck);
