// const tinderUser=new Object()
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Hitesh",
      lastname: "Chaudhary",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};
const obj4 = {
  5: "a",
  6: "b",
};

//const obj3= {obj1,obj2}//it does not merge the objects
// const obj3= Object.assign({},obj1,obj2,obj4)//this is the right way to merge objects
const onj3 = { ...obj1, ...obj2 }; //spread
// console.log(obj3);

const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 1, email: "h@gmail.com" },
  { id: 1, email: "h@gmail.com" },
];

// users.[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser)); //it is used to access keys of objects and it returns objects in form of array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn")); //it i sused to check the object has this property or not
