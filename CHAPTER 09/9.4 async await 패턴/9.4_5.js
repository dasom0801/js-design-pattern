// 비동기 재시도

async function makeRequestWithRetry(url) {
  let attempts = 0;

  while(attempts < 3) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (e) {
      attempts++;
      console.log(`Retrying request: attempt ${attempts}`)
    }
  }
  throw new Error(`Request failed after 3 attempts.`);
}