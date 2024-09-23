import fetch from "node-fetch";

const nodeFetch = require("node-fetch");

(async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");

  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("failed to get anything!");
  }

  // return (myPromise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     // reject("I failed");
  //     resolve("I compleeted successfully");
  //   }, 500);
  // }));
})();

export {};
