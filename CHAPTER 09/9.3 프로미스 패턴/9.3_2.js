// 프로미스 메모이제이션
const cache = new Map();

function memoizedMakeRequest(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        cache.set(url, data);
        resolve(data);
      }).catch(error => reject(error));
  })
}

const button = document.querySelector('button');
button.addEventListener('click', () => {
  memoizedMakeRequest('http://example.com/')
    .then(data => console.log(data))
    .catch(error => console.log(error));
});