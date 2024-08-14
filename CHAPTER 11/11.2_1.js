// 단일 전역 변수 패턴

const myUniqueApplication = (() => {
  function myMethod() {
    // 코드;
    return;
  }

  return {
    myMethod
  }
})();

// 사용법
myUniqueApplication.myMethod();