// 주체(subject)가 가질 수 있는 관찰자 목록
class ObserverList {
	constructor() {
		this.observerList = [];
	}

	add(obj) {
		return this.observerList.push(obj);
	}
	count() {
		return this.observerList.length;
	}

	get(index) {
		if (index > -1 && index < this.observerList.length) {
			return this.observerList[index];
		}
	}

	indexOf(obj, startIndex) {
		let i = startIndex;

		while (i < this.observerList.length) {
			if (this.observerList[i] === obj) {
				return i;
			}
			i++;
		}
		return -1;
	}

	removeAt(index) {
		this.observerList.splice(index, 1);
	}
}

//  주체가 관찰자 목록을 추가하고, 제거하고, 알리는 기능
class Subject {
	constructor() {
		this.observers = new ObserverList();
	}

	addObserver(observer) {
		this.observers.add(observer);
	}

	removeObserver(observer) {
		this.observers.removeAt(this.observers.indexOf(observer, 0));
	}

	notify(context) {
		const observerCount = this.observers.count();

		for (let i = 0; i < observerCount; i++) {
			this.observers.get(i).update(context);
		}
	}
}

// 관찰자 클래스
class Observer {
	constructor() {}

	update() {
		// ...
	}
}

// 구체적 주체
// 체크박스를 캡슐화하고 주체 체크박스가 클릭되었을 때 알림을 보낸다.
class ConcreteSubject extends Subject {
	constructor(element) {
		super();
		this.element = element;
		this.element.onclick = () => {
			this.notify(this.element.checked);
		};
	}
}

// 구체적 관찰자
// 각각의 관찰자 체크박스를 캡슐화하고 관찰자 체크박스들의 상태를 변경하는 Update 인터페이스를 구현한다.
class ConcreteObserver extends Observer {
	constructor(element) {
		super();
		this.element = element;
	}

	// 원하는 업데이트 동작으로 재정의(override)
	update(value) {
		this.element.checked = value;
	}
}

// DOM 요소 참조
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new ConcreteSubject(
	document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
	// 새로운 체크박스 생성
	const check = document.createElement('input');
	check.type = 'checkbox';
	const checkObserver = new ConcreteObserver(check);

	// 메인 주체의 관찰자 리스트에 새로운 관찰자 추가
	controlCheckbox.addObserver(checkObserver);

	// 컨테이너에 새로운 체크박스 추가
	container.appendChild(check);
};

addBtn.onclick = addNewObserver;
