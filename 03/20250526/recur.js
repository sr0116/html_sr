function factorial (n) {
    let result =1;
    if(n == 0) {
        return result;
    }
    else {
        return  result = n * factorial (n - 1);
   }
}

console.log(factorial(5));

// file:///C:/Users/tj/workspace.html/03/20250525/ex3-2.html
// C:\Users\tj\workspace.html\03\20250526
// -- url
//   프로토콜 :// 도메인 : 포트/경로/파일 ? 쿼리스트링 #앵커
// http://localhost:5500/03/20250526/test.html?color=#002345&name=새똥이
// http://localhost:5500/03/20250526/test.html?color=%23002345

// let url ='http://localhost:5500/03/20250526/test.html?color=#002345&name=새똥이';
// console.log(url);
// console.log(encodeURI(url));
// console.log(encodeURIComponenteURI(url));

// console.log(decodeURIComponent(encodeURIComponent(url)));


//  반복문 무한루프
// 재귀 호출 스택오버플로

// parseInt (문자열) : 숫자 >> 정수만
// parsefloat (문자열) : 숫자 >>실수포함

let str = "abcd123.456가나다";// NaN
let str2 = "123.456가나다";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(parseInt(str2));
console.log(parseFloat(str2));


str = "ff";
console.log(parseInt(str, 16));

eval("console.log(10)"); //사용하지 않아야 함

let s = String.fromCharCode(65, 66);
console.log(s);

console.log(s.charCodeAt(1)); // 1번 인덱스