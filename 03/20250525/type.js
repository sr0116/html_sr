// Js 데이터 타입
// 숫자, 문자열, 논리 >> 기본자료형
//  객체, 함수, underfined .. 심볼(Symbol)
var num = 20;
num = true;
console.log(typeof num);
num = 20;
console.log(typeof num);
var obj ={a:10, b:20};
var arr = [3,2,1,true,"가나다라"];
var fn = function(){};
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);
//
console.log(obj.a);
console.log(arr[4]);

//  ` 백틱 사용하기 (참조호출)
var str = `여기는 ${obj.b} 문자열${10} ${obj}` + "\nhello" +20;
console.log(str);