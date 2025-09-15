import mongoose from "mongoose";

try {
  await mongoose.connect("mongodb://localhost:27017/mongoose_database");
  mongoose.set("debug", true);
} catch (error) {
  console.log(error);
  process.exit();
}

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true, min: 5 },
  creadedAt: { type: Date, default: Date.now() },
});

const Users = mongoose.model("user", userSchema);

// await Users.create({
//   name: "Nikhil",
//   age: 24,
//   email: "nikhilsingh26042004@gmail.com",
// });

const usersData = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 30, email: "bob@example.com" },
  { name: "Charlie", age: 35, email: "charlie@example.com" },
];

// Step 1: Insert
await Users.insertMany(usersData);

//Step 2: Read
// const users = await Users.find();
const users = await Users.find({ age: { $gt: 30 } });

//Step 3: Update
const updatedUser = await Users.updateOne(
  { email: "bob@example.com" },
  // { $set: { age: 60 } }
  { $inc: { age: 1 } }
);

//Step 4: Delete
const deletedUser = await Users.deleteOne({ email: "bob@example.com" });

await mongoose.connection.close();
