const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject("I failed");
    resolve("I compleeted successfully");
  }, 5000);
});

myPromise
  .then((done) => {
    console.log("done : ", done);
  })
  .catch((err) => {
    console.log("error : ", err);
  });
