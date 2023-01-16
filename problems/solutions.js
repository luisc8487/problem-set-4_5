class Quadrilateral {
  constructor(side1, side2, side3, side4){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
  }
  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4;
  }
}

class Rectangle extends Quadrilateral {
  constructor(side1, side2){
    super(side1, side2)
    this.side3 = side1;
    this.side4 = side2;
  }
  getArea(){
    return this.side1 * this.side2;
  }
}

class Square extends Rectangle {
  constructor(side1){
    super(side1)
    this.side1 = side1;
    this.side2 = side1;
    this.side3 = side1;
    this.side4 = side1;
  }
  getDiagonal(){
    return Math.sqrt(this.side1**2 + this.side2**2)  
  }
}

class Person {

}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};
