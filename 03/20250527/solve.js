// // 1번 답
// // undefined
// console.log(typeof num);
// // 2. var let const 선언, 할당
// //  var 재선언, 재할당
// // let 재할당
// // const 불가
// const ret = console.log(); //ret ? undefined
// //  "3" + "5 >>> 35"
// const hello = function(){
//     return "hi";
// }
// console.log(hello);

// // 7번
// const obj = {name : "ABCD", let : 1234};
// console.log(obj.let); //추천되지는 않음
// // 9 번 안 바뀜

// obj.c = 20; //가능
// // obj ={불가}
// // 10번 undefined



// ⑫ 생성자 함수와 객체 리터럴 방식의 차이를 설명하시오. (서술형),
// ---
// // 12번 생성자 함수 사전 정의 가능(내부적으로는 큰 차이가 없음)
// // 객체 리터럴

// 호출에서의 강제성 차이
 class Student extends Object {

 }
// ⑬ new 키워드를 빼먹고 생성자 함수를 호출하면 어떤 일이 발생할까?,
// function Cat(name) {
//   this.name = name;
// }
function Student(name) {
  this.name = name;
}
// Student.c; -> undefined

// const cat1 = Cat("야옹이");
// console.log(cat1.name); // ??


// ---

// ⑭ 다음 코드의 실행 결과는?,
// undefined
// var a = 1;

// function test() {
//   console.log(a);
//   var a = 2;
// }
// test();


// ---

// ⑮ 다음 중 참조에 의한 할당(같은 주소를 가리킴)은?,
// let a = {}; let b = a;  , 1번 
// let a = 1; let b = a;,
// const a = [1, 2]; const b = [1, 2];,
// let obj = {}; obj = null;,

let a = {}
let b = a;
// a.name = "길동"
console.log(b);
a = {name : "길동"}


let c = 1;
let d = c
c= 2;
// ---

// ⑯ 아래 코드는 실행될까? 안된다면 이유는?,
// greet();
// 안됨, 바 키워드에서 도 안됨

// const greet = function() {
//   console.log("Hello");
// };


// ---

// ⑰ 다음 중 '함수 표현식'에 해당하는 것을 모두 고르시오.,
// function test() {}, 2,3
// const test = function() {},
// let test = () => {},
// function = test() {},

// ---

// ⑱ 아래 코드에서 name을 출력하려면 어떤 접근법을 써야 할까?,
// const user = {
//   name: "영희",
//   age: 22
// };
// User.name


// ---

// ⑲ 아래 코드를 실행하면 무엇이 출력될까?,
// const a = {
//   value: 10
// };

// const b = a;
// b.value = 99;

// console.log(a.value);


// ---

// ⑳ 다음 중 올바른 생성자 함수 사용 예시는?,2번 3번도 가능하기 함
// function Dog(name) { this.name = name; } let d = Dog("초코");,
// function Dog(name) { this.name = name; } let d = new Dog("초코");,
// const Dog = function(name) { name: name }; let d = new Dog("초코");,
// let Dog = () => { this.name = "초코" }; let d = new Dog();,

// ---

// 필요하면 이 문제들로 시험지 스타일 PDF도 만들어줄 수 있고,
// 정답지, 해설지, 난이도별 태그, 실습버전으로도 바꿔줄 수 있어. 말만 해 😎
// 김태훈 — 어제 오후 6:18