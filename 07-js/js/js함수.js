//함수 선언하기

//함수 선언식
// function 함수이름 () {};
function hello () {
    console.log ('hello');
};

//함수 표현식
// const 함수이름 function () {};
const world = function () {
    console.log('world');
};

//함수호출
hello();
world();

//return
//return이란 함수를 종료하고 값을 반환하는 것이다.
function h1 () {
    return 'hello';
    console.log('world');
    //return문 이후에 작성된 코드는 실행되지 않는다.
};


function h2 () {
    return;
    // return 'hello'; // 이 코드는 실행 안 됨
};

h1();
h2();

//매개변수
//매개변수랑 함수를 호출할 때 함수로 전달되는 값이다. 
// function 함수이름 (매개변수1, 매개변수2) {};

function sum (x = 1, y = 2) {
    return x + y;
};

sum(1, 2);
console.log (sum(1, 2));
console.log (sum(4, 5));
console.log (sum(5)); //y에 들어간 숫자가 없어서 NaN 출력

//객체의 구조 분해 할당
//일반식

const users = [
    {
        name: 'winter',
        age: 3,
    },
    {
        name: 'fall',
        age: 3,
    },
    {
        name: 'summer',
        age: 3,
    },
];

//함수 선언 (name 출력)
function getEmail({name, age}) {
    // const {name, age} = aaa;
    return `${name}의 나이는 ${age}세입니다.`;
};

//함수 호출
getEmail(users);

console.log(getEmail(users[0]));
console.log(getEmail(users[1]));

//배열의 구조분해 할당
const animals = ['dog', 'cat','fish'];

//함수선언 (배열의 두번째 값 출력함수)
function getSecond(array) {
    return `${array[1]}, ${array[0]}, ${array[2]}를 키우고 있어'`;
};

function getSecond([, b, c]) {
    // const [a, b, c] = array;
    return `${b}, ${c}를 키우고 있어'`;
};

//함수호출
getSecond(animals);
console.log(getSecond(animals));

// 화살표 함수의 다양한 예시
// 1. 매개변수가 없는 경우
const a = () => {};

// 2. 매개변수가 하나인 경우(괄호 생략 가능)
const b = x => {};

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
const f = () => ({a: 1});
// const f = () => {
//     return {a: 1};
// };

// 7. 배열을 반환하는 경우
const g = () => [1, 2];
// const g = () => {
//     return [1, 2];
// };