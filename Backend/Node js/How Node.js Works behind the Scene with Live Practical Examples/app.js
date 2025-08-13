const fs = require("fs");

//Synchronous Task
console.log("Start");

//Synchronous Task
const data = fs.readFileSync("file.txt", "utf-8");
console.log("Sync", data);

//Asynchronous Task
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//Synchronous Task
console.log("End");