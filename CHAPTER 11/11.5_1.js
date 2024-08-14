// 중첩 네임스페이스 패턴
const myApp = myApp || {};

// 중첩된 하위 속성을 정의할 때에도 객체 존재 여부를 확인
myApp.routers = myApp.routers || {};
myApp.model = myApp.model || {};
myApp.model.special = myApp.model.special || {};
