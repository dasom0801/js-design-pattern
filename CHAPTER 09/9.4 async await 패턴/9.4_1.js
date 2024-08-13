// 비동기 이터러블 순회
async function* createAsyncIterable() {
  yield 1;
  yield 2;
  yield 3;
}

async function main() {
  for await (const value of createAsyncIterable()) {
    console.log(value)
  }
}