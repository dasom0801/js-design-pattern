// 7.3.2_2.js 템플릿으로 장바구니 구현
// 비공개 변수 및 함수
const basket = [];

const doSomethingPrivate = () => {
	// ...
};

const doSomethingElsePrivate = () => {
	// ...
};

// 다른 파일에 공개할 객체 생성
const basketModule = {
	// 장바구니에 아이템 추가
	addItem(values) {
		basket.push(values);
	},
	// basket의 길이 가져오기
	getItemCount() {
		return basket.length;
	},
	// 비공개 함수를 공개 함수로 감싸 다른 이름으로 사용하기
	doSomething() {
		doSomethingPrivate();
	},
	// basket에 담긴 아이템의 합계 가져오기
	getTotal() {
		return basket.reduce((currentSum, item) => item.price + currentSum, 0);
	},
};

export default basketModule;
