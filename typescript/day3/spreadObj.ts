namespace NamespaceA {
  class A {
    aname: string = "A";
  }

  class B {
    bname: string = "B";
  }

  const a = new A();
  const b = new B();
  const c = { ...a, ...b };
  const d = Object.assign(a, b);
}
