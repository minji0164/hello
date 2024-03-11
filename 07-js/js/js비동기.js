//---------------------------------------------------------------------2024.03.08
// 비동기 처리(작업을 동시에 처리하는 것)
//1. setTimeout으로 비동기 처리
console.log("자바칩 프라푸치노 주문");

//setTimeout은 비동기처리
setTimeout(() => {
  // console.log("아메리카노 주문");
  // console.log("아메리카노 제공");
}, 3000); //3초 후 출력

console.log("자바칩 프라푸치노 제공");

// 비동기 처리의 사용(코드가 실행되는 순서와 실제로 실행되는 순서를 달리하기)
function order(name, time) {
  console.log(`${name} 주문 받음, ${time / 1000}초 소요.`); //밀리세컨드 단위라 1000으로 나눠주기(그래야 3초로 나옴)

  setTimeout(() => {
    console.log(`${name}가 만들어졌습니다.`);
  }, time);
}
// order("아메리카노", 3000);
// order("카페모카", 4000);
// order("자바칩 푸라푸치노", 6000);
//----------------------------------2024.03.11
//2. 콜백함수로 비동기 처리

function orderCoffee(name, callback) {
  //2. drinkCoffee(callback) 인수 받기
  console.log(`${name}를 만드는 중...`);

  setTimeout(() => {
    console.log(`${name}가 만들어졌습니다.`);
    callback(); //3. 넣고 싶은 위치에 drinkCoffee 실행문 넣기
  }, 3000);
}
function drinkCoffee() {
  console.log("커피를 마신다.");
}

//실행문
orderCoffee("아메리카노", drinkCoffee); //1. 함수를 인수로 넣기(함수가 통으로 이동하는 방식)
//----------------------------------
//3. Promise로 비동기 처리(상위호환)
const coffeeOrder = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve("아메리카노 준비 완료");
    } else {
      reject("아메리카노 준비 실패");
    }
  }, 3000);
});

//프로미스 객체 이용하기
coffeeOrder
  // 성공했을 때 실행될 코드
  .then((props) => {
    console.log(props);
  })
  // 실패했을 때 실행될 코드
  .catch((error) => {
    console.log(error);
  });
//---------------------------------------------------------------------
