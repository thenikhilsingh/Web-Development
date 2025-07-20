let a = prompt("enter first number");
let b = prompt("enter second number");
if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry this is not allowed");
}
let sum = parseInt(a) + parseInt(b);
function name(params) {
  let x = 1;
  try {
    console.log("The sum is", sum * x);
    return true;
  } catch (error) {
    console.log("error aa gya bhai");
    return false;
  } finally {
    //it is used run console when return is in function
    console.log("files are being closed and db connection is being closed");
  }
}
let c = main();
// try {
//     console.log("The sum is", sum*x);
// } catch (error) {
//     alert(error.name)
//     alert(error.message)
//     alert(error.stack)
// }
