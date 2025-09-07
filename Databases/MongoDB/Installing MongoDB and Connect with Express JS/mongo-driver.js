import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

await client.connect(); //we use await because it reutrns promises

const db = client.db("mongodb_nodejs_db");
const userCollection = db.collection("users");

userCollection.insertOne({ name: "Hriday", age: "31" });
