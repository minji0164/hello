// 변수
// 데이터를 저장하고 사용하는 데이터의 이름
// var, let, const
// var: ES6 이전에 사용하던 변수 (현재는 잘 사용하지 않음)

// 변수 선언
let a = 10;
const b = 5;

console.log(a);
console.log(b);
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// let 변수 (변수의 값을 변경할 수 있음)
// 변수 선언
let c = 10;
console.log(c);

// 변수 값 변경(재할당)
c = 20;
console.log(c);

// const 변수 (변수의 값을 변경할 수 없음)
// 변수 선언
const d = 5;
console.log(d);

// 변수 값 변경(재할당 불가)
// d = 10;

// zero base numbering
// js는 배열의 index(순서)가 0부터 시작함

// 배열 선언
const animals = ['dog', 'cat', 'fish'];

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);

// 데이터 종류
// 문자열(string)
// 문자열은 작은 따옴표('') 또는 큰 따옴표("")로 감싸서 표현
let myName = '강민지';
let age = '22';

console.log(myName);
console.log(age);
// 강민지 나이는 22살입니다.
console.log(`${myName} 나이는 ${age} 세입니다.`);

// 불린데이터 (boolean)(true, false)
let hungry = true;
let cool = false;

console.log(hungry);
console.log(cool);

// 객체데이터(object)
// 여러 데이터를 하나의 변수에 저장하기 위해 사용
// {key: value}
let user = {
    name: '강민지',
    age: 22,
    cool: true,
};

console.log(user);
console.log(user.name);
// 강민지 나이는 22세입니다.
console.log(`${user.name} 나이는 ${user.age} 세입니다.`);
// 강민지는 멋져요
console.log(`${user.name} 는 ${user.cool ? '멋져요' : '멋지지 않아요'}`);

// 배열(array)
// 여러 데이터를 순서대로 저장하기 위해 사용
let fruits = ['사과', '바나나', '딸기'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 함수(function)
// 특정 기능을 수행하는 코드의 집합
function sayHello() {
    // 함수 내용
    console.log('안녕하세요');
}
// 함수 호출
sayHello();

// 함수의 재사용
// 국어, 수학 점수를 전달하면 총점을 계산해주는 함수
// 함수 선언
function sum(a, b) {
    return a + b;
}
// 함수 호출
console.log(sum(80, 90));
console.log(sum(70, 80));

let e = sum(20, 30);
console.log(e);

// 기명 함수(named function)
function hello() {
    console.log('hello');
}
// 함수 호출
hello();

// 익명 함수 (anonymous function)
let hello2 = function () {
    console.log('hello2');
}
// 함수 호출
hello2();

// 화살표 함수(arrow function)
let hello3 = () => {
    console.log('hello3');
}
// 함수 호출
hello3();

// 조건문
// 특정 조건에 따라 다른 코드를 실행할 때 사용
// if (조건) {참일 경우 실행문} else {거짓일 경우 실행문}
if (true) {
    console.log('true');
} else {
    console.log('false');
}

// DOM API(Document Object Model) 조작
// HTML 문서의 요소를 제어하는 방법

// HTML 요소 검색
const boxEl = document.querySelector('.box');

// boxEl를 클릭했을 때, 할 일을 함수로 정의
boxEl.addEventListener("click", function () {
    console.log('click');
    // boxEl 요소에 active 클래스 추가
    boxEl.classList.add('active');
});




const tabEls = document.querySelectorAll('.tab');
console.log(tabEls);

tabEls.forEach(function (tabEl, index) {
    console.log(tabEl, index);
    tabEl.classList.add(`tab-${index + 1}`);
});