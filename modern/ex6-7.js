let foo;
console.log(typeof foo); //undefinded

foo = 3;
console.log(typeof foo);

foo = 'hello'
console.log(typeof foo);

foo = true;
console.log(typeof foo);

foo = null;
console.log(typeof foo);

foo = Symbol();
console.log(typeof foo);

foo = {};
console.log(typeof foo);

foo = [];
console.log(typeof foo);

foo = function () {
};
console.log(typeof foo);

let x = 10;
console.log(x);
console.log(-x);
console.log(-x);

console.log(typeof true);
console.log(typeof false);

let y= true;
console.log(+y); // 1 숫자 타입 반환
console.log(-y); // -1 숫자 타입 반환 
console.log(y); // 1 숫자 타입 반환  true

const score = 10;
const result = score >= 60 ? 'pass' : 'false';
console.log(result);

let string = 'Hello';
let search = 'l';
let count = 0;

for(let i = 0; i < string.length; i++) {
    if(string[i] !== search){ 
        count++  
        console.log(count);    // 3에서 끝
        
    }
}





