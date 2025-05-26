let  obj = {
    name : '홍길동',
    age : 20,
    printOut : function() {

    }
};
console.log(obj.name);

// //객체 관련 연산자
// //  겍체에 프로퍼티 추가
obj.tel = "010-1111-2222"
console.log(obj);

// // 객체의 프로퍼티 제거 연산자
delete obj.age;
console.log(obj);

// // 객체 내의 프로퍼티 확인 연산자
console.log("tel" in obj);
console.log("age" in obj);

// // spread operator(전개 연산)
// distribute operator(분해 연산)

const num = 10;
const obj1 = {"a":1,"b":2 ,'num':num ,"abc-def":10} // 문자열의 생략 {"a" : 1, "b" : 2 , "num":num}
// const obj2 = {} // {a : 1, b : 2 , c : 3}
const str = "가나다라";
const obj2 = {...obj1, c:3} // 전개 연산{a : 1, b : 2 , c : 3}
console.log(obj2);


console.log(obj1["a"]); // 연관 배열
console.log(obj1.a);
console.log(obj1["abc-def"]);

function fn (p1, p2,...a) {
    sum = p1 + p2;
    for(let i = 0; i < a.length ; i++) {
        sum += a[i];
    }
    return sum;
}
fn("값1", "값2", 10, 20, 30);

// Math.random();
// new Math(); 생성자 못만듦
