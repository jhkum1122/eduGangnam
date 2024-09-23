async function delayResult() {
  return (myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("I failed");
      resolve("I compleeted successfully");
    }, 500);
  }));
}

(async function execAsyncFunc() {
  const result = await delayResult();
  console.log(result);
})();
