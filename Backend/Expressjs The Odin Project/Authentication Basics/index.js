const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt"); //encryption or decryption
const jwt = require("jsonwebtoken");

app.use(cookieParser());

//----------------------------------Set Cookie----------------------------------//
//it sends token to browser
// app.get("/", (req, res) => {
//   res.cookie("name", "harsh");
//   res.send("cookie creation done!");
// });

// app.get("/read", (req, res) => {
//   console.log(req.cookies);

//   res.send("read page");
// });
//-------------------------------------------------------------------------------//

//----------------------------------Encryption----------------------------------//
//salt is a random string!
// app.get("/", (req, res) => {
//   bcrypt.genSalt(saltRounds, function (err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//       // Store hash in your password DB.
//     });
//   });
// });

// app.get("/", (req, res) => {
//   bcrypt.genSalt(10, function (err, salt) {
//     bcrypt.hash("PasswordHai", salt, function (err, hash) {
//       console.log(hash);
//     });
//   });
// });
//-----------------------------------------------------------------------------//

//----------------------------------Decryption----------------------------------//
// app.get("/", (req, res) => {
//   bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
//     // result == true
//   });
// });

// app.get("/", (req, res) => {
//   bcrypt.compare(
//     "PasswordHai",
//     "$2b$10$ThxEj2e50szORlPItwJuAOvJhVEZOZq.6MfI1MYfreBii5i0G2uDK",
//     function (err, result) {
//       console.log(result);
//     }
//   );
// });
//-----------------------------------------------------------------------------//

//---------------------------------------JWT------------------------------------//
//it is made of three components:- header,payload or data and verify signature
//encrypting and sending token to browser
app.get("/", (req, res) => {
  let token = jwt.sign({ email: "user@example.com" }, "secret"); //secret is the argument which should be hidden.on its basis the email is converted
  res.cookie("token", token);
  console.log(token);
});
//decrypting and reading the data
app.get("/read", (req, res) => {
  //   console.log(req.cookies.token);
  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data);
});
//-----------------------------------------------------------------------------//

app.listen(3000, () => {
  console.log("the server is listening on Port 3000");
});
