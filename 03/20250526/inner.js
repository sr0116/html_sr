//  number, string, boolean
//  xunction , object, undefined


//함수를 반환하는 함수
function f (c){
    let l = 10;
    // function inner() { //함수 안에 함수 선언 가능
    //     return l + c // 10 + 10 =20
    // }

    //   let inner = function () { //함수 안에 함수 선언 가능
    //     return l + c // 10 + 10 =20
    // }
    // return inner; // 선언된 함수를 반환도 가능

    return function () {
        return l + c;
    }
}
const ret = f(10);
console.log(ret);
const result = ret();
console.log(result);

console.log(f(20)());// () -> 호출 가능해서 10의 값이라고 보면 됨
// 

function f3(c) {
    c(); // 선언
}
//후 사용
f3(function() {
    console.log("callback");
});

const arr = [3,41,5,4,2, 1];
arr.sort(function(a,b){
    return b - a; //내림차순
});
console.log(arr);


