//  발행/구독 패턴 예제

class PubSub {
	constructor() {
		// 알림을 보내거나 받을 수 있는 토픽을 저장
		this.topics = {};

		// 토픽 식별자
		this.subUid = -1;
	}

	// 해당 토픽을 구독한 모든 구독자에게 알림을 보내 모든 구독자의 등록된 함수를 실행한다.
	publish(topic, args) {
		if (!this.topics[topic]) {
			return false;
		}

		const subscribers = this.topics[topic];

		let len = subscribers ? subscribers.length : 0;
		while (len--) {
			subscribers[len].func(topic, args);
		}
		return this;
	}

	// 토픽과 구독자를 식별하는 고유 토큰을 발행하여 특정 토픽에 대한 새로운 구독자를 생성한다.
	subscribe(topic, func) {
		if (!this.topics[topic]) {
			this.topics[topic] = [];
		}

		const token = (++this.subUid).toString();
		this.topics[topic].push({
			token,
			func,
		});
		return token;
	}

	// 전달받은 고유 토큰 값을 기반으로 구독자를 알림 목록에서 제거한다.
	unsubscribe(token) {
		for (const m in this.topics) {
			if (this.topics[m]) {
				for (let i = 0, j = this.topics[m].length; i < j; i++) {
					if (this.topics[m][i].token === token) {
						this.topics[m].splice(i, 1);
						return token;
					}
				}
			}
		}
		return this;
	}
}

const pubsub = new PubSub();

pubsub.subscribe('/addFavorite', (topic, args) => {
	console.log('test', topic, args);
});
pubsub.publish('/addFavorite', ['test']);

const messageLogger = (topics, data) => {
	console.log(`Logging: ${topics}: ${data}`);
};

// 구독자들은 구독한 토픽의 알림을 감지하여 콜백함수를 호출한다.
const subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

// 발행자는 토픽이나 알림을 발행하는 역할을 한다.
// 문자열 메시지를 발행
pubsub.publish('inbox/newMessage', 'hello world!');

// 배열 형태의 메시지를 발행
pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);

// 객체 형태의 메시지를 발행
pubsub.publish('inbox/newMessage', {
	sender: 'hello@google.com',
	body: 'Hey again!',
});

// 구독 취소
pubsub.unsubscribe(subscription);
// messageLogger가 실행되지 않는다.
pubsub.publish('inbox/newMessage', 'Hello! are you still there?');

// 알림 UI 구현하기
// 나중에 UI에서 사용할 현재 로컬 시간을 변환
const getCurrentTime = () => {
	const date = new Date();
	const m = date.getMonth() + 1;
	const d = date.getDate();
	const y = date.getFullYear();
	const t = date.toLocaleTimeString().toLowerCase();

	return `${m}/${d}/${y} ${t}`;
};

// 가상 그리드 컴포넌트에 새로운 데이터 행 추가
const addGridRow = (data) => {
	// ui.grid.addRow(data);
	console.log(`updated grid component with: ${data}`);
};

// 마지막 업데이트 시간을 보여주기 위해 가상 그리드를 업데이트
const updateCounter = (data) => {
	// ui.grid.updateLastChanged(getCurrentTime());
	console.log(`data last updated at: ${getCurrentTime()} with ${data}`);
};

// 구독자에게 전달된 데이터를 사용하여 그리드를 업데이트
const gridUpdate = (topic, data) => {
	if (data !== undefined) {
		addGridRow(data);
		updateCounter(data);
	}
};

// newDataAvailable 토픽에 대한 구독 생성
const subscriber = pubsub.subscribe('newDataAvailable', gridUpdate);

// 새로운 항목을 나타내는 gridUpdated 토픽에 변경사항을 발행
pubsub.publish('newDataAvailable', {
	summary: 'Apple made $5 billion',
	identifier: 'APPL',
	stockPrice: 570.91,
});

pubsub.publish('newDataAvailable', {
	summary: 'Microsoft made $20 million',
	identifier: 'MSFT',
	stockPrice: 30.85,
});
