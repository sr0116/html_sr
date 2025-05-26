// this : 미래에 생성될 객체의 주소값
// 규칙성 있는 필드

function Student (no, name = "소똥이", score = 100){
    this.no = no;
    // this.no = no || 1; null이면 1
    this.name = name;
    this.score = score;
}

const student = new Student(1, "새똥이" , 90);
console.log(student);
console.log(student.name);

const students = [];
students.push(student);
students.push(new Student(2, "개똥이", 80));
students.push(new Student(3));
// students.push(new Student( no ,undefined, 100)); // 소똥이 들어감 (대체값)
students.push(new Student( undefined, null, 100)); // 소똥이 들어감 (대체값)
// undefined일때만 적용, null은 null  로 들어감

console.log(students)
