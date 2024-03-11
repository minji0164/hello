//---------------------------------------------------------------------2024.03.11
//날짜(date)
console.log(new Date());
console.log(new Date().getFullYear());
console.log(new Date().getMonth()); //제로베이스넘버라 3월달이 2로 출력됨
console.log(new Date().getDate());
console.log(new Date().getDay()); //마찬가지로 일요일부터 0

//시간
console.log(new Date().getHours()); //시간
console.log(new Date().getMinutes()); //분
console.log(new Date().getSeconds()); //초
console.log(new Date().getMilliseconds()); //밀리초

const now = new Date();
console.log(now.getTime());
//---------------------------------------------------------------------
