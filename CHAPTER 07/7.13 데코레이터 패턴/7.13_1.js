// 생성자에 데코레이터를 붙여 새로운 기능 추가
class Vehicle {
	constructor(vehicleType) {
		// 일부 합리적인 기본값
		this.vehicleType = vehicleType || 'car';
		this.model = 'default';
		this.license = '00000-000';
	}
}

// 기본 Vehicle에 대한 테스트 인스턴스
const testInstance = new Vehicle('car');
console.log(testInstance);

// 데코레이트될 새로운 차량 인스턴스
const truck = new Vehicle('truck');

// Vehicle에 추가하는 새로운 기능
truck.setModel = function (modelName) {
	this.model = modelName;
};

truck.setColor = function (color) {
	this.color = color;
};

truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

// Vehicle이 변경되지 않았음을 보여준다.
const secondInstance = new Vehicle('car');
console.log(secondInstance);
