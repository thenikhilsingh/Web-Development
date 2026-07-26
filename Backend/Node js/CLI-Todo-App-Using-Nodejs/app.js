import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin, //Standard Input(stdin) helps to read data in cli
  output: process.stdout, //Standard Output(stdout) helps to write data in cli
});

const todos = [];

const showMenu = () => {
  console.log("\n 1: Add a Task");
  console.log("\n 2: View Tasks");
  console.log("\n 3: Exit");
  rl.question("choose an option: ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter the Task:", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if (option ==="2") {
    console.log("\n Your Todo Lists");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Exited");
    rl.close();
  } else {
    console.log("Invalid Option. Please try again");
    showMenu();
  }
};

showMenu();
