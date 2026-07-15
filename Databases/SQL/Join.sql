-- CREATE TABLE messages (id SERIAL PRIMARY KEY,message VARCHAR(255),sender_id INT);
-- INSERT INTO messages (message,sender_id) VALUES ('Hello Everyone',2),('Hii Guys',1),('Good Morning',3);
-- SELECT * FROM users JOIN messages ON users.id = messages.sender_id;
-- SELECT users.name, messages.message FROM users JOIN messages ON users.id = messages.sender_id;
-- CREATE TABLE orders (id SERIAL PRIMARY KEY,product VARCHAR(100), customer_id INT);
-- INSERT INTO orders(product, customer_id) VALUES ('Laptop',1),('Mouse',1),('Phone',2),('Keyboard',2),('Monitor',2);
-- SELECT COUNT(*) FROM orders;
-- SELECT customer_id, COUNT(*) AS total_orders FROM orders GROUP BY customer_id;
-- SELECT COUNT(*) FROM users;
-- SELECT COUNT(*) FROM messages;
-- SELECT sender_id, COUNT(*) AS total_messages FROM messages GROUP BY sender_id;
-- SELECT users.name,COUNT(messages.id) AS total_messages FROM users JOIN messages ON users.id = messages.sender_id GROUP BY users.id,users.name;
-- SELECT sender_id,COUNT(*) AS total_messages FROM messages GROUP BY sender_id;
-- SELECT sender_id,COUNT(*) AS total_messages FROM messages GROUP BY sender_id HAVING COUNT(*) >= 2;
-- SELECT sender_id,COUNT(*) AS total_messages FROM messages WHERE sender_id > 1 GROUP BY sender_id HAVING COUNT(*) >= 2;
-- CREATE TABLE products(id SERIAL PRIMARY KEY,product VARCHAR(100),price INT);
-- INSERT INTO products(product,price) VALUES ('Laptop',60000),('Mouse',800),('Keyboard',1500);
-- SELECT SUM(price) FROM products;
-- SELECT AVG(price) FROM products;
-- SELECT MAX(price) FROM products;
-- SELECT MIN(price) FROM products;
-- SELECT users.name,COUNT(*) AS total_orders FROM users JOIN orders ON users.id = orders.customer_id GROUP BY users.id,users.name  HAVING COUNT(*)>=2;
-- SELECT * FROM products WHERE price>10000 ORDER BY price DESC;
-- SELECT * FROM products ORDER BY price DESC LIMIT 2;
-- SELECT DISTINCT name FROM users;
-- SELECT * FROM users WHERE name LIKE 'Rah%';
-- SELECT * FROM users WHERE name LIKE '%Singh';
-- SELECT * FROM users WHERE name LIKE '%man%';
-- SELECT * FROM users WHERE id IN (1,3,5);
-- SELECT * FROM users WHERE name IN ('Rahul','Aman');
-- SELECT * FROM products WHERE price BETWEEN 1000 AND 20000;
-- SELECT users.name,messages.message FROM users LEFT JOIN messages ON users.id=messages.sender_id;
-- SELECT users.name,orders.product FROM users RIGHT JOIN orders ON users.id = orders.customer_id;
-- SELECT users.name,orders.product FROM users FULL OUTER JOIN orders ON users.id = orders.customer_id;
-- CREATE INDEX idx_users_email ON users(email);
-- EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'aman@gmail.com';




