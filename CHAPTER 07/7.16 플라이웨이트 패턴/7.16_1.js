// 인터페이스의 구현을 시뮬레이션하기 위한 유틸리티 클래스
class InterfaceImplementation {
	static implementsFor(superclassOrInterface) {
		if (superclassOrInterface instanceof Function) {
			this.prototype = Object.create(superclassOrInterface.prototype);
			this.prototype.constructor = this;
			this.prototype.parent = superclassOrInterface.prototype;
		} else {
			this.prototype = Object.create(superclassOrInterface);
			this.prototype.constructor = this;
			this.prototype.parent = superclassOrInterface;
		}
		return this;
	}
}

// 플라이웨이트
const CoffeeOrder = {
	serveCoffee(context) {},
	getFlavor() {},
};

// CoffeeFlavor: 구체적 플라이웨이트
class CoffeeFlavor extends InterfaceImplementation {
	constructor(newFlavor) {
		super();
		this.flavor = newFlavor;
	}

	getFlavor() {
		return this.flavor;
	}

	serveCoffee(context) {
		console.log(
			`Serving Coffee flavor ${this.flavor} to table ${context.getTable()}`
		);
	}
}

// CoffeeOrder 인터페이스 구현
CoffeeFlavor.implementsFor(CoffeeOrder);

// 헬퍼
const CoffeeOrderContext = (tableNumber) => ({
	getTable() {
		return tableNumber;
	},
});

// 플라이웨이트 팩토리
class CoffeeFlavorFactory {
	constructor() {
		this.flavors = {};
		this.length = 0;
	}

	getCoffeeFlavor(flavorName) {
		let flavor = this.flavors[flavorName];
		if (!flavor) {
			flavor = new CoffeeFlavor(flavorName);
			this.flavors[flavorName] = flavor;
			this.length++;
		}
		return flavor;
	}

	getTotalCoffeeFlavorsMade() {
		return this.length;
	}
}

// 플라이웨이트 활용
const testFlyweight = () => {
	const flavors = [];
	const tables = [];
	let ordersMade = 0;
	const flavorFactory = new CoffeeFlavorFactory();

	function takeOrders(flavorIn, table) {
		flavors.push(flavorFactory.getCoffeeFlavor(flavorIn));
		tables.push(CoffeeOrderContext(table));
		ordersMade++;
	}

	takeOrders('Cappuccino', 2);

	// 주문 제공
	for (let i = 0; i < ordersMade; ++i) {
		flavors[i].serveCoffee(tables[i]);
	}

	console.log(' ');
	console.log(
		`total CoffeeFlavor objects made: ${flavorFactory.getTotalCoffeeFlavorsMade()}`
	);
};

testFlyweight();
