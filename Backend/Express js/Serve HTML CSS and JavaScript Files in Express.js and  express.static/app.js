import express from "express";
import { PORT } from "./env.js";
import path from "path";
const app = express();

// absolute path
const staticPath = path.join(import.meta.dirname, "public");
app.use("/about", express.static(staticPath));

app.get("/", (req, res) => {
  res.send("It is the Home Page");
});

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
