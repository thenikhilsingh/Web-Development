const pool = require("./pool");

const getAllUsers = async () => {
  const response = await pool.query("SELECT * FROM users");
  return response.rows;
};

const getUsersByEmailPwd = async (email, password) => {
  const response = await pool.query(
    "SELECT * FROM users WHERE email=$1 AND password=$2",
    [email, password],
  );
  return response.rows[0];
};

const getUserByID = async (id) => {
  const response = await pool.query("SELECT * FROM users WHERE id=$1", [id]);
  return response.rows[0];
};

const insertUser = async (name, email) => {
  const response = await pool.query(
    "INSERT INTO users(name,email) VALUES($1,$2) RETURNING *",
    [name, email],
  );
  return response.rows[0];
};

const updateUser = async (id, name, email) => {
  const response = await pool.query(
    "UPDATE users SET email=$3, name=$2 WHERE id=$1 RETURNING *",
    [id, name, email],
  );
  response.rows[0];
};

const deleteUser = async (id) => {
  const response = await pool.query("DELETE FROM users WHERE id=$1", [id]);
  return response.rows[0];
};

const searchUsers = async (search) => {
  const result = await pool.query(
    `SELECT *
     FROM users
     WHERE name ILIKE $1`,
    [`%${search}%`],
  );

  return result.rows;
};

module.exports = {
  getAllUsers,
  getUsersByEmailPwd,
  getUserByID,
  insertUser,
  updateUser,
  deleteUser,
  searchUsers,
};
