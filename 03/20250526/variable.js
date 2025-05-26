//  let str
console.log(typeof str);// 선언이 안된 상태에서는 가능
// console.log(str);// 불가


const num = 10;
// num = 20;
console.log(num);

const obj = { a: 10, b : 20};
obj.c = 30;
console.log(obj);

const students = [];
const student1 = {no : 1, name : "새똥이", score : 80};
const student2 = {no : 2, name : "개똥이", score : 70};
const student3 = {no : 3, name : "소똥이", score : 90};
students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);
students.splice(0, 1);// 1번 인덱스에서부터 1개 삭제

console.log(students);

// student1 = {}; // 또다른 객체로 만드는 것은 불가
// obj = {}; // 같은 이유로 불가
obj.c =10; // 값 변경은 가능

{
    const v = 10;
    console.log(v);
}

{
    const v = 20;
    console.log(v);
}