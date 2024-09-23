namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}

    abstract updateWheelCount(newWheelCount: number): void;

    showNumberOfWheels() {
      console.log("moved " + this.wheelCount);
      console.log("moved ${this.wheelCount}");
    }
  }

  class Motocycle extends Vehicle {
    constructor() {
      super(2);
    }

    updateWheelCount(newWheelCount: number) {
      this.wheelCount = newWheelCount;
      console.log("Motercycle has " + this.wheelCount);
    }
  }

  class Automobile extends Vehicle {
    constructor() {
      super(4);
    }

    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log("Automobile has " + this.wheelCount);
    }
  }

  const motocycle = new Motocycle();
  motocycle.showNumberOfWheels();

  const automobile = new Automobile();
  automobile.showNumberOfWheels();

  motocycle.updateWheelCount(3);
  motocycle.showNumberOfWheels();
}
