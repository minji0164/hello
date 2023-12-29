// html 페이지를 로드한 후 실행
// 준비이벤트
// $(document).ready(function() {});
// 축소해서 쓸 수 있다
$(function(){
  // modal
  // 모달창 열기
  // .list-bbs li:first-child 클릭했을 때 
  $(".list-bbs li:first-child").on("click", function () {
    // 모달 열기
    // .dimmed가 보이게
    $("#modal").show();
  });
  // .modal .btn-close 클릭했을 때
  $("#modal .btn-close").on("click", function () {
    // 모달 닫기
    // dimmed가 숨겨지게
    $(".dimmed").hide();
  })

  // tabs
  // 기본셋팅
  // #tabs .sec-g에 있는 .active를 찾아서 삭제
  $("#tabs .sec-g").removeClass("active");
  // #tabs .sec-g:first-child에 active추가
  $("#tabs .sec-g:first-child").addClass("active");
  // .sec-tit를 클릭했을 때
  $("#tabs .sec-tit").on("click", function () {
    // 기존에 있던 .active 삭제
    $("#tabs .sec-g").removeClass("active");
    // this(액션을 취한 태그 #tabs .sec-tit)의 부모요소에게 active 추가
    $(this).parents().addClass("active");
  });
});