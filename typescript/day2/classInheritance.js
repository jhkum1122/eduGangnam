var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("moved " + this.wheelCount);
        console.log("moved ${this.wheelCount}");
    };
    return Vehicle;
}());
var Motocycle = /** @class */ (function (_super) {
    __extends(Motocycle, _super);
    function Motocycle() {
        return _super.call(this, 2) || this;
    }
    Motocycle.prototype.updateWheelCount = function (newWheelCount) {
        this.wheelCount = newWheelCount;
    };
    return Motocycle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motocycle = new Motocycle();
motocycle.showNumberOfWheels();
var automobile = new Automobile();
automobile.showNumberOfWheels();
motocycle.updateWheelCount(3);
motocycle.showNumberOfWheels();
