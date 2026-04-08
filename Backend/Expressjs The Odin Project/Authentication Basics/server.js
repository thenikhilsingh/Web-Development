require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/auth-router");
const connectDB = require("./utils/db");

app.use(express.json());
app.use("/api/auth", router);

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});
