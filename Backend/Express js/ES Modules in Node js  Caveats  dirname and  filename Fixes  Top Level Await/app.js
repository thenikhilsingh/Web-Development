import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// In newer versions of Node.js (14.8+), you can use top-level await without
// needing to wrap it in an async function.

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const json = await response.json();
console.log(json);

// console.log(__dirname);
// console.log(__filename);
console.log(import.meta.dirname);
console.log(import.meta.filename);

const staticPath = path.join(import.meta.dirname, "public");
app.use(express.static(staticPath));

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
