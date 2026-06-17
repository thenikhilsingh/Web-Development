const Router = require("express");
const upload = require("../middlewares/multerMiddleware");
const { uploadFile } = require("../controllers/fileController.js");

const fileRouter = Router();

fileRouter.post("/upload", upload.single("file"), uploadFile); //"file" wahi name hai jo frontend FormData me bhejoge.

module.exports = fileRouter;
