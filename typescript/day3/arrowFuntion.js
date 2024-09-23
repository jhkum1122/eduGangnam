"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var myFunction = function (msg, title, age) {
    console.log(_this);
};
// function myFunction(msg: string) {
//   console.log(this);
// }
myFunction("test", "fighting myFunction", 40);
var func = function () {
    console.log("func()");
    var val = 20;
    return val;
};
var func2 = function () { return console.log("func2()"); };
var test = new myFunction("test", "fighting myFunction", 40);
