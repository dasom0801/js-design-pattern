// 간단한 발행/구독 패턴
const events = (function () {
	const topics = {};
	const hOP = topics.hasOwnProperty;

	return {
		subscribe: function (topic, listener) {
			if (!hOP.call(topics, topic)) topics[topic] = [];
			const index = topics[topic].push(listener) - 1;

			return {
				remove: function () {
					delete topics[topic][index];
				},
			};
		},
		publish: function (topic, info) {
			if (!hOP.call(topics, topic)) return;
			topics[topic].forEach((item) => {
				item(info !== undefined ? info : {});
			});
		},
	};
})();

// 받은 메시지 수를 세는 카운터 변수
let mailCounter = 0;

// "inbox/newMessage"라는 이름의 토픽을 구독하는 구독자를 초기화
const subscriber1 = events.subscribe('inbox/newMessage', (data) => {
	console.log('A new message was received:', data);

	// 전달 받은 데이터를 사용해 사용자에게 메시지 미리보기를 보여줌
	document.querySelector('.messageSender').innerHTML = data.sender;
	document.querySelector('.messagePreview').innerHTML = data.body;
});

// 같은 데이터를 사용해 다른 작업을 수행하는 다른 구독자
const subscriber2 = events.subscribe('inbox/newMessage', (data) => {
	document.querySelector('.newMessageCounter').innerHTML = ++mailCounter;
});

events.publish('inbox/newMessage', {
	sender: 'hello@google.com',
	body: 'Hey there! How are you doing today?',
});

// 구독 취소
subscriber1.remove();
subscriber2.remove();
