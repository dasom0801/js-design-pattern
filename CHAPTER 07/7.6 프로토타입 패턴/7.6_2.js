class VehiclePrototype {
	constructor(model) {
		this.model = model;
	}

	getModel() {
		console.log(`The model of this vehicle is...${this.model}`);
	}

	clone() {}
}

class Vehicle extends VehiclePrototype {
	constructor(model) {
		super(model);
	}

	clone() {
		return new Vehicle(this.model);
	}
}

const car = new Vehicle('Ford Escort');
const car2 = car.clone();
car2.getModel();
