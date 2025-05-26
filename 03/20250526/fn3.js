//scope 범위(변수의 범위)
//전역변수(global variable), 지역변수 (local variable)

// var num = 10;
str01 = "새똥이";
function f () {
    // console.log(num); //함수 내에서도 호이스팅을 함 , 이미 20이 있어서 미정의 값을 보여줌
    num = 20; // 할당 시점에  var 키워드가 없으면 전역 위치에 선언
    // 지역의 위치에서 var, let 이 없이 선언이 가능. 키워드 생략시 전역의 위치에 선언
    console.log(num);
}
f();//가장 가까운
console.log(num);
console.log(str01);
var num = 30;
console.log(num); // 값이 변하는 것을 문법적으로 막을 수가 없었음

// es5 이전까지는 이 현상을 막을 방법이 없음
// var 키워드, 선언적 함수 hoisting 의 대상, 함수 레벨  scope

(function(){
for (var i = 0 ; i < 10 ; i ++) {
} console.log(i);

//i 접근 가능
})();
// console.log(i); // 접근 불가
if(true) {
    test = 10;
    // let test = 10;
    //let 키워드는 블록레벨 스코프로 만들어서 문법적으로 엄격하게 만듦.
    // 변수의 중복 선언도 방지
}
console.log(test);
// i값은?
//지역 안에서 함부로 변수 설정 하지 말아야 함 var ,let

var str = "abcd";
var str = "가나다라";

// 변수 중복 방지

let str = "abcd"; // 위에것 덮어 쓰기 해서 오류 안남
let str2 = "abcd";


