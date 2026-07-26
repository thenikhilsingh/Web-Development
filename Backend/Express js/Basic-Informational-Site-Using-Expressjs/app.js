const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});
app.get("/about", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  res.sendFile(filePath);
});
app.get("/contact-me", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  res.sendFile(filePath);
});
app.use((req, res) => {
  const filePath = path.join(__dirname, "404.html");
  res.status(404).sendFile(filePath);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    console.error("Server Error");
  }
  console.log(`The Server is listening on http://localhost:${PORT}/`);
});
