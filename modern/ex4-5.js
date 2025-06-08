console.log(score); // undefined

var score;
score = 80;
score = 90;// 값의 재할당

console.log(score);

// let foo = x; -> 불가
let foo = x = 100;
x = 200;
foo = x;
console.log(x);
console.log(foo); // 둘다 한번에에 할당 해서 가능
console.log(x+foo);

 

