//singleton
//Object Literals
const mySym = Symbol("key1");
const jsuser = {
  name: "Hitesh",
  "full name": "Hitesh Chaudhary",
  [mySym]: "mykey1",
  age: 18,
  location: "jaipur",
  email: "abc@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "Saturday"],
};

console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "hriday@gmail.com"; //changing values of object
// Object.freeze(jsuser)//freeze is used to lock the object so that no one can do changes in it

jsuser.greeting = function () {
  console.log("Hello jsUser");
};
console.log(jsuser.greeting());

jsuser.greetingTwo = function () {
  console.log(`Hello jsUser,${this.name}`);
};
console.log(jsuser.greetingTwo());
