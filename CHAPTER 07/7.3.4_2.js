const myPrivateVar = new WeakMap();
const myPrivateMethod = new WeakMap();

class MyNamespace {
	constructor() {
		// 비공개 카운터 변수
		myPrivateVar.set(this, 0);
		myPrivateMethod.set(this, (foo) => console.log(foo));
		this.myPublicVar = 'foo';
	}

	myPublicFunction(bar) {
		let privateVar = privateVar.get(this);
		const privateMethod = myPrivateMethod.get(this);
		privateVar++;
		myPrivateVar.set(this, privateVar);
		privateMethod(bar);
	}
}
