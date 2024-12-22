console.log(a1);



async function sleep() {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}

// (async function main() {
//                                //IIFE
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b);
// })();

// (async function main() {
//   //Destructuring
//   // let x=1
//   // let y=5
//   //   let [x, y] = [1, 5,7];
//   //   console.log(x, y);
//   let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];//excluding 1 and 5 all other number will go in rest.
//   //let [x, y,rest] = [1, 5, 7, 8, 9, 10];//only 7 will lie in rest.
//   console.log(x, y, rest);
// })();

// function sum(a, b, c) {//Destructuring
//   return a + b + c;
// }
// (async function main() {
//   let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//   };
//   let { a, b } = obj;
//   console.log(a, b);
//   let arr = [1, 4, 6];
//   console.log(sum(arr[0], arr[1], arr[2]));
//   console.log(sum(...arr));
// })();
var a1 = 6;
const arr=[1,7,11]//Destructuring
const obj={...arr}//{0:1,1:7,2:11}
console.log(obj);

