class Circle {
  _radius;

  constructor(radius) {
    this.radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    if (typeof value != "number" || value == 0) {
      throw TypeError("Diameter must be a number > then 0");
    }
    this._radius = value;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    if (typeof value != "number" || value == 0) {
      throw TypeError("Diameter must be a number > then 0");
    }
    this.radius = value / 2;
  }
}

const newCircle = new Circle(9);
console.log(newCircle);
console.log(newCircle.radius);
console.log(newCircle.area);
console.log(newCircle.diameter);
console.log("----------------");
newCircle.radius = 18;
console.log(newCircle.area);
console.log(newCircle.diameter);
console.log("----------------");
newCircle.diameter = 13;
console.log(newCircle.radius);
