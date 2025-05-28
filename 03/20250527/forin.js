const str = "f";
const obj = {a:10, b: 20 , c:30};
obj.d = 40; //원래는  맵이나 리스트를 통한 접근
 obj["e"] = 50;
 obj[str] = 60;

console.log(obj.toString());

for(let i in obj) {
    console.log(i, obj[i]);
}

// 연관배열
// obj["d"]

class Addr {
    #no

     constructor(no, name,desc){

         this.#no = no;
         this.name = name;
         this.desc = desc;
     }
     print(){
         console.log(this.no, this.name, this.desc);
         return "반환 테스트" // 프로토 타입으로 포함// 슈가 문법
     }
     //get , set
     get no () {
        return this.#no;
     }
     set no (no) {
        this.#no = no;
     }
}

const addr =new Addr(1, "새똥이", "부천시");
  console.log(addr);
  console.log(addr.print());
  addr.no = 10;
  console.log(addr.no);

  console.log(addr);
  //   Addr(2, "개똥이", "구로구");

  function Card (kind, number) {
    let k = kind;
    this.getKind = function() {
        return this.k;
    }
    this.setKind = function(kind) {
        this.k = kind;
    }
  }
  for (let i in addr) {
    console.log(i);
  }