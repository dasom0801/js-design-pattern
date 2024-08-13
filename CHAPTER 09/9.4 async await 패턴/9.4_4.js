// 비동기 이벤트 처리
const button = document.querySelector('button');

async function handleClick() {
  const response = await makeRequest('http://example.com/');
  console.log(response);
}

button.addEventListener('click', handleClick);