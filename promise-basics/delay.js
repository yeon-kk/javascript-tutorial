// 수정한 코드
// resolve를 return
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(3000).then(() => alert("3초 후 실행"));

// 처음 작성한 코드
// delay함수는 undefined 반환
// delay에서 promise 결과(resolve,reject)를 return해야 한다.
function delay(ms) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }, ms);
}
delay(3000).then(() => alert("3초 후 실행"));

// 의도한 바가 조금 다르다.
// Promise객체를 생성 후 resolve하는데까지 기다릴 것인지,
// Promise 객체 생성까지를 기다릴지인데,
// 여기서 return setTimeout(...)을 하더라도 setTimeout이 비동기함수이므로
// delay함수는 promise를 반환하지 않는다(resolve결과를 기다리지 않는다)
