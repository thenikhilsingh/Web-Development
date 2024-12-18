/* Given 5 boxes, Assign a random color and a random background color to each box using DOM concepts */
let boxes = document.querySelector(".container").children;
function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);//Math.ceil() is used to round off numbers
  let val2 = Math.ceil(0 + Math.random() * 255);//Math.random() is used to generate random numbers
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1},${val2},${val3})`;
}
//converted boxes into array because we can't apply for loop on HTML collections
Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
});
