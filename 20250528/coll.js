const arr= [1,2,3,4];
const obj = {a:1, b: 2};
const map = new Map();
map.set("a",1);
map.set("b",1);

console.log(map);
console.log(map.get("a"));
console.log(map.has("a")); //자바의 맵으로 생각했을 때 containsKey
console.log(map.has("c")); //자바의 맵으로 생각했을 때 containsKey

const keys = map.keys(); // 반복할 수 있으ㅡㅁ
console.log(keys);

for(let i of keys) {
    console.log(i);
}
for(let i of keys) {
    console.log(i);
}


for (let i of map.values()) {
    
}
for (let i of map.entries()) { //모여서 맵이되는 것
    console.log(i); // 배열로 나옴
    console.log(i[0], i[1]); // 배열로 나옴
}
//Map의 내부 인터페이스 Entry


//자바에서는 interable 인터페이스로 배열, 리스트, Set
// for (let i of obj) {
//     console.log(i);
// } //터짐
