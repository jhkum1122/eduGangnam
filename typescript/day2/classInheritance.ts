class Vehicle {
  constructor(protected wheelCount: number) {}

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
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motocycle = new Motocycle();
motocycle.showNumberOfWheels();

const automobile = new Automobile();
automobile.showNumberOfWheels();

motocycle.updateWheelCount(3);
motocycle.showNumberOfWheels();
