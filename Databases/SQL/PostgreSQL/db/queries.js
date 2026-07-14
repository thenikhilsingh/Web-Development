const pool = require("./pool");

const getAllUsers = async () => {
  const response = await pool.query("SELECT * FROM users");
  return response.rows;
};

module.exports = { getAllUsers };
