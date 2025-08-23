import express from "express";
import { PORT } from "./env.js";
import path from "path";

const app = express();

const staticPath = path.join(import.meta.dirname, "public");

app.use(express.static(staticPath));

app.use(express.urlencoded({ extended: true })); //this middleware is used to get the data from req.body

// app.get("/contact", (req, res) => {
//   console.log(req.query);
//   res.redirect("/");
// });

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res) => {
  // return res.status(404).send("<h1>Page not found!</h1>");
  return res
    .status(404)
    .sendFile(path.join(import.meta.dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
