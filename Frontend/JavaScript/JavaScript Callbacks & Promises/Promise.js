console.log("this is promises");

/*let prom1 = new promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

prom1
  .then((a) => {
    //then() is used to print when resolve completed.
    console.log(a);
  })
  .catch((err) => {
    //catch() is used to print when resolve is not completed.
    console.log(err);
  });*/

let prom1 = new promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you");
  } else {
    setTimeout(() => {
      console.log("yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

let prom2 = new promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was not supporting you 2");
  } else {
    setTimeout(() => {
      console.log("yes I am done");
      resolve("Harry2");
    }, 1000);
  }
});

let p3 = promise.all([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
    console.log(err);
    
  
}
)
