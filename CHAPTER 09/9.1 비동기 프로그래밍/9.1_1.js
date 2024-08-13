// 콜백 사용 예시
function makeRequest(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error));
}

makeRequest('http://example.com/', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data)
  }
});

// promise 사용 예시
function makeRequest2(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  })
}

makeRequest2('http://example.com/')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// async/await 사용 예시
async function makeRequest3(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

makeRequest3('http://example.com/');