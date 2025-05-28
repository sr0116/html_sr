// 생성자 함수 
// new Student()
// Student 프로퍼티의 갯수
//  학번, 이름, 국어, 영어, 수학 , 총점, 평균
// 학생 100명 700개의 프로퍼티

// 프로토 타입을 통한 분리
// 학번, 이름, 국어, 영어, 수학 평균

 //학생 타입의 생성자 함수를 정의
        function Student (no,name, kor, eng, mat) {
            this.no = no;
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.mat = mat;
        }
        Student.prototype.total = this.total = function () {
            return this.kor + this.eng + this.mat;
        }
      Student.prototype.avg =     this.avg = function(){
            return this.total() / 3;
        }
        Student.prototype.test = 10;
        Student.test = 20;
        Student.fn = function(){
            return "하이"
        }
        // 프로토 차입 : 함수를 통해 생성된 객체의 공용 공간 
        const s = new Student(1,"새똥이", 80, 70, 100);
        console.log(s.total());
        console.log(s.avg());
        console.log(s.test);
        console.log(new Student().test);
        console.log(Student.test);
        console.log(Student.fn());

        const arr = [1,2,3,4];
        Array.prototype.size = function(){
            return this.length;
        }
        Object.prototype.fn = function(){
            return 10;
        }
        console.log({}.fn());
        console.log(arr.size());
        console.log("abcd".substring(1,2));
        console.log(new Number(1).toFixed());
        const num = 10;
        console.log(num.toFixed(2));
