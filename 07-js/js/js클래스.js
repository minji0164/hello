//---------------------------------------------------------------------2024.03.07
// [class 함수]
//--------------------------------
// 생성자 함수(앞에 new 붙이기, 대문자로 시작하는 함수명 작성하기)

// const animals = ['dog', 'cat', 'bird'] //일반 배열 구문
const animals = new Array("dog", "cat", "bird"); //생성자 함수 사용시
console.log(animals);
console.log(animals.length); //갯수 출력
console.log(animals[1]); //cat 출력
//--------------------------------
//prototype

const americano = {
  name: "아메리카노",
  price: 2000,
  front: function () {
    return `${this.name}는 ${this.price}원입니다.`;
  },
};
console.log(americano.front()); //front는 함수니까 () 넣기(까먹지마~)

const latte = {
  name: "카페라떼",
  price: 3000,
  // front: function () {
  //   return `${this.name}는 ${this.price}원입니다.`;
  // }, //함수 반복으로 비효율적
};
console.log(americano.front.call(latte)); //call을 붙여서 아메리카노의 프론트 함수 불러온 후 괄호 안에 라떼 넣기(이또한 비효율적)
//결론: "아예 총괄적으로 관리 가능 메서드를 만들어버리자"
//--------------------------------
