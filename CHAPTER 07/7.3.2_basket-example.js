import basketModule from './7.3.2_basket-module.js';

basketModule.addItem({
	item: 'bread',
	price: 0.5,
});

basketModule.addItem({
	item: 'butter',
	price: 0.3,
});

console.log(basketModule.getItemCount()); // 2
console.log(basketModule.getTotal()); // 0.8

console.log(basketModule.basket); // undefined, basket 변수는 공개 API에 포함되지 않음
