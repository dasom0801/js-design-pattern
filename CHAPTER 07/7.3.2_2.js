// 네임스페이스, 공개 및 비공개 변수를 다루는 템플릿 예제

// 비공개 카운터 변수
let myPrivateVar = 0;

// 인자를 출력하는 비공개 함수
const myPrivateMethod = (foo) => {
	console.log(foo);
};

const myNamespace = {
	// 공개 변수
	myPublicVar: 'foo',
	// 비공개 변수와 함수를 다루는 공개 함수
	myPublicFunction(bar) {
		// 비공개 카운터 증가
		myPrivateVar++;

		// 비공개 함수 호출
		myPrivateMethod(bar);
	},
};

export default myNamespace;
