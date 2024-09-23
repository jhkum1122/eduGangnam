var A = /** @class */ (function () {
    function A() {
        this.name = "A";
    }
    A.prototype.go = function () {
        console.log(this.name);
    };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
        this.name = "B";
    }
    B.prototype.go = function () {
        console.log(this.name);
    };
    return B;
}());
var a = new A();
var b = new B();
a.go();
b.go();
b.go = b.go.bind(a);
b.go();
console.log(b);
console.log(b.go);
