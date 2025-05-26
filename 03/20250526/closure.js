function add () {
    let n = 0;
    return function () {
       return  ++n;
    }
}
// 함수상태라서 지역 변수 n이 안끝남
// closure : 함수 호출 완료 후에도 지역 변수가 잔존하는 현상
// 최소 선행 조건 : 함수를 리턴

const increase = add(); //increase의 type ? function
console.log(increase());
console.log(increase());
console.log(increase());

const increase2 = add();
console.log(increase2());
console.log(increase());
console.log(increase());
console.log(increase2());