// 객체 리터럴 표기법 패턴

// 같은 이름의 기존 변수나 네임스페이스를 덮어써버릴 수 있다.
const myApplication = {}

// 네임스페이스의 존재 여부 확인
// 옵션1
// var myApplication = myApplication || {};
// 옵션2
// if (!myApplication) {
//   myApplication = {}
// }
// 옵션3
// window.myApplication || (window.myApplication = {});
// myApplication || (myApplication = {});
// 옵션4
// var myApplication = myApplication === undefined ? {} : myApplication