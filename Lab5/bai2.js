console.log('-----------Bài 2----------------');

class Shape {
  constructor(x, y) {
    this.x = 0;
    this.y = 0;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

const myShape = new Shape();
myShape.move(4,5);
console.log(myShape.x, myShape.y);