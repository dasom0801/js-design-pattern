// MenuItem이 클릭 될 때 menu:click:foo 이벤트가 발생

const MenuItem = MyFrameworkView.extend({
  events: {
    'click .thatThing': 'clickedIt',
  },

  clickedIt(e) {
    e.preventDefault();

    // "menu:click:foo"를 실행한다고 가정
    MyframeWork.trigger(`menu:click:${this.model.get('name')}`)
  },
});

// 애플리케이션의 다른 곳에서 구현
class MyWorkFlow {
  constructor() {
    MyFramework.on('menu:click:foo', this.doStuff, this);
  }

  static doStuff() {
    // 이곳에 여러 객체를 인스턴스화
    // 객체의 이벤트 핸들러 설정
    // 모든 객체를 의미 있는 워크플로로 조정
  }
}