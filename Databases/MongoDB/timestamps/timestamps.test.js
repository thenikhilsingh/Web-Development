import mongoose from "mongoose";

//Step 1: Connection
try {
  await mongoose.connect("mongodb://localhost:27017/timestamp_database");
} catch (error) {
  console.log(error);
  process.exit();
}

//Step 2: Create Schema
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true, min: 5 },
    // creadedAt: { type: Date, default: Date.now() },
    // updatedAt: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

//Always use middleware before creating the model
//We will use middleware
// userSchema.pre(["save", "updateOne", "updateMany"], function (next) {
//it does whatever you write inside this block before saving the data
//   this.set({ updatedAt: Date.now() });
//   next();
// });

//Step 3: Create model
const Users = mongoose.model("user", userSchema);

// Step 4: Insert Data
// await Users.create({
//   name: "Nikhil",
//   age: 24,
//   email: "nikhilsingh26042004@gmail.com",
// });
await Users.updateOne(
  { email: "nikhilsingh26042004@gmail.com" },
  { $set: { age: 35 } }
);

await mongoose.connection.close();
