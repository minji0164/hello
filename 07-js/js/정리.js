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
