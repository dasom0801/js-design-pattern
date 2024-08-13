// 비동기 작업을 동시에 실행
async function main() {
  const [data1, data2] = await Promise.all([
    makeRequest('http://example.com/1'),
    makeRequest('http://example.com/2')
  ]);
  console.log(data1, data2)
}

// 비동기 작업 순차 실행
async function main() {
  let result = await Promise.resolve();
  result = await makeRequest1(result);
  result = await makeRequest2(result);
  result = await makeRequest3(result);
  console.log(result);
}