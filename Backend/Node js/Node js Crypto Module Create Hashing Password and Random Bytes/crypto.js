const crypto = require("crypto");

const randomValues = crypto.randomBytes(8).toString("hex");
// the size must not be larger than 2^33-1
//to.string is used to convert the randombytes from buffer object into a human-readable string, commonly in formats like 'hex' or 'base64'.
console.log(randomValues);

const hashValue = crypto
  .createHash("sha256")
  .update("thenikhilsingh")
  .digest("hex");
console.log(hashValue); // f98c3c3dd574c30dbc8af2b9b26299ffb8a768f16c6cbd415fd51f250c9044f4

const hashValue1 = crypto
  .createHash("sha256")
  .update("thenikhilsingh")
  .digest("hex");
console.log(hashValue1); // f98c3c3dd574c30dbc8af2b9b26299ffb8a768f16c6cbd415fd51f250c9044f4
