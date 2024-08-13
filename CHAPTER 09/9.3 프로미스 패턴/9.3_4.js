function logger(fn) {
  return function (...args) {
    console.log('Staring function...');
    console.log(args)
    return fn(...args).then((result) => {
      console.log('Function completed');
      return result;
    })
  }
}

const makeRequest = (url) => new Promise((resolve, reject) => {
  fetch(url)
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(error => reject(error));
});

const makeRequestWithLogger = logger(makeRequest);

makeRequestWithLogger('http://example.com/')
  .then(data => console.log(data))
  .catch(error => console.error(error));