// 비동기 메모이제이션
const cache = new Map();

async function memoizedMakeRequest(url) {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const response = await fetch(url);
  const data = await response.json();
  cache.set(url, data);
  return data;
}