class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
const b = new B();

a.go();
b.go();

b.go = b.go.bind(a);
b.go();

console.log(b);
console.log(b.go);
