const { Router } = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUserById);

userRouter.post("/", createUser);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
