// Import EventEmitter class
const EventEmitter = require("events");
// create an instance of EventEmitter
const emitter = new EventEmitter();

// 1. Define an event listener (addListener)
// emitter.on("greet", () => {
//   console.log("Hello World");
// });
// 2. Trigger (emit) the "greet" event
// emitter.emit("greet");

//*---------------------------------------------------------------------------------------------------*

// You can also pass arguments while emitting.

// emitter.on("greet", (username, prof) => {
//   console.log(`Hello ${username}! You are a ${prof}`);
// });
// emitter.emit("greet", "Hriday", "Web Developer");

//*---------------------------------------------------------------------------------------------------*

// but it is best idea to take a single argument as an object.
emitter.on("greet", (arg) => {
  console.log(`Hello ${arg.username}! You are a ${arg.prof}`);
});
emitter.emit("greet", { username: "Hriday", prof: "Web Developer" });
