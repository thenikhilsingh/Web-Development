// *--------------------------------------Write File----------------------------------------*

// const fs = require("fs");
// const path = require('path');

// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);
// console.log(__dirname);

// const writeFile = fs.writeFileSync(
//   filePath,
//   "This is the initial data",
//   "utf-8"
// ); //writeFIleSync file me write karta h par agr file na ho to file bnake write karta h
// console.log(writeFile);

// *--------------------------------------Write File----------------------------------------*

// *--------------------------------------Read File----------------------------------------*
// const fs = require("fs");
// const path = require("path");
// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);
// // const readFile = fs.readFileSync(filePath);
// // console.log(readFile.toString()); //readfile date buffer me dega to ushe convert karne ke liye string me toString method use kiya h

// //or

// //if you don't want to write toString again and again then :
// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile);
// *--------------------------------------Read File----------------------------------------*

// *--------------------------------------Append File----------------------------------------*
// const fs = require("fs");
// const path = require("path");
// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);
// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the updated data", //\n is used to starts with a new line
//   "utf-8"
// );
// console.log(appendFile);

// *--------------------------------------Append File----------------------------------------*

// *--------------------------------------Delete File----------------------------------------*
// const fs = require("fs");
// const path = require("path");
// const fileName = "test.txt";
// const filePath = path.join(__dirname, fileName);
// const fileDelete = fs.unlinkSync(filePath);
// console.log(fileDelete);

// *--------------------------------------Delete File----------------------------------------*
// *--------------------------------------Rename File----------------------------------------*
const fs = require("fs");
const path = require("path");
const fileName = "test.txt";
const newUpdatedFileName = "updateTest.txt";
const filePath = path.join(__dirname, fileName);
const newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFile = fs.renameSync(filePath, newFilePath);
console.log(renameFile);

// *--------------------------------------Rename File----------------------------------------*
