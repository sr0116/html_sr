let arr = [10, 20, 30, 40, 50, 60, 70];
console.log(arr.length);
console.log(arr[1]);
console.log(arr.slice(2, 4));
console.log(arr.join("-"));
console.log(arr.concat(["가","나","다"]));

//  배열의 값 추가

arr.push(1);
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.splice(1, 0, 10)
console.log(arr);//[30, 10, 40, 50];

arr.splice(2, 1); //[ 30, 10, 50 ]

console.log(arr);

arr.splice(0,1,20,30,40); //[ 20, 10, 50 ]
console.log(arr);

arr.reverse();

console.log(arr);
arr.sort( (a,b) => b - a);
console.log(arr);

//forEach, map, filter, find, some, every, reverse, includes, findIndex
//반환 안하는 함수
arr.forEach(function(a, b, c) {
    // console.log(a, b, c);
    // console.log(a, c[b]);
    console.log(a);
})
//에로우
arr.forEach ( a=> console.log(a))
arr.forEach (console.log) // 파라미터와 같으면 생략 가능, 콘솔로그의 타입 함수
// 사용할 수 있는 인자를 전부 다 써준다