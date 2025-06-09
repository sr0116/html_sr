// 2번 데이터
var arr = [200, 100, 300];
//pass

const result = arr.splice(2, 0, 10000);
console.log(arr);

console.log(result);

// var arr2 = [200, 100, 300];
// arr2.splice(2, 0, 10000); 
// // splice() 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
// console.log(arr2);

// 출력
// [200, 100, 10000, 300]

//4번
var arr = [100, 200, 300];
console.log(typeof(arr));
// undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.

//5번
var a = 10;
var b = 2;

for(var i = 1; i < 5; i+=2){
    a += i;
    // 10 + 1+3 = 14 
}

console.log(a+b);


// # 문제6 : False

// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
//  JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가합니다.

// 1)  NaN
// 2)  1 true
// 3)  ""
// 4)  0
// 5)  undefined

// 문제9 : concat을 활용한 출력 방법
// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

// 데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result2 = year.concat('/' , month , '/', day, ' ', hour, ':', minute, ':', second ); // 컴마로 사용

console.log(result2);

// 출력
// 2019/04/26 11:34:27

// # 문제10 : 별 찍기

// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

// **은비를 위해 프로그램을 작성해 주세요.**
// const star2 = 
// console.log(star);

// # 문제11 : for를 이용한 기본 활용

// 1부터 100까지 모두 더하는 Code를 <pass> 부분에 완성하세요. `for`를 사용해야 합니다.

let s = 0;

//pass
for(i = 0; i <= 100; i++){
    if(i % 2 == 1){
    s += i;
    }
}

console.log(s);

// 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

// 데이터
// <여기에 class를 작성하세요.>
// const Wizard = class Wizard {
//     constructor (health, mana, armor){
//         this.health = health;
//         this.mana = mana;
//         this.armor = armor;
//     }
//     attack(){
//         console.log('파이어볼');
//     }
// }
// const x = new Wizard(545, 210, 10);
// console.log(x.health, x.mana, x.armor);
// x.attack();


// 출력
// 545 210 10
// 파이어볼

// 18번  영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

const subject = [20, 30, 40]

const avg = subject.reduce((acc, cur, i , { length})=> {
    return i === length -1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log();



// 입출력



// 입력 : 20 30 40
// 출력 : 30