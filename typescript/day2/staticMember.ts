// class ClassA {
//   static typeName: string;

//   constructor() {}

//   static getFullName() {
//     return "ClassA " + ClassA.typeName;
//   }
// }

// const a = new ClassA();

// console.log(ClassA.typeName);
// console.log(ClassA.getFullName());

class Runner {
  static lastRunTypeName: string;

  constructor(private typeName: string) {}

  runner() {
    Runner.lastRunTypeName = this.typeName;
  }
  run() {
    Runner.lastRunTypeName = this.typeName;
  }
}

const a = new Runner("a");
const b = new Runner("b");

a.run();
b.run();

export {};
