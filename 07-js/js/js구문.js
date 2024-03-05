//구문




// 1. 구조분해할당

// - 구조분해란 배열이나 객체의 속성을 해체하여
//그 값을 개별 변수에 담을 수 있게 하는 javascript 표현식이다.



// 1-1 배열의 구조 분해
const arr = [1, 2, 3];

// const a = arr[0]; // 1
// const b = arr[1]; // 2
// const c = arr[2]; // 3

const [a, b, c] = arr; //변수에 할당
console.log(a, b, c); // 1, 2, 3

// 각각의 변수가 미리 할당되어 있을 경우
let d = 0;
let e = 0;
let f = 0;

const arr2 = [1, 2, 3]; // 참고 - 명령이 끝났다는 ;(세미콜론) 붙여주기

[, e, f] = arr2;
// 필요하지 않은 변수 제거
// 구조 분해 할당을 사용할 때에는 b,c 가 순서대로 데이터가 들어갈 수 있도록
// 숫자 1이 들어갈 자리를 ,(쉼표)로 구분해서 비워둬야 함 
// 안 그러면 1부터 인식함

console.log(e, f);

// 나머지 할당
// 꼭 rest라고 안 해도 되지만 보통 rest 씀
const arr3 = [1, 2, 3, 4, 5];

const [g, h, ...rest] = arr3

console.log(g, h, rest) // 1 2 [3, 4, 5]



// 1-2 객체의 구조 분해
const cat = {
    name: '겨울',
    age: 2,
};

// 기본값 할당, 변수 이름 바꾸기
const {name: nickname, age = 0, birth = '0101'} = cat;

console.log(cat.name, cat.age); // 겨울 2
console.log(name, age); // 겨울 2
console.log(nickname, birth); // 겨울 0101

// 1-2 객체의 구조 분해(한 번 더 해보기)
const airbnbIcon = {
    img: 'airbnb.png',
    text: '한옥',
};

const {img, text} = airbnbIcon

// console.log(airbnbIcon.img, airbnbIcon.text);
console.log(img, text); // 위에서 변수 설정해줘서 속성값만 적어줘도 된다.






// 2. 선택적 체이닝
// ?.을 사용하여 객체의 속성에 접근할 때
// 해당 속성이 없는 경우 undefined를 반환한다.

const user1 = null;
// console.log(user1.name); // error
console.log(user1?.name); // undefined

const userWinter = {
    name: '겨울',
    age: 2,
    address: {
        city: 'Busan',
        dong: 'Sasang',
    },
};

const userFall = {
    name: '가을',
    age: 3,
};

function printCity(user) {
    return user.address?.city || '주소가 없습니다!'; // 겨울이는 부산이라는 정보가 있으니 어드레스에서 '부산'이 출력되고 가을이는 없으니까 or을 넘어가고 '주소가 없습니다' 출력
};

console.log(printCity(userWinter)); // Busan
console.log(printCity(userFall)); // 주소가 없습니다!




// 3. 조건문


// 3-1 if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드 
// }



// // if else if문
// if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else if (조건) {
//     // 조건이 true일 때 실행되는 코드
// } else {
//     // 조건이 false일 때 실행되는 코드 
// }



// ex) 음수 양수 판별 함수
// 함수 선언

function isPositive(num) {
    if (num > 0) {
        console.log(`${num}은/는 양수입니다.`);
    } else if (num < 0) {
        console.log(num + '은/는 음수입니다.');
    } else {
        console.log(num + '은/는 0입니다.');
    }
}

// 함수 실행
isPositive(1);
isPositive(-1);
isPositive(0);



// switch 조건문
// 일치연산자, break
// 매개변수로 입력된 값과 일치하는 case문을 실행한다

// switch (매개변수) {
//     case 값1:
//         // 매개변수 === 값 1일 때 실행되는 코드
//     case 값2:
//         // 매개변수 === 값 2일 때 실행되는 코드
//         break
//     default:
//         // 매개변수와 일치하는 case문이 없을 때 실행되는 코드
// };

