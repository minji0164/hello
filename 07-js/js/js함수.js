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
  // console.log("hello");
}, 1000); //1초 후에 hello가 출력된다

//2. clearTimeout(setTimeout 함수의 타이머를 정지할 수 있는 '함수')
// clearTimeout(setTimeout의 변수)
const btnStop = document.querySelector("#btnStop");

btnStop.addEventListener("click", () => {
  console.log("timeout ok");
  clearTimeout(timer);
}); // 1초 뒤 hello가 출력되기 전에 빨리 버튼 클릭 시 타이머 취소 가능

//3. setInterval(일정 간격으로 함수를 반복하여 실행시키는 '함수')
// setInterval(함수, 시간)
const timer2 = setInterval(() => {
  // console.log("hellohello");
}, 3000); //3초마다 hellohello 실행

//4. clearInterval(setInterval 함수의 타이머를 정지할 수 있는 '함수')
// clearInterval(setInterval의 변수)
const btn2Stop = document.querySelector("#btn2Stop");

btn2Stop.addEventListener("click", () => {
  console.log("interval ok");
  clearInterval(timer2);
});
//---------------------------------------------------------------------
//콜백 함수(동기적 함수 = 위에서부터 아래로 순차적으로 실행되며, 각 작업이 이전 작업의 완료를 기다리는 함수)
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
//콜백함수의 예시(그냥 개념만 대강 이해하자, 이게 개어려움)

const ex = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 1000);
}; //언디파인드 출력(setTimeout은 1초 뒤에 실행되는데 ex는 즉시 실행돼버리므로)
ex(1, 2, (value) => {
  console.log(value);
});
//---------------------------------------------------------------------2024.03.07
//콜백함수 복습
const cc = (props) => {
  props();
  console.log("cc");
};
const dd = () => {
  console.log("dd");
};

cc(dd); //함수를 인수로 집어넣지만 '인수'로 쓰이기 때문에 dd()에서 괄호는 지워주고 인수로서 집어넣기
//-------------------------
//콜백함수의 예시 복습
// const ex2 = (a, b) => {
//   setTimeout(() => {
//     return a + b;
//   }, 2000);
// };
// console.log(ex2(1, 2)); //언디파인드 출력, 세 번째 인수를 넣어주어야 출력 가능

const ex2 = (a, b, c) => {
  setTimeout(() => {
    return c(a + b);
  }, 2000);
};
ex2(1, 2, (props) => {
  console.log(props);
});
//---------------------------------------------------------------------
//재귀함수(선출력 후연산)(자기 자신을 호출하여 문제를 해결하는 함수 / 최상위에 있는 애를 호출할 때 등 사용 됨)
let i = 0;
const aaa = () => {
  console.log("aaa");
  i++;
  if (i < 5) {
    aaa();
  }
};

aaa();
//-------------------------
//재귀함수 예시
const userA = {
  name: "A",
  parent: null,
};
const userB = {
  name: "B",
  parent: userA,
};
const userC = {
  name: "C",
  parent: userB,
};
const userD = {
  name: "D",
  parent: userC,
};

const getRootUser = (props) => {
  if (props.parent) {
    return getRootUser(props.parent); // 다시 parent user 호출
  }
  return props; // 참이 반복되다 거짓일 경우 여기서(종료 조건) 최상위 변수 반환
}; // if문 사용하여 참인지 거짓인지 따져봐야 함 / if(조건)
console.log(getRootUser(userD));
//---------------------------------------------------------------------
//this 키워드(일반함수에서 사용한다)

//일반함수일 경우
const obj = {
  name: "아메리카노",
  price: 3000,
  txt: function () {
    return `${this.name}는 ${this.price}원입니다.`;
  },
};

console.log(obj.txt()); // 객체에서 txt는 함수이므로 ()도 넣어주기

//화살표함수일 경우
// const obj2 = {
//   name: "카페라떼",
//   price: 3500,
//   txt: () => {
//     return `${this.name}는 ${this.price}원입니다.`;
//   },
// };

// console.log(obj2.txt()); // '는 undefined원입니다.' 출력

// 굳이 화살표함수로 쓰고 싶을 때(이해 안 되지만 그냥 일반함수로 쓰면 됨)
function coffee2() {
  this.name = "콜드브루";
  this.price = 4000;

  return {
    name: "카페라떼",
    price: 3500,
    txt: () => {
      return `${this.name}는 ${this.price}원입니다.`;
    },
  };
}

const coffee = coffee2();
console.log(coffee.txt());
//---------------------------------------------------------------------
