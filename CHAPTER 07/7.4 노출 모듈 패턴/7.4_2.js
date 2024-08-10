let privateCounter = 0;

const privateFunction = () => {
	privateCounter++;
};

const publicFunction = () => {
	publicIncrement();
};

const publicIncrement = () => {
	privateFunction();
};

const publicGetCount = () => privateCounter;

// 비공개 함수와 속성에 접근하는 공개 포인터
const myRevealingModule = {
	start: publicFunction,
	increment: publicIncrement,
	count: publicGetCount,
};

export default myRevealingModule;
