const fs = require("fs");
const path = require("path");

const fileName = "fsAsyncn.txt";
const filePath = path.join(__dirname, fileName);
// *----------------------------------------Write File------------------------------------------------*
// fs.writeFile(filePath, "This is the initial data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been saved.");
// });
// *----------------------------------------Write File------------------------------------------------*

// *----------------------------------------Read File------------------------------------------------*
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) console.error(err);
//   else console.log(data);
// });
// *----------------------------------------Read File------------------------------------------------*

// *----------------------------------------Append File------------------------------------------------*
// fs.appendFile(filePath, "\nThis is the updated data", "utf-8", (err) => {
//   if (err) console.error(err);
//   else console.log("File has been updated.");
// });
// *----------------------------------------Append File------------------------------------------------*

// *----------------------------------------Delete File------------------------------------------------*
// fs.unlink(filePath, (err) => {
//   if (err) console.error(err);
//   else console.log("File has been deleted.");
// });
// *----------------------------------------Delete File------------------------------------------------*

// *----------------------------------------Rename File------------------------------------------------*
const newfileName = "updatedFsAsync.txt";
const newFilePath = path.join(__dirname, newfileName);
fs.rename(filePath, newFilePath, (err) => {
  if (err) console.error(err);
  else console.log("File has been renamed.");
});
// *----------------------------------------Rename File------------------------------------------------*
