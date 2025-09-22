const express = require("express");
const app = express();
/**
 * GET /odin/messages will have this log
 * { username: "odin" }
 *
 * GET /theodinproject79687378/messages would instead log
 * { username: "theodinproject79687378" }
 */
app.get("/:username/messages", (req, res) => {
  console.log(req.params);
  res.end();
});

/**
 * GET /odin/messages/79687378 will have this loglo
 * { username: "odin", messageId: "79687378" }
 */
app.get("/:username/messages/:messageId", (req, res) => {
  console.log(req.params);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("the server is listening on port 3000");
});
