console.log("Harry is a hacker");
console.log("Rohan is a hacker");

setTimeout(() => {
  //Asynchronous action
  console.log("I am inside setTimeout");
}, 2000);

setTimeout(() => {
  //Asynchronous action
  console.log("I am inside setTimeout 2");
}, 2000);

console.log("The End");

const fn = () => {
  console.log("Nothing");
};

const callback = (arg, fn) => {
  console.log(arg);
  fn();
};
const loadscript = (src, callback) => {
  //callback function
  let sc = document.createElement("script");
  sc.src = "src";
  sc.onload = callback("Harry", fn);
  document.head.append(sc);
};
loadscript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

/*const loadscript = (src, callback) => {    
let sc = document.createElement("script");
sc.src = "src";
sc.onload = callback("Harry");
document.head.append(sc);
};

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",(arg, fn) => {                        //Pyramid of Doom or Callback Hell
    console.log(arg);
    fn("firstarg", () => {
      ddg("secondarg", (params) => {});
    });
  }
);*/
