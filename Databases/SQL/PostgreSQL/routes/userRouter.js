const { Router } = require("express");
const { createUser, getUsers } = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", createUser);

module.exports = userRouter;
