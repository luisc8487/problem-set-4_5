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
  constructor(length, width){
    super(length, width, length, width)
    this.side3 = length;
    this.side4 = width;
  }
  getArea(){
    return this.side3 * this.side4;
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
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo(status) {
        console.log(`${this.name}, age ${this.age} | ${status}`)
    }
}

class Stats extends Person {
    constructor(name, age, dribble, pace) {
        super(name, age)
        this.pace = pace;
        this.dribble = dribble;
    }
    skill() {
        this.getInfo(`Pace: ${this.pace} Dribble: ${this.dribble}`);
    }
}

const luis = new Stats("Luis", 23, 92, 85);
luis.skill();

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person
};
