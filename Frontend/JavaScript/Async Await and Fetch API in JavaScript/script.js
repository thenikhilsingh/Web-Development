/*async function getData() {
//simulate getting data from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}*/

//settle means resolve or reject
//resolve mean promise has settled succesfully
//reject mean promise has not settled succesfully

async function getData() {
  //simulate getting data from a server
  // let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json; //it returns data as javascript object
  // let data = await x.text(); // it returns data as text
  return data;
}

async function main() {
  console.log("Loading Modules");

  console.log(" Do something else");

  console.log("load data");

  let data = await getData();

  console.log(data);

  console.log("processing data");

  console.log("task2");
}
main();

/*data.then((v) => {
  console.log(data);
  console.log("processing data");
  console.log("task2");
});*/
