// const arr1 = [1, 2, 3];
// const arr2 = {a : 1, b : 2, c : 3};


// for(let i in arr1){
//     console.log(i);
// }

// for(let i of arr1){
//     console.log(i);
// }

// for(let i in arr2){
//     console.log(i);
// }

// for(let i of arr2){
//     console.log(i);
// } //객체 탐색 불가

// let sum = 0;
// arr1.forEach((v,i,arr) => {
//     sum += v;    

//     console.log(v,i,arr);
// })
// console.log(sum);
// filter + indexOf로 중복 제거
const nums = ["4", "2", "6", "2", "3", "4", "8", "6", "1"];
// nums.indexOf[2]
console.log(nums.indexOf("8"));

// nums.filter((v, i, arr) => arr[i] === v)
console.log(nums.filter((v, i, arr) => arr.indexOf(v) === i));
4, 2, 6, 3, 8, 1



        const users = [
            { name: "철수", age: 17 },
            { name: "영희", age: 22 },
            { name: "민수", age: 35 },
            { name: "지우", age: 15 },
        ];

       
        console.log(users.filter(u => u.age > 20));
        
        // 20세 이상인 유저만 <li>로 만들어 #userList에 출력하세요.
        // 출력 예: <li>영희 (22세)</li>, <li>민수 (35세)</li>
  