const express = require("express");
const dotenv = require("dotenv");
const fileRouter = require("./routes/fileRouter");
dotenv.config();

const app = express();


app.use(express.json());
app.use("/api/files", fileRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`the server is listening on http://localhost:${PORT}/`);
});
