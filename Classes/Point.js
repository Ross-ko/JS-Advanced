class Point {
  x;
  y;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(pointOne, pointTwo) {
    const distanceX = pointOne.x - pointTwo.x;
    const distanceY = pointOne.y - pointTwo.y;

    return Math.sqrt(distanceX ** 2 + distanceY ** 2);
  }
}

const a = new Point(1, 2);
const b = new Point(4, 6);

console.log(a, b);
console.log(Point.distance(a, b));
