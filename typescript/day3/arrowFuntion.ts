const myFunction = (msg: string, title: string, age: number) => {
  console.log(this);
};

// function myFunction(msg: string) {
//   console.log(this);
// }

myFunction("test", "fighting myFunction", 40);

const func = () => {
  console.log("func()");
  const val = 20;
  return val;
};

const func1 = () => ({ name: "kum" });

const func2 = () => console.log("func2()");

let test = new myFunction("test", "fighting myFunction", 40);

console.log(func());
console.log(func2());

export {};