function getPrice(item) {
    let price;
    switch (item) {
        case '패딩':
            price = '280,000';
            break;
        case '바지':
            price = '55,000';
            break
        default:
            price = '아이템별로 상이함';
    }
    return price;
};

console.log(getPrice('패딩')); //280,000
console.log(getPrice('바지')); //55,000
console.log(getPrice('모자')); //아이템별로 상이함


// return

function getPrice2(item) {
    switch (item) {
        case '패딩':
            return '280,000';
            //return이란 함수를 종료하고 값을 반환하는 것이고,
            //return을 사용하면 break를 사용하지 않아도 된다. 
        case '바지':
            return '55,000';
        default:
            return '아이템별로 상이함';
    }
};

console.log(getPrice2('패딩')); //280,000
console.log(getPrice2('바지')); //55,000
console.log(getPrice2('모자')); //아이템별로 상이함


// if문으로 바꾸기
function getPrice3(item) {
    if (item === '패딩') return '280,000';
    if (item === '바지') return '55,000';
    return '아이템별로 상이함'; // default값은 return으로 바로 반환시키자
}

console.log(getPrice3('패딩')); //280,000
console.log(getPrice3('바지')); //55,000
console.log(getPrice3('모자')); //아이템별로 상이함




// 4. 반복문
// 반복문이란 특정 코드를 반복적으로 실행할 때 사용한다.

// for문 
// for (초기값; 조건; 증감식) {실행될 코드}

// for문 증가버전
// for (let i = 1; i <= 10; i ++) {};
for (let i = 1; i <= 10; i ++) {
    console.log(i); // 0부터 10까지 출력
};

// for문 break 넣기
for (let i = 10; i > 0; i--) {
    // 3보다 작은 수일 경우 break를 넣어서 전체 반복 종료하려고 함
    // i < 4 i가 4 이상일 때까지만
    if ( i < 4) {
        break;
    }
    console.log(i); // 출력하기
};

// for문 continue
// continue문 - 현재 반복 멈춘 후 다음 반복 진행(건너뛰기)
for (let i = 10; i > 0; i--) {
    if (i % 2 === 0) {
        // i가 짝수일 때
        continue; // 다음 반복 진행
    };
    console.log(i);
};

// for문으로 배열 출력
const animals = ['dog', 'cat', 'fish'];
console.log(animals);
console.log(animals.length);
console.log(animals[0], animals[1], animals[2]);

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
};

// for of문
// for (변수 of 배열) {실행코드}
for (let animal of animals) { // 배열의 요소를 하나씩 꺼내 animal에 할당
    console.log(animal); // dog, cat, fish
};

//ex2
const users = [
    {name: 'winter', age: 2},
    {name: 'fall', age: 3},
    {name: 'summer', age: 4},
];

for (let  i = 0; i < users.length; i++) {
    console.log(users[i]);
    console.log(users[i].name);
}; // 싹 출력

for (let user of users) {
    console.log(user);
    console.log(user.name);
};

// for (let  i = 3; i > users.length; i--) {
//     console.log(users[i]);
//     console.log(users[i].name);
// };


//for in문
//for (변수 in 객체) {실행될 코드};
const user = {
    name: 'winter',
    age: 2,
};

console.log (user.name, user.age); //점 표기법
console.log (user['name'], user['age']); //대괄호 표기법

for (let key in user) { //key 값은 마음대로 넣어줘도 된다
    console.log (key); //name, age 키값만 출력된다
    console.log (user[key]); //
};


//while (조건) {실행될 코드};
//1부터 10까지 더해보기
let i = 1; //초기값이다
let sum = 0; //합계를 지정할 변수다

while (i <= 10) {
    sum += i; //sum에 i를 더함
    // sum = sum + i;

    i++; //i에 1을 더함
    // i += 1;
    // i = i + 1;
};

console.log (sum);


//do while문
//do {실행될 코드} while (조건);

//0부터 9까지 출력해보기
let j = 0;

do {
    console.log (j);
    j++;
} while (j < 10);