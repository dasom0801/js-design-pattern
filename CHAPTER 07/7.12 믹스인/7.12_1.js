import Car from './7.12_2-car.js';

// 동적으로 부모 클래스를 받아 확장하는 함수
const MyMixins = (superclass) =>
	class extends superclass {
		moveUp() {
			console.log('move up');
		}
		moveDown() {
			console.log('move down');
		}
		stop() {
			console.log('stop! in the name of love!');
		}
	};

class CarAnimator {
	moveLeft() {
		console.log('move left!');
	}
}

class PersonAnimator {
	moveRandomly() {
		// ...
	}
}

// 믹스인을 사용하여 CarAnimator 확장
class MyAnimator extends MyMixins(CarAnimator) {}
const myAnimator = new MyAnimator();
myAnimator.moveDown();
myAnimator.moveLeft();
myAnimator.stop();
