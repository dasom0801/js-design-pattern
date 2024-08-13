// async/await 데코레이터
function asyncLogger(fn) {
  return async function (...args) {
    console.log("Starting async function...");
    const result = await fn(...args);
    console.log('Async function completed');
    return result;
  }
}

@asyncLogger
async function main() {
  const data = await makeRequest('http://example.com/');
  console.log(data);
}
