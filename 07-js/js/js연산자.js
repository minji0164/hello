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
console.log(true || true);
console.log(true || false);
console.log(false || false);

