//함수 선언하기

//함수 선언식
// function 함수이름 () {};
function hello() {
  console.log("hello");
}

//함수 표현식
// const 함수이름 function () {};
const world = function () {
  console.log("world");
};

//함수호출
hello();
world();

//return
//return이란 함수를 종료하고 값을 반환하는 것이다.
function h1() {
  return "hello";
  console.log("world");
  //return문 이후에 작성된 코드는 실행되지 않는다.
}

function h2() {
  return;
  // return 'hello'; // 이 코드는 실행 안 됨
}

h1();
h2();

//매개변수
//매개변수랑 함수를 호출할 때 함수로 전달되는 값이다.
// function 함수이름 (매개변수1, 매개변수2) {};

function sum(x = 1, y = 2) {
  return x + y;
}

sum(1, 2);
console.log(sum(1, 2));
console.log(sum(4, 5));
console.log(sum(5)); //y에 들어간 숫자가 없어서 NaN 출력

//객체의 구조 분해 할당
//일반식

const users = [
  {
    name: "winter",
    age: 3,
  },
  {
    name: "fall",
    age: 3,
  },
  {
    name: "summer",
    age: 3,
  },
];

//함수 선언 (name 출력)
function getEmail({ name, age }) {
  // const {name, age} = aaa;
  return `${name}의 나이는 ${age}세입니다.`;
}

//함수 호출
getEmail(users);

console.log(getEmail(users[0]));
console.log(getEmail(users[1]));

//배열의 구조분해 할당
const animals = ["dog", "cat", "fish"];

//함수선언 (배열의 두번째 값 출력함수)
function getSecond(array) {
  return `${array[1]}, ${array[0]}, ${array[2]}를 키우고 있어'`;
}

function getSecond([, b, c]) {
  // const [a, b, c] = array;
  return `${b}, ${c}를 키우고 있어'`;
}

//함수호출
getSecond(animals);
console.log(getSecond(animals));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우(괄호 생략 가능)
const b = (x) => {};

// 3. 매개변수가 여러개인 경우(괄호 생략 불가)
const c = (x, y) => {};

// 4. 함수의 리턴이 있는 경우
// return으로 시작하는 경우 중괄호를 생략할 수 있다.
const d = (x, y) => x + y;
// const d = (x, y) => {
//     return x + y;
// };

// 5. 리턴으로 시작하지 않는 경우 중괄호 생략 불가
const e = (x, y) => {
  console.log(x);
  return y;
};

// 6. 객체를 리턴하는 경우(= 객채를 반환하는 경우)
// 또한 리턴으로 시작했으므로 중괄호 생략 가능 + 소괄호로 감싸주기
const f = () => ({ a: 1 });
// const f = () => {
//     return {a: 1};
// };

// 7. 배열을 반환하는 경우
const g = () => [1, 2];
// const g = () => {
//     return [1, 2];
// };
//---------------------------------------------------------------------2024.03.06
//호출 스케줄링

//1. setTimeout(일정 시간이 지난 후에 함수를 실행시키는 '함수')
// setTimeout(함수, 시간) // <- 기본 구문
const timer = setTimeout(() => {
  console.log("hello");
}, 1000); //1초 후에 hello가 출력된다

//2. clearTimeout(setTimeout 함수의 타이머를 정지할 수 있는 '함수')
// clearTimeout(타이머)
const btnStop = document.querySelector("#btnStop");

btnStop.addEventListener("click", () => {
  console.log("timeout ok");
  clearTimeout(timer);
}); // 1초 뒤 hello가 출력되기 전에 빨리 버튼 클릭 시 타이머 취소 가능

//3. setInterval(일정 간격으로 함수를 실행시키는 '함수')
// setInterval(함수, 시간)
const timer2 = setInterval(() => {
  console.log("hellohello");
}, 3000); //3초마다 hellohello 실행

//4. clearInterval(setInterval 함수의 타이머를 정지할 수 있는 '함수')
// clearInterval(타이머)
const btn2Stop = document.querySelector("#btn2Stop");

btn2Stop.addEventListener("click", () => {
  console.log("interval ok");
  clearInterval(timer2);
});
//---------------------------------------------------------------------
//콜백 함수
//(함수의 매개변수로 전달되는 함수(뭔 소리지))(뒤에 오는 함수를 먼저 실행시키고 싶을 때 쓴다)

const aa = (props) => {
  props();
  console.log("aa");
}; //인자를 props로 전달 받음 / props를 실행시켜서 함수 bb가 먼저 실행되도록 함
const bb = () => {
  console.log("bb");
};

aa(bb); //함수 bb를 aa의 인자로 넣음.
//-------------------------
//콜백함수의 예시(그냥 개념만 대강 이해하자)

const ex = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 1000);
}; //언디파인드 출력(setTimeout은 1초 뒤에 실행되는데 ex는 즉시 실행돼버리므로)
ex(1, 2, (value) => {
  console.log(value);
});
//-------------------------
//---------------------------------------------------------------------
