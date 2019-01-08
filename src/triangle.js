export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkTriangle = function() {
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
};

Triangle.prototype.checkEquilateral = function() {
  if (this.side1 === this.side2 &&  this.side2 === this.side3  && this.side3 === this.side1){
    return("It is an Equilateral Triangle.");
  }
};

Triangle.prototype.checkIsoceles = function() {
  if (this.side1 === this.side2 || this.side2 === this.side3  || this.side3 === this.side1){
    return("It is an Isoceles Triangle.");
  }
};

Triangle.prototype.checkScalene = function() {
  if(this.checkTriangle() === false){
    if (this.side1 !== this.side2 && this.side2 !== this.side3  && this.side3 !== this.side1){
      return("It is a Scalene Triangle.");
    }
  }
};
