function Person(name, age) {
  this.name = name;
  this.age = age;
}

const people = new Person("지유", 22);
console.log(people);

// ==========================================
function Dog(breed) {
  this.breed = breed;
  this.bark = function() {
    console.log("Woof! 멍멍! I am a " + this.breed);
  };
}

const dog1 = new Dog("말티즈");
dog1.bark(); 
