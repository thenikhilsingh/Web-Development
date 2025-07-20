// let obj = {
//   a: 1,
//   b: "Harry",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };
// rabbit.__proto__=animal;//sets rabbit.[[Prototype]] = animal

class Animal {
  constructor(name) {
    console.log("object is created");
    this.name = name;
  }
  eats() {
    console.log("kha rha hoon");
  }
  jumps() {
    console.log("kood rha hoon");
  }
}

class Lion extends Animal {
  //extends keyword gives the property of one class to another class
  constructor(name) {
    super(name); //super() is used to access constructor of extended class
    console.log("object is created and he is a lion...");
  }
  eats() {
    //Method Overiding
    super.eats(); //this line calls the parents class eats() function
    console.log("kha rha hoon roar");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);

console.log(l instanceof Lion); //instanceof tells is this object is made of this class or Notification.
console.log(l instanceof Animal);//it returns true as the lion  is made of Animal
console.log(a instanceof Lion);

