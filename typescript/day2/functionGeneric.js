"use strict";
/*
interface HasLength {
  length: number;
}

function getLength<T>(arg: T): number {
  if ((arg as any).hasOwnProperty("length")) {
    //length라는 속성이 있다면 True로 옮
    return arg["length"];
  }

  return 0;
}

console.log(getLength<number>(22));
console.log(getLength("Hello World!"));

*/
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(arg) {
    if (arg.hasOwnProperty("length")) {
        //length라는 속성이 있다면 True로 옮
        return arg["length"];
    }
    return 0;
}
console.log(getLength(22));
console.log(getLength("Hello World!"));
