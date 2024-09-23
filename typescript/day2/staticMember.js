"use strict";
// class ClassA {
//   static typeName: string;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor() {}
//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }
// const a = new ClassA();
// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());
var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.runner = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var a = new Runner("a");
var b = new Runner("b");
a.run();
b.run();
