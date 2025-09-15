import mongoose from "mongoose";

// Step 1: To connect to the MongoDB Server
try {
  await mongoose.connect("mongodb://localhost:27017/mongoose_database");
  mongoose.set("debug", true);
} catch (error) {
  console.log(error);
  process.exit();
}

//Step 2: Create Schema
const userSchema = mongoose.Schema({
  //   name: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 5 },
  creadedAt: { type: Date, default: Date.now() },
});

//Step 3: Creating a Model
const Users = mongoose.model("user", userSchema);

await Users.create({
  name: "Nikhil",
  age: 24,
  email: "nikhilsingh26042004@gmail.com",
});

await mongoose.connection.close();
