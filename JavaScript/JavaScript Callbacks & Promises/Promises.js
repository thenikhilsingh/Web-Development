const promiseONe = new Promise(function (resolve, reject) {
  //Do any task
  //database calls, cryptography, network
  setTimeout(() => {
    console.log("Async Task is complete");
    resolve(); //resolve is used to connect with .then()
  }, 1000);
});

promiseONe.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task is complete 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise consumed 2");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Hriday", email: "abc@example.com" });
    } else {
      reject("ERROR:Something went wrong "); //reject() takes error
    }
  }, 1000);
});
// const username= promiseFour.then((user) => {//this is not right way it shows error
//   console.log(user);
//   return user.username;
// });
// console.log(username);
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    //catch is used when there are errors in the promises.
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

let promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Abhay", email: "123@example.com" });
    } else {
      reject("ERROR:Something went wrong here "); //reject() takes error
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    //try and catch is used to handle error
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typecode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typecode.com/users")
  .then((response) => {
    return response.json;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
