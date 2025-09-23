// app.js
const express = require("express");
const app = express();
const path = require("path");

// express.static() is a middleware function that enables the use of static assets, and we tell it to look for assets with the public directory as the root.
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//ejs setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

const aboutData = [
  { Rose: "Rose is a Web Developer" },
  { Cake: "Cake is a App Developer" },
  { Biff: "Biff is a Data Anaylist" },
];

app.get("/", (req, res) => {
  res.render("index", { message: "EJS rocks!", links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links, aboutData: aboutData });
});

app.listen(3000, () => {
  console.log("the server is listening on PORT 3000");
});
