// map
const doubled = [1,2,3].map(v => v * 2);
console.log(doubled);

// filter
const evens =[1,2,3,4].filter(v => v % 2 === 0);
console.log(evens);

// find
const firstEven = [1,3,4,6].find(v => v % 2 === 0)
console.log(firstEven);

// reduce 내부요소들간의 연산 (prev는 이전 값, curr은 탐색하는 값 (for문의 i와 비슷) 뒤에 나오는 값은 기본값)
// const sum = [1,2,3,4].reduce((prev, curr) => prev + curr, 0)
const sum = [1,2,3,4].reduce(function(prev, curr) {return prev + curr}, 10)
console.log(sum);

// sum, every >> boolean
console.log([1,2,3].some(v => v % 2 === 0)); // 배열 요소 중 하나라도 짝수인지
console.log([1,2,3].every(v => v % 2 === 0)); // 배열 요소 모두가 짝수인지

// includes 포함되어있는가
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(4));

const users = [
    {name : '새똥이', age : 14},
    {name : '개똥이', age : 24},
    {name : '소똥이', age : 34},
];

// 20세 이상인 사람들의 이름만 추출
// map() = 타입변경
console.log(users.filter(a => a.age >= 20));
console.log(users.filter(a => a.age >= 20).map(v => v.name));
console.log(users.filter(a => a.age >= 20).map(v => v.name + v.age));


// 문제점 찾기 > foreach 는 반환을 안함
const arr = [1,2,3];
// const result = arr.foreach(v =>  v * 2);
// console.log(result);


//  이 배열을 가지고 짝수만 골라서 제곱으로 이루어진 배열을 반환
const numbers = [1,2,3,4,5,6,7];

console.log(numbers.filter(a => a % 2 == 0).map(v => v * v));


// cart에 들은 상품들의 총 합계 계산 reduce
const cart =[
    {item: "감자", qty: 3, price: 1000},
    {item: "고구마", qty: 2, price: 1500},
    {item: "감자", qty: 5, price: 500}
];

// cart.reduce(v => v.qty * v.price).reduce((prev,curr) => prev + curr);
console.log(cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0));

//  특정 조건의 첫 요소 찾기 (find)
const books = [ //첫번째 해당하는 요소
    {title : "JavaScript 기초", page : 120},
    {title : "ES6 완벽 가이드", page : 500},
    {title : "CSS 디자인", page : 200},
    {title : "HTML5", page : 400}
];
//  300페이지가 넘는 책의 이름을 조회
books.find(a=> a.page > 300).title;
console.log(books.find(a=> a.page >= 300).title);

// reduce 가장 고가의 상품 이름을 조회 >> 노트북
const products = [
    {name : "노트북", price : 1200000},
    {name : "키보드", price :15000000000},
    {name : "마우스", price : 50000},
    {name : "모니터", price :300000 }
]
// products.reduce((pre, cur) => {
//     return pre < cur.price ? cur : pre
// }, 0).name;
// const ret = cart.reduce((prev,curr) => prev + curr.qty * curr.price, 0)

// reduce 내부요소들간의 연산 (prev는 이전 값, curr은 탐색하는 값 (for문의 i와 비슷) 뒤에 나오는 값은 기본값)
// const sum = [1,2,3,4].reduce((prev, curr) => prev + curr, 0)
console.log(products.reduce((pre, cur) => pre.price > cur.price ? pre : cur).name);

    const bb = products.reduce((pre, cur) => pre.price > cur.price ? pre : cur);
console.log(bb.name);


for(let i = 0 ; i < 10 ; i++) {
}

const obj = {a:1, b:2};
for(let i in obj) {
    console.log(obj[i]);
}

const arr3 = [10, 20, 30];
for(let i of arr3) {
    console.log(i);
}
for(let i in arr3) {
    console.log(i, arr[i]);
}

const now = new Date();

console.log(now);
console.log(now.toString());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

// 1 음수 추출 후 배열 만들기
const nums = [1, -3, 5, -7, 2, -9]
// nums.find( a=> a.nums > 0);
// console.log(nums);
console.log(nums.filter(v => v < 0));
// filter(조건)-> 반환값 없음

// 짝수만 제곱 후 반환
const arr2 = [1, 2, 3, 4, 5, 6];
// 결과: [4, 16, 36]
arr2.filter(a => a % 2 == 0)
console.log(arr2.filter(a => a % 2 == 0).map(a => a * 2));

// 20세 이상만 이름을 배열로 반환
const users2 = [
  { name: "철수", age: 17 },
  { name: "영희", age: 21 },
  { name: "돌이", age: 15 },
  { name: "희동", age: 33 },
];
// users2.filter( u => u >= 20).name
console.log(users2.filter( u => u.age >= 20).map(a => a.name));

// 결과: ["영희", "희동"]
