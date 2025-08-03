// Challenge: "Event Maestro: Handle it all!"

// Objective
// Create a program using Node.js EventEmitter that:

// Listens for multiple types of user events (e.g. , login, logout , purchase , and profile update).
// Tracks how many times each event is emitted.
// Logs a summary of all  event occurences when a special summary event is triggered.

// Requirements
// Create  at leaast  four custom events (e.g. , user-login, user-logout, user-purchase, profile-update).
// Emit these events multiple  times with different arguments (e.g. , username, item purchased).
// Track and store the count of event type.
// Define a summary event that logs a detailed report of how many times each event was triggered.

//*------------------------------------------------------------------------------------------------------*/

const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
  "user-login": 0,
  "user-logout": 0,
  "user-purchase": 0,
  "profile-update": 0,
};

emitter.on("user-login", (username) => {
  eventCounts["user-login"]++;
  console.log(`${username} logged in!`);
});

emitter.on("user-purchase", (username, item) => {
  eventCounts["user-purchase"]++;
  console.log(`${username} purchased ${item}!`);
});
emitter.on("profile-update", (username, field) => {
  eventCounts["profile-update"]++;
  console.log(`${username} updated their ${field}!`);
});
emitter.on("user-logout", (username) => {
  eventCounts["user-logout"]++;
  console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

//Emit some events
emitter.emit("user-login", "Nikhil");
emitter.emit("user-purchase", "Nikhil", "Laptop");
emitter.emit("profile-update", "Nikhil", "email");
emitter.emit("user-logout", "Nikhil");

//Show the Summary
emitter.emit("summary");
