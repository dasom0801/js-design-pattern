// 네임스페이스 주입 패턴
const myApp = myApp || {};
myApp.utils = {};

(function () {
  let val = 5;
  this.getValue = () => val;
  this.setValue = (newVal) => {
    val = newVal;
  }

  // utils 하위에 새로운 하위 네임스페이스인 tools를 생성한다.
  this.tools ={};
}).apply(myApp.utils);

// utils를 통해 정의한 tools 네임스페이스에 새로운 동작을 추가한다.
(function() {
  this.diagnose = () => "diagnosis";
}).apply(myApp.utils.tools);


