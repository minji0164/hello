//---------------------------------------------------------------------2024.03.12
//DOM 탐색
document.querySelector(".wrap").style.border = "1px solid red";
document.querySelector("header").style.background = "red";
document.querySelector("header").style.height = "100px";

const parent = document.querySelector(".wrap"); //wrap 변수 설정
console.log(`children: ${parent.children}`); // 자식요소들 출력
console.log(`children: ${parent.childNodes}`); // 자식노드들 출력
console.log(parent.children);
console.log(parent.childNodes);
console.log(parent.firstChild); // #text //노드까지 잡힌다.
console.log(parent.firstElementChild); // div.header //Element를 넣어야 요소가 잡힌다.

document.getElementById("main").style.background = "#eee"; //아이디로 요소 찾기
document.getElementsByClassName("content-section")[0].style.background = "#aaa"; //클래스로 요소 찾기
document.querySelector(".content-section").style.border = "1px solid black"; //쿼리셀렉터로 클래스 잡기
// document.querySelectorAll(".content-section p").style.color = "1px solid red"; //쿼리셀렉터올은 잡히기는 하지만 스타일은 못 넣음
const secP = document.querySelectorAll(".content-section p"); //만약 스타일을 넣고 싶다면 foreach 사용
secP.forEach((p) => (p.style.border = "5px solid blue"));
//--------------------------------
// HTML 요소 변경
secP[0].textContent = "hello"; //textContent - 요소의 텍스트 변경
secP[1].innerHTML = "<strong>hello</strong>"; //innerHTML - 요소의 html 변경

const link = document.querySelector(".link");
link.setAttribute("href", "https://odada.me/268"); //요소의 속성 변경
link.textContent = "이동";
//--------------------------------
// HTML 요소 추가 및 제거
const newElement = document.createElement("div"); //요소 추가 구문 + 변수 설정
newElement.textContent = "새로운 요소";

document.querySelector(".sidebar").appendChild(newElement); //변수 삽입 + appendChild(뒤쪽에 넣는 메소드)
document.querySelector(".sidebar").lastElementChild.remove(newElement); //요소 지우기
document.querySelector(".sidebar ul").lastElementChild.remove(); //ul의 마지막 li 지우기
//--------------------------------
// DOM 이벤트
const btn = document.getElementById("btn"); //아이디 변수 설정
btn.addEventListener("click", () => {
  console.log("버튼이 클릭되었습니다.");
}); //이벤트
//---------------------------------------------------------------------
