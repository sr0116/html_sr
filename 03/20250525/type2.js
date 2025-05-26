var o = {a:10};
o.c =20;
var arr =[];
arr.length =10;
console.log(o.c);
console.log(arr[5]);
console.log(arr);
console.log(arr[100]);
// console.log(num);

var obj = 2 && null;
if(obj){
    console.log('참인 경우 출력');
}
else{
    console.log('거짓인 경우 출력');
}

// 형 변환

var num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);
num = Boolean(num);
console.log(typeof num, num);

//number > boolean
// 0> false, 그외의 숫자는 true
// boolean > number
// true > 1, false > 0

// number > string
// strinf > number ex) "abcd" 에러 안남 > NaN(Not a number)
var str = "abcd";
str - Number(str);
console.log(typeof str, str);
var n = NaN;
console.log(NaN==NaN);
console.log(isNaN(str)); //이게 NaN인지 아닌지 불린 형태로 나타내줌
console.log(Number.MAX_VALUE);
console.log(0/0,3/0); //안터짐  무한 숫자
console.log(isFinite(3), isFinite(Number.POSITIVE_INFINITY));

n= null;
console.log(n, typeof n);

var fn = function(a,b) {
    return a+b;
}
var ret = fn(10,20);
console.log(ret);