//  Number
// 문자열을 배열 처럼 다룸
const num1 = 10;
const num2 = new Number(20);

console.log(num1, num2);
console.log(num1 + num2);
console.log(typeof num1, typeof num2);

console.log(num1.toFixed(3));
console.log(num2.toFixed(2));

const str1 = "문자열";
const str2 = new String("문자열");
console.log(str1, str2);
console.log(str1 + str2);

console.log(str1.length);
for (let i = 0 ; i <str1.length; i++) {
    console.log(str1[i], str1.charAt(i));
}
 
console.log (str1.includes("a"));

const str3 = "abcd1234abcd";
console.log(str3.substring(3,5));
console.log(str3.substr(3,5));
console.log(str3.slice(3,5));

// str3.replace : 정규식 사용

const reg1 = new RegExp("[A-Z]");
const reg2 = /[A-Z]/; // regexp literal

console.log(reg1,reg2);

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4); // t생성자
console.log(/[A-Z]/.test("abcdABCD"));
console.log(/[A-Z]/.test("abcdA1234"));

console.log("abcdef".replace('a', "1"));
console.log("abcdefabcdefABCD".replace(/a/gi, "1"));

// String.join([]) java
// Array.sort([])
[].join();
[].sort();