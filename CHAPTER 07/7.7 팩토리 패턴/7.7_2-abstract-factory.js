import { Car, Truck } from './7.7_1-car-types.js';

class AbstractVehicleFactory {
	constructor() {
		// 차량 타입을 저장하는 곳
		this.types = {};
	}

	getVehicle(type, customizations) {
		const Vehicle = this.types[type];
		return Vehicle ? new Vehicle(customizations) : null;
	}

	registerVehicle(type, Vehicle) {
		const proto = Vehicle.prototype;
		// 차량 기능을 충족하는 클래스만 등록
		if (proto.drive && proto.breakDown) {
			this.types[type] = Vehicle;
		}
		return this;
	}
}

const abstractVehicleFactory = new AbstractVehicleFactory();
abstractVehicleFactory.registerVehicle('car', Car);
abstractVehicleFactory.registerVehicle('truck', Truck);

// 추상 차량 타입으로 새 자동차를 인스턴스화
const car = abstractVehicleFactory.getVehicle('car', {
	color: 'lime green',
	state: 'like new',
});

const truck = abstractVehicleFactory.getVehicle('truck', {
	wheelSize: 'medium',
	color: 'neon yellow',
});
