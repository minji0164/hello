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

//메소드 재활용 방법
//1. 메소드 중복 사용
const americano = {
  name: "아메리카노",
  price: 2000,
  front: function () {
    return `${this.name}는 ${this.price}원입니다.`;
  },
};
console.log(americano.front()); //front는 함수니까 () 넣기(까먹지마~)

//2. call을 이용한 메소드 재활용
const latte = {
  name: "카페라떼",
  price: 3000,
  // front: function () {
  //   return `${this.name}는 ${this.price}원입니다.`;
  // }, //함수 반복으로 비효율적
};
console.log(americano.front.call(latte)); //call을 붙여서 아메리카노의 프론트 함수 불러온 후 괄호 안에 라떼 넣기(비효율적)
//--------------------------------2024.03.08
//3. prototype을 이용한 메소드 재활용
function Front(name, price) {
  this.name = name; // ex)this.name = 아메리카노
  this.price = price;
} //생성자함수명 지정 후 속성(name, price)을 매개변수로 받기

//메소드 생성하기
Front.prototype.calling = function () {
  return `${this.name}는 ${this.price}원입니다.`;
};

//생성자함수 객체 생성하기
const americano2 = new Front("아메리카노", 2000);
const latte2 = new Front("카페라떼", 3000);

console.log(americano2);
console.log(americano2.calling());
console.log(latte2);
console.log(latte2.calling());
//--------------------------------
//위의 3가지의 상위호환인 class 함수 사용해보기
class Front2 {
  //constructor는 생성자함수의 '역할'을 대신함(속성을 받는 단계) Front2가 생성자함수명
  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }

  //축약된 calling 메소드 생성(생성 단계)
  calling() {
    return `${this.name}는 ${this.price}원입니다.`;
  }
  //메소드는 여러개 만들 수 있다(ex. 주문 메소드)
  order() {
    return `${this.name}, ${
      this.size
    }사이즈 주문 들어왔습니다. ${this.getPrice()}`;
  }
  //(ex. 사이즈별 가격 추가 메소드)
  getPrice() {
    if (this.size === "large") {
      return this.price + 500;
    } else if (this.size === "small") {
      return this.price - 500;
    } else {
      return this.price;
    }
  } //if(조건:){실행문}
}

//생성자 함수의 객체를 생성
const americano3 = new Front2("아메리카노", 2000, "large");
const latte3 = new Front2("카페라떼", 3000, "tall");
const greentea = new Front2("녹차", 2000, "small");

console.log(americano3.calling()); // 아메리카노는 2000원 입니다.
console.log(latte3.calling()); // 카페라떼는 3000원 입니다.
console.log(greentea.calling()); // 녹차는 2000원 입니다.
console.log(americano3.order());
console.log(latte3.order());
console.log(greentea.order());
//--------------------------------
//class 상속 사용(extends)
class Special extends Front2 {
  specialCoffee() {
    return `오늘의 메뉴: ${this.name}는 ${this.getPrice()}원입니다.`;
  }
} //extends로 상속 받아준 후 이벤트성 메서드를 생성해줌

const milktea = new Special("밀크티", 4500, "large");
console.log(milktea.specialCoffee());
//---------------------------------------------------------------------
