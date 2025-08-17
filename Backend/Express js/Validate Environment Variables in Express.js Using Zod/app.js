import express from "express";
import { PORT } from "./env.js";
const app = express();

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));
app.get("/about", (req, res) => res.send("<h1>Hello About Page!</h1>"));
app.get("/contact", (req, res) => {
  return res.send(`
    <h1>Contact Us</h1>
    <form action="/contact" method="post">
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name" required><br><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email" required><br><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" rows="4" required></textarea><br><br>
      <button type="submit">Send</button>
    </form>
  `);
});

// const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});
