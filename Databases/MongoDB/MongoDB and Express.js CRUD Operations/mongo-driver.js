import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect();

const db = client.db("mongodb_nodejs_db");
const userCollection = db.collection("users");

// userCollection.insertOne({ name: "Hriday", age: "31" });

// userCollection.insertMany([
//   { name: "Abhay", role: "user", age: "35" },
//   { name: "Ashutosh", role: "user", age: "40" },
//   { name: "Lucky", role: "admin", age: "45" },
// ]);

// const usersCursor = userCollection.find();
// for await (const user of usersCursor) {
//     console.log(user);
// }

// or

// const usersCursor = await userCollection.find().toArray();
// console.log(usersCursor);

// const user = await userCollection.findOne({ name: "Abhay" });
// console.log(user);
// console.log(user._id.toHexString());

//Update
// await userCollection.updateOne({ name: "Lucky" }, { $set: { age: 80 } });

//Delete
// await userCollection.deleteOne({ name: "Hriday" });

const result = await userCollection.deleteMany({ role: "admin" });
console.log(`${result.deletedCount} documents deleted.`);
