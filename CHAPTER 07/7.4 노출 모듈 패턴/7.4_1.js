let privateVar = 'Rob Dodson';
const publicVar = 'Hey there!';

const privateFunction = () => {
	console.log(`Name: ${privateVar}`);
};

const publicSetName = (strName) => {
	privateVar = strName;
};

const publicGetName = () => {
	privateFunction();
};

// 비공개 함수와 속성에 접근하는 공개 포인터
const myRevealingModule = {
	setName: publicSetName,
	greeting: publicVar,
	getName: publicGetName,
};

export default myRevealingModule;
