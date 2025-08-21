import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

const staticPath = path.join(import.meta.dirname, "public");
app.use("/about", express.static(staticPath));

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>User searched for Product ${req.query.search} Page</h1>`);
});

app.get("/pages", (req, res) => {
  console.log(req.query);
  res.send(
    `<h1>User searched for Page number ${req.query.page} and limit ${req.query.limit}</h1>`
  );
});

//http://localhost:3000/pages?page=30&limit=410

app.get("/", (req, res) => {
  res.send("It is the Home Page");
});

app.get("/profile/:username", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My username is ${req.params.username}</h1>`);
});

app.get("/profile/:username/article/:slug", (req, res) => {
  console.log(req.params);
  const formatedSlug = req.params.slug.replace(/-/g, " ");
  res.send(`<h1>Article ${req.params.username} by ${formatedSlug} </h1>`);
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
