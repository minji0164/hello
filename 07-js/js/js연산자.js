//연산자 

//산술(Arithmetic) 연산자
//+, -, *, /, %(나머지 연산자)

//덧셈
console.log(1 + 2);
console.log('딩동' + '댕동');

//뺄셈
console.log(5 + 3);

//곱셈
console.log(5 * 3);

//나눗셈
console.log(6 / 3);

//나머지
console.log(7 % 3);
//나머지가 0이면 짝수, 1이면 홀수
//(now % 슬라이드의 갯수)나머지가 0일 경우 마지막 슬라이드이다.

//짝수, 홀수 판별 함수
//함수 선언
function isEven(num) {
    return num % 2 === 0;
}

//함수 호출
console.log(isEven(2));

//콘솔창에 함수 출력

//할당 연산자

let now = 1 ;
console.log(now);

now = now + 1;
now += 1; //축약형
console.log(now);


let c = 2;
c = c * 2;
c *= 2; //축약형
console.log(c);


//부정연산자
//!를 사용하여 true를 false로, false를 true로 바꿀 수 있다.

console.log(!true);
console.log(!false);
console.log(!!0);


//비교연산자
// ===, !==, <, >, <=, >=,
//==, !=는 사용하지 않는 것이 좋다.

//일치연산자 (형변환 x)
console.log(1 === 1);
console.log(1 === '1');

//불일치 연산자 (형변환 x)
console.log(1 !== 1);
console.log(1 !== '1');

//대소비교연산자 (형변환 o)
console.log(1 < 2);
console.log(1 <= 2);
console.log(1 > 2);
console.log(1 >= 2);


//논리연산자
//&&(and)연산자
//둘 다 true일 경우 true로 반환

console.log(true && true);
console.log(true && false);
console.log(1 < 2 && 2 < 3);

console.log(true && false);
console.log(1 && 0);
console.log(1 && 2 && 0);
console.log(1 && 0 && 2);
console.log('a' && 'b' && '');
console.log('a' && 'b' && 'c');




//||(or) 연산자
//둘 중 하나만 true일 경우 true
console.log(true || true); //true
console.log(true || false); // true 
console.log(false || false); //false 

//연산자를 기준으로 가장 먼저 만나는 true값을 반환한다. 
console.log(false || true); //true
console.log(1 || 0); //true - 첫번째 만나는 1(true)을 반환하므로
console.log(false || 0 || {}); //{} - 빈 객체가 true 값이므로
console.log("" || 0 || NaN); //NaN - 모두 false일 경우 마지막 값을 반환하므로(아하)




//병합 연산자(nullish)
//||연산자와 비슷하다.
//null 또는 undefined는 제외하고 반환한다.
console.log(0 || 5); //5
console.log(0 ?? 5); //0
console.log(null ?? undefined); //undefined - 코드는 마지막 값을 읽고 반환하므로




//삼항 연산자(Ternary)
//조건 ? 참일 때 반환 : 거짓일 때 반환
console.log(1 < 2 ? '참' : '거짓'); //참
console.log(1 > 2 ? '참' : '거짓'); //거짓

//ex
function isCat(name) { //(name) = 매개변수
    return (
        //조건 ? 참 : 거짓 - 이렇게 쓰기
        name === '고양이' ? '고양이!' : '고양이아님!'
    )
};

console.log(isCat('고양이')); //고양이! //함수가 실행되는 실행문 //isCat('고양이') - 함수 호출문
console.log(isCat('개')); //고양이 아님! //함수가 실행되는 실행문




///전개 연산자(Spread)
//...을 사용하여 배열이나 객체를 펼칠 수 있다. 

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

//배열의 전개
console.log(num1.concat(num2)); // [1, 2, 3, 4, 5, 6]
console.log([...num1, ...num2]); // [1, 2, 3, 4, 5, 6]

//객체의 전개
const dog = {
    name: '멍멍이',
    phone: ' 010-8888-8888',
};

const dogInfo = {
    ...dog, //const dog 가져옴
    age: 2,
};

console.log(dogInfo); //age: 2, name: '멍멍이', phone: ' 010-8888-8888',(와우)

//함수의 전개
//...을 사용하여 파라미터(인수)를 전개할 수 있다.

//sum 함수 선언
function sum(a, b, c) {
    console.log(a + b + c);
};
//sum 함수 호출
sum(5, 6, 7);

//배열을 파라미터(인수)로 전달해주기
const num3 = [5, 6, 7];
const num4 = [8, 9, 10];

sum(num3[0], num3[1], num3[2]); //18
sum(num4[0], num4[1], num4[2]); //27

//항상 위처럼 호출해주긴 귀찮음
//전개 연산자를 사용하여 효율성을 높이자 - 전개 연산자로 인수 전달
sum(...num3); //18
sum(...num4); //27




