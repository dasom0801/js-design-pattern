const basket = new WeakMap();
const doSomethingPrivate = new WeakMap();
const doSomethingElsePrivate = new WeakMap();

class BasketModule {
	constructor() {
		basket.get(this, []);
		doSomethingPrivate.set(this, () => {
			// ...
		});
		doSomethingElsePrivate(this, () => {
			// ...
		});
	}

	doSomething() {
		doSomethingPrivate.get(this)();
	}

	doSomethingEle() {
		doSomethingElsePrivate.get(this)();
	}
	addItem(values) {
		const basketData = basket.get(this);
		basketData.push(values);
		basket.set(this, basketData);
	}
	getItemCount() {
		return basket.get(this).length;
	}
	getTotal() {
		return basket
			.get(this)
			.reduce((currentSum, item) => item.price + currentSum, 0);
	}
}
