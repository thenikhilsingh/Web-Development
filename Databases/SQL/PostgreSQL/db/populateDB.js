#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const client = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

const SQL = `
CREATE TABLE IF NOT EXISTS employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(255),
    salary INTEGER
);

INSERT INTO employees(name,email,salary)
VALUES
('Nikhil','nikhilsingh26042004@gmail.com',50000),
('Rahul','rahul@gmail.com',60000),
('Aman','aman@gmail.com',70000);
`;

async function main() {
  console.log("Seeding database...");

  await client.connect();

  await client.query(SQL);

  await client.end();

  console.log("Done!");
}

main();

//Whenever you run "node db/populateDB.js" Everything happens automatically.
// Database created (if needed)
// Tables created
// Sample data inserted
// This is called Database Seeding.
