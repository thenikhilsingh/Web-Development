const db = require("../db/queries");

const getUsers = async (req, res) => {
  try {
    const users = await db.getAllUsers();
    return res.status(200).json({ message: "user fetched successfully", user });
  } catch (error) {
    res.status(500).json({ message: "internel server error" });
  }
};

module.exports = {
  getUsers,
};
