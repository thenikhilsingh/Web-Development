import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

app.get("/", (req, res) => {
  //   console.log(__dirname);
  //   console.log(__filename);
  //   console.log(import.meta.dirname);
  // console.log(import.meta.url);
  //   const filename = new URL(import.meta.url).pathname;
  //   console.log(filename);

  const homePagePath = path.join(import.meta.dirname, "public", "index.html");

  res.sendFile(homePagePath);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT 3000");
});
