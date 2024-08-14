// 즉시 실행 함수 표현식 패턴
const namespace = namespace || {};

// 함수 매개변수로 네임스페이스 객체를 전달하고, 공용 메서드와 속성을 할당한다.
((o) => {
  o.foo = 'foo';
  o.bar = () => 'bar';
})(namespace);

console.log(namespace);