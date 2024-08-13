// 여러 프로미스를 동시에 실행
Promise.all([
  makeRequest('http://example1.com/'),
  makeRequest('http://example2.com/')
]).then(([ data1, data2 ]) => console.log(data1, data2))

// 프로미스를 순차적으로 실행
Promise.resolve()
  .then(() => makeRequest('http://example1.com/'))
  .then(() => makeRequest('http://example2.com/'),)
  .then(() => {
    // 모든 요청 완료
  });

// 동시 실행해서 가장 먼저 완료되는 프로미스의 결과를 반환
Promise.race([
  makeRequest('http://example1.com/'),
  makeRequest('http://example2.com/')
]).then(data => {
  console.log(data);
})

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  })
}


