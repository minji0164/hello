// 배열(=대괄호)

const starbucks = ["아메리카노", "라떼", "마끼아또"];
console.log(starbucks[0]); //아메리카노
console.log(starbucks[2]); //마끼아또
console.log(starbucks.length); //배열의 갯수 출력

// 객체(=중괄호)

const starbucksMenu = {
  name: "아메리카노",
  price: "4000",
  size: "tall large venti",
};
console.log(starbucksMenu.price); // 점표기법, 4000
console.log(starbucksMenu["size"]); // 대괄호표기법,  tall large venti

const userA = {
  name: "a",
  age: 60,
};
const userB = {
  name: "b",
  age: 30,
  parent: userA,
};
console.log(userB);
console.log(userB.name);
console.log(userB.parent.name);
console.log(userB["parent"]["name"]);

const users = [userA, userB];
const users2 = [
  {
    name: "a",
    age: 60,
  },
  {
    name: "b",
    age: 30,
    parent: userA,
  },
]; // 객체랑 배열 합쳐서 사용
console.log(users2[0].name);
console.log(users2[1].parent.age);

// 구조 분해 할당

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(arr[0], arr[1], arr[2]);
console.log(a, b, c);

// display={['none', null, 'block']}
// display={{am: 'none', lg:'block'}}

const arr2 = [1, 2, 3];
const [d, e, ...rest] = arr2; // 나머지 할당
console.log(d);
console.log(e);
console.log(rest);

const obj = {
  name: "minji",
  age: 22,
  height: 162,
};
const { name, age, height } = obj; //객체의 구조 분해
// console.log(obj.name, obj.age, obj.height);
console.log(name, age, height);

const user1 = {
  name: "A",
  age: 30,
  address: "서울",
};
const user2 = {
  name: "B",
  age: 50,
};

function printCity(props) {
  return props.address || "주소 없음";
}
console.log(printCity(user1)); // 함수를 실행할 땐 괄호 열고 닫아주기
console.log(printCity(user2));

// 조건문
function isPositive(props) {
  if (props > 0) {
    return "양수입니다"; //참일 경우
  } else if (props < 0) {
    return "음수입니다"; //거짓일 경우
  } else {
    return "0입니다"; //둘 다 거짓일 경우
  }
}
console.log(isPositive()); //괄호 안에 숫자를 넣을 경우 리턴값 자동 출력됨

//스위치문
function getSound(props) {
  switch (props) {
    case "개":
      return "멍멍";

    case "고양이":
      return "냐옹";

    default:
      return "알 수 없음";
  }
}
console.log(getSound("개"));
console.log(getSound("나무늘보"));

//스위치문 이프문으로 바꾸기
function getSound2(props) {
  if (props === "개") return "멍멍";
  if (props === "고양이") return "냐옹";
  return "알 수 없음";
}
console.log(getSound2("개"));

// for of문

const hi = [
  {
    name: "안녕",
    age: 1,
  },
  {
    name: "방가",
    age: 2,
  },
  {
    name: "하이",
    age: 3,
  },
];
for (let i = 0; i < hi.length; i++) {
  console.log(`${hi[i].name}의 나이는${hi[i].age}입니다.`);
}
// for (let hi of hi) {
//   console.log(`${hi.name}의 나이는${hi.age}입니다.`);
// }
console.log(`${hi[1].name}의 나이는${hi[1].age}입니다.`);

//----------------------------------------------------------- 2024-03-06
//함수 선언하기
function hello() {
  console.log("hello");
} //일반함수임(기명함수?)

hello(); //호이스팅이 가능(호이스팅이란 선언문을 코드의 최상단으로 끌어올리는 것)

//함수 표현하기
const hello2 = function () {
  console.log("hello2");
}; //익명함수임

hello2(); //표현식은 호이스팅 불가능
//-----------------------------------------------------------
//매개변수(인수를 받는 변수)
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2)); //인수 지정
console.log(sum(3)); //인수 지정 3 + undifinde = NaN

//기본값 설정
function sum(a, b = 5) {
  return a + b;
}

console.log(sum(1)); //6 출력됨(1 + 5 = 6)
//-----------------------------------------------------------
//객체 구조 분해 할당
const user = {
  name: "anna", //문자는 "" 넣는 거 제발 잊지 마
  age: 10,
  email: "",
};

// function getName(props) {
//   const { name, age } = props; // 구조 분해 할당 사용
//   // return `${props.name} 나이는 ${props.age}입니다.`; // 구조 분해 할당 전
//   return `${name} 나이는 ${age}입니다.`; // 구조 분해 할당으로 props 생략 가능해짐
// } //호출된 거 props로 전달 받음
// console.log(getName(user)); //user호출

function getName({ name, age, email = "이메일 없음" }) {
  // const { name, age, email = "이메일 없음" } = props; // 구조 분해 할당 사용
  // return `${props.name} 나이는 ${props.age}입니다.`; // 구조 분해 할당 전
  return `${name} 나이는 ${age}입니다. ${email}.`; // 구조 분해 할당으로 props 생략 가능해짐
} //호출된 거 props로 전달 받음
console.log(getName(user)); //user호출
//-----------------------------------------------------------
//배열 구조 분해 할당
const arrA = [1, 2, 3];

// function getNum(props) {
//   const [, b] = props; // 구조 분해 할당 사용
//   // return props[1]; // 구조 분해 할당 전
//   return b; //구조 분해 할당 후
// }
function getNum([, b]) {
  // const [, b] = props; // 구조 분해 할당 사용
  // // return props[1]; // 구조 분해 할당 전
  return b; //구조 분해 할당 후
}
console.log(getNum(arrA));
//-----------------------------------------------------------
//나머지 매개변수(전개연산자 이용)
function sum(...rest) {
  return rest;
}

console.log(sum(1, 2, 3, 4, 5, 6)); //인수 지정
//-----------------------------------------------------------
//화살표 함수
// const arrow = () => {}; //기본 구문
// const arrow = a => {}; //매개변수(a) 하나일 경우 소괄호 생략 가능
const arrow = (a, b) => {};

// const sum2 = (a, b) => {
//   return a + b;
// };
const sum2 = (a, b) => a + b; // 리턴 축약 가능

console.log(sum2(1, 2));
//----------------------------
//화살표 함수의 예시
//1. 매개변수가 없는 경우
const aa = () => {};

//2. 매개변수가 하나인 경우
// const bb = x => {} // 프리티어 때문에 주석 처리함

//3. 매개변수가 여러 개인 경우
const cc = (x, y) => {};

//4. 리턴이 있는 경우
const dd = (x, y) => {
  return x + y;
};
//축약형
const ee = (x, y) => x + y;

//5. 리턴 키워드로 시작하지 않는 경우(리턴처럼 축약 불가능)
const ff = (x, y) => {
  console.log(x + y);
};

//6. 화살표 함수가 객체 데이터를 반환하는 경우
const gg = () => {
  return { a: 1, b: 2 };
};
//축약형(객체의 중괄호와 화살표 함수의 중괄호가 구분돼야 하므로 소괄호로 감싸주어야 함)
const hh = () => ({ a: 1, b: 2 });

//7. 화살표 함수가 배열 데이터를 반환하는 경우
const ii = () => {
  return [1, 2, 3];
};
//축약형
const jj = () => [1, 2, 3];
//----------------------------
//-----------------------------------------------------------
