const db = require("../db/queries");

const getUsers = async (req, res) => {
  try {
    const { search } = req.query;

    const users = search
      ? await db.searchUsers(search)
      : await db.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await db.insertUser(name, email);
    return res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "internel server error" });
  }
};

module.exports = {
  getUsers,
  createUser,
};
