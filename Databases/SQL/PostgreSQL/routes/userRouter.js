const Router = require("express");
const { createUser, getUsers } = require("../controllers/userController");

const userRouter = Router();

router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = userRouter;
