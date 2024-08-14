((namespace, undefined) => {
  // 비공개 속성들
  const foo = 'foo';
  const bar = 'bar';

  // 공개 메서드와 속성
  namespace.foobar = "foobar";
  namespace.sayHello = () => {
    speak("hello world");
  };

  // 비공개 메서드
  function speak(msg) {
    console.log(`You said: ${msg}`);
  }
})(window.namespace = window.namespace || {});

// 공개된 속성과 메서드 테스트
console.log(namespace.foobar);
namespace.sayHello();

// 새로운 속성 할당
namespace.foobar2 = 'foobar';
console.log(namespace.foobar2);