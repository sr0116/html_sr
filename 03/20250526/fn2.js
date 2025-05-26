function max (){ // a, b, c와 같은 인자가 필요없음
    console.log(arguments);
    var ret = 0;
    // arguments 객체 > 배열처럼 사용되는 객체 (유사배열)
    for(var i = 0 ; i < arguments.length ; i++) {
        if (ret < arguments[i]) {
            ret = arguments[i];
        }
    }
    return ret;
}
console.log(max(30, 40, 50, 10, 20 ,90)); // 여러개 가능

function test (a, b){
    console.log(a, 20);
}
test(); //선언은 되어있지만 값을 안 넣어서 정의되지 않았다고 뜸

var abs = function (a) {
    return a > 0 ? a : -a ;
};

abs = (a) => {
    return a > 0 ? a : -a;
}
//arrow function : 익명함수의 대체, es6(2015)
abs = a => a > 0 ? a : -a; //람다

// 배열 생성
var arr = [ 3,1,2,5,4];
arr.sort((a,b) => b - a);//내림차순 정렬
console.log(arr);
arr.forEach(a => console.log(`내부의 값은 ${a}`))
arr.filter (a => a % 2 == 1).map(a => "값은 " +  a).forEach(console.log);
arr.filter (a => a % 2 == 1).map(a => "값은 " +  a).forEach(a=> console.log(a));

// this (주소?)

//scope 범위(변수의 범위)
//전역변수(global variable), 지역변수 (local variable)