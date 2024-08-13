// 프로미스 재시도
function makeRequestWithRetry(url) {
  let attempts = 0;

  const makeRequest = () => new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });

  const retry = error => {
    attempts++;

    if (attempts >= 3) {
      throw new Error('Request failed after 3 attemps');
    }
    console.log(`Retrying request: attempt ${attempts}`);
    return makeRequest();
  }

  return makeRequest().catch(retry)
}