// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// Why .then() and .catch()?
// .then() ensures clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling, making it easy to debug and manage failures.

// *----------------------------------Finding all files in a folder---------------------------------------*
// const filePath2 = __dirname;
// fs.promises
//   .readdir(filePath2)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));
// *----------------------------------Finding all files in a folder---------------------------------------*

// *---------------------------------------------Write file-----------------------------------------------*
// fs.promises
//   .writeFile(filePath, "This is the initial data.", "utf-8")
//   .then(console.log("file created succesfullly"))
//   .catch((err) => console.error(err));
fs.writeFile(filePath, "This is the initial data.", "utf-8")
  .then(console.log("file created succesfullly"))
  .catch((err) => console.error(err));

// *---------------------------------------------Write file-----------------------------------------------*

// *----------------------------------------------Read file-----------------------------------------------*
// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// *----------------------------------------------Read file-----------------------------------------------*

// *--------------------------------------------Append file-----------------------------------------------*
// fs.promises
//   .appendFile(filePath, "\nThe file has been updated.", "utf-8")
//   .then(console.log("file updated successfully"))
//   .catch((err) => console.error(err));
// *--------------------------------------------Append file-----------------------------------------------*

// *--------------------------------------------Delete file-----------------------------------------------*
// fs.promises
//   .unlink(filePath)
//   .then(console.log("The file has been deleted"))
//   .catch((err) => console.log(err));
// *--------------------------------------------Delete file-----------------------------------------------*

// *--------------------------------------------Rename file-----------------------------------------------*
// const newfileName = "updatedfsPromises.txt";
// const newfilePath = path.join(__dirname, newfileName);
// fs.promises
//   .rename(filePath, newfilePath)
//   .then(console.log("The file has been renamed"))
//   .catch((err) => console.log(err));
// *--------------------------------------------Rename file-----------------------------------------------*
