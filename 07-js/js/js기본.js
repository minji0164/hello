// js 기본
// string(문자열)
console.log('hello world')

const a = '친구얌';
console.log(a);

//백틱을 이용하면 문자열 안에 변수를 넣을 수 있다! = 리터럴 방식이라고 한다
console.log(`안녕~ ${a}`); 




//Number (숫자)
//따옴표를 붙이지 않으면 숫자로 인식한다.
console.log(123); // 123 출력
console.log(1 + 2); // 3 출력
console.log('1' + 2); // 12 출력(앞에 있는 문자 1하고 2라는 숫자가 그냥 붙은 거)
console.log('1' + '2'); // 12 출력(문자끼리 붙은 거)

const b = -123;
const c = 1.23;
console.log(b + 100, c * 2);




//Number : 숫자로 변환
const d = 0.1;
const e = 0.2;
console.log(d + e) // 부동 소수점 방식으로 인해 0.3이 아닌 0.30000000000000004가 나옴
console.log((d + e).toFixed(1)); // toFixed() : 소수점 자리수를 지정해주는 메소드, 자동 문자열로 반환
console.log(typeof (d + e).toFixed(1)); // 문자열이기 때문에 typeof로 확인해보면 string이 나옴
console.log(Number ((d + e).toFixed(1))); // Number로 감싸주면 number로 반환




//boolean (참 & 거짓)
const f = true;
const g = false;

if (g) {
    console.log('참입니당~');
};




//null & undefined (값 없음)
//null : 값이 없다.
//undefined : 값이 할당되지 않았다.

let age = null;
console.log(age); 

//let 재할당 가능
age = 22; 
console.log(age); 


let height;
console.log(height); 

height = 162;
console.log(height); 




//array (배열)
//여러개의 값을 순차적으로 나열한 자료형
//[값, 값, 값];

const animals = ['북극곰', '판다', '햄스터'] // 배열은 대괄호로 만들어줌

console.log(animals);
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals[0], animals[2]);
console.log(animals.length) // length = 배열의 갯수

// 배열의 마지막 요소를 가져온다. 
console.log(animals[animals.length - 1])




//object (객체)
//여러개의 값을 {key : value} 형태로 저장한 자료형
//{이름 : 값, 이름 : 값};

const user = {
    name: '민징',
    age: 22,

};

console.log(user);
console.log(user.name, user.age); //점표기법

console.log(`${user.name}의 나이는 ${user.age}살입니다`)
console.log(user.name + '의 나이는' + user.age + '살입니다.')

console.log(user['name'], user['age']); //대괄호표기법

//ex
const userA = {
    name: '민지',
    age: 22,
};
const userB = {
    name: '지민',
    age: 2,
    parent: userA,

};

console.log(userB);
console.log(userB.parent.name);
console.log(userB['parent']['name']);




//배열에 객체 넣기
const users = [userA, userB];
console.log(users);
console.log(users[0]);
console.log(users[0].name);




//function(함수)
//특정 코드를 하나의 명령으로 실행할 수 있게 해주는 기능
//function 함수이름 (매개변수) {코드}

function printHello() {
    console.log('하이');
}

printHello();
function getNumber () {
    return 123;
}

console.log(getNumber, typeof getNumber);
console.log(getNumber(), typeof getNumber());




//Type Conversion (형 변환
const h =1;
const i = '1';

//동등 연산자 : 값만 비교
console.log(h == i);
//일치 연산자 : 값고 타입을 비교
console.log(h === i);




//Truthy & Falsy (참과 거짓)
//false 0, '', null, undefined, NaN

const j = false;

if (j) {
    console.log('참입니ㅏㄷ.');
}   else {
    console.log('거짓입니다');
}


