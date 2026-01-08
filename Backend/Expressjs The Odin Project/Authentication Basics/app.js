const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
const userModel = require("./models/userSchema");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

//signup user
app.post("/create", (req, res) => {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });
      //login user token generated
      //   let token = jwt.sign({ email }, "secretkey");
      //   res.cookie("token", token);

      res.send(createdUser);
    });
  });
});

//Login User
app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  let user = await userModel.findOne({ email: req.body.email }); //if user exist it returns user but if not it returns null
  if (!user) return res.send("something went wrong");

  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (result) {
      //login user token generated
      let token = jwt.sign({ email: user.email }, "secretkey");
      res.cookie("token", token);
      res.send("Yes You can login");
    } else res.send("No You can't login");
  });
});

//logout user
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("the server is listening on Port 3000");
});
