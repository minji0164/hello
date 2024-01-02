// html 페이지를 로드한 후 실행
// 준비이벤트
// $(document).ready(function() {});
// 축소해서 쓸 수 있다
$(function() {
  // gnb
  // 변수 선언
  const $gnb = $('#gnb');
  const $gnbDepth1 = $gnb.find('.depth1 > li');

  // 마우스 오버했을 때
  // $("#gnb .depth1 > li")이었는데 위에서 변수를 선언해줬기 때문에 $gnbDepth1로 바꿔줌
  $gnbDepth1.on("mouseenter", function () {
    $(this).find(".depth2").slideDown(100);
    // 속성이 두가지 이상이면 () 안에 {} 넣어주기
    // 속성이 한 개면 ()만 써도 됨
    // ex)$(this).children("a").css('background-color': '#333')
    $(this).children("a").css({
      'background-color': '#333',
      color: '#fff',
    });
  });
  // 마우스가 떠났을 때
  $gnbDepth1.on("mouseleave", function () {
    $(this).find(".depth2").slideUp(100);
    $(this).children("a").css({
      // backgroudColor처럼 카멜표기법(스크립트언어표기법)으로 적으면 따옴표 안 넣어도 됨
      'background-color': '#fff',
      color: '#333',
    });
  });



  // modal
  const $modal = $('#modal');
  // 모달창 열기
  // .list-bbs li:first-child 클릭했을 때 
  $(".list-bbs li:first-child").on("click", function () {
    // 모달 열기
    // .dimmed가 보이게
    $modal.show();
  });
  // .modal .btn-close 클릭했을 때
  // $("#modal .btn-close")
  $modal.find(".btn-close").on("click", function () {
    // 모달 닫기
    // dimmed가 숨겨지게
    $modal.hide();
  });

  // tabs
  const $tabs = $('#tabs');
  // 기본셋팅
  // #tabs .sec-g에 있는 .active를 찾아서 삭제
  $tabs.find(".sec-g").removeClass("active");
  // #tabs .sec-g:first-child에 active추가
  $tabs.find(".sec-g:first-child").addClass("active");
  // .sec-tit를 클릭했을 때
  $tabs.find(".sec-tit").on("click", function () {
    // 기존에 있던 .active 삭제
    $tabs.find(".sec-g").removeClass("active");
    // this(액션을 취한 태그 #tabs .sec-tit)의 부모요소에게 active 추가
    $(this).parents().addClass("active");
  });

  // slide 
  let now = 0;
  const $slide = $('.list-slide');
  const slideCount = $('.list-slibe li').length;

  // 3초마다 슬라이드가 이동
  // setInterval(함수, 시간);
  setInterval(function () {

    // now가 1씩 증가하는 연산 만들기
    // now 재할당하기(3초씩 변해야하기 때문)
    // now = now + 1; 이렇게 하면 무한으로 늘어남
    // 나머지 연산자(%) 사용하기 
    now = (now + 1) % slideCount;

    // now(1) = now(0) + 1;
    // now(2) = now(1) + !; 까지가 -200%
    // now(0) = now(2) + !; 나머지 연산자 % 3으로 딱 맞게 떨어지게 해서 now를 0으로 만들기

    updateSlidePosition();
  }, 3000);

  function updateSlidePosition() {
    //.slide 자손 중에 .list-slide의 left 값이 이동
    $slide.css({
      left: 100 * now * -1 + '%',
      // 첫번째 0, 두번째 -100%, 세번째 -200%, 0
      // now 0, 1, 2, 0
    });
  }
});