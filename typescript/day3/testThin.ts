const myFunction(msg: string) => {
  console.log(this);
}
 
// function myFunction(msg: string) {
//   console.log(this);
// }

myFunction("test");

let test = new myFunction("test");
