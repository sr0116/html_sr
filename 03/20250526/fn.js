//  선언 함수는 선언 전에 위로 끌어올릴 수 있는데 이걸 호이스팅(좋지는 않음)
console.log(max(3, 4));
// console.log(min(3,4)); 익명 함수는 위에 함수가 아니라는 오류가 생김
//  var 키워드는 변수이기 때문에 실제로는 var min;까지만 위로 올라오기 때문에 에러 발생
// 대신 가능한 것 (undefined) 속성만은 가져올 수 있음
console.log(min);
// function

// 1.선언적 함수
function max(a, b) { //선언할 때 이름이 먼저 옴
    return a > b ? a : b;
}

//  2. 익명 함수
var min = function (a, b) { // 함수하는 키워드 안에 이름이 없이 바로 선언됨
    return a < b ? a : b;
}

console.log(max(10, 5));
console.log(min(10, 5));

console.log(typeof max);
console.log(typeof min);

//선언적 함수로 두 수의 곱을 반환하는 함수를 정의 (함수명 :mul )
//익명 함수로 두수의 차이를 반환하는 함수를 정의 (함수명 : sub) (반드시 양수로 반환)

function mul(a, b) {
    return a * b;
}
console.log(mul(2, 5));

var sub = function (a, b) {
    return a > b ? a - b : b - a;
    //     if(a < b ){
    //         return b - a;
    //     }
    //     return a - b;
}
console.log(sub(2, 5));

var add = function (a, b) {
    if (!(typeof a === "number" && typeof b === "number")) return NaN;
    return a + b;
}
// type script
// var add2:Number = function(a:Number, b:Number) {
//현재 실행하면 터짐
// }

//hoist : var로 선언한 변수, 선언적 함수는 끌어올려짐
//var 로 선언한 변수는 중복 선언 가능
var num;
console.log(num);
var num = 10;
var num = 20;
console.log(num);

//  함수 내에서 선언한 변수 ? 지역변수
//  익명함수 === 함수 리터럴
//  10 
// "abcd"
// false
//  { } : object literal (객체리터럴)
//  function() { } : function literal
// [] : array literal
console.log("abcdef".substring(3, 5));
console.log([10, 20, 30][1]);
console.log({ a: 10, b: 20 }.a);
var obj = { a: 10, b: 20 };

//즉시 실행 함수 IIFE / 한 번만 사용하는 용도 return 필수는 아니고 필요할 때만
(function (a) { console.log('파라미터의 값 :' + a) })(30); // 30, '파라미터의 인자의 값'//

// javascript 에서 function은 type 이다.(자바에는 없음 메서드만(객체에 소속된 매체))

obj = {
    no: 1, name: "새똥이", score: 80, getScore: function () {
        return this.score;
    }
};

console.log(obj);
console.log(obj.score);
console.log(obj.getScore());

//  3개의 값중 최대값
function max2(a, b, c) {
    // if(a > b && a > c){
    //     return a;
    // }
    // else if( b > c){
    //     return b;
    // }
    // else{
    //     return c;
    // }

    if (a > b && a > c) {
        return a;
    }
    else {
        if (b > c) { // a가 최대값이 아닐 때   
            return b;
        }
        else {
            return c;
        }
    }
}
console.log(max2(2, 5, 1));

// function max(a, b) { //선언할 때 이름이 먼저 옴
//     return a > b ? a : b;
// }
function max3(a, b, c) {
    return max(max(a, b), c);
}
console.log(max3(13, 5, 22));

function max01(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    return b > c ? b : c;
}
console.log(max01(4, 8, 1));


function max4(a, b, c){
    console.log(arguments);
}
max4 (10, 20, 30);
