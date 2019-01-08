import { Triangle } from './../src/triangle.js';

describe('Triangle', function() {
  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 5);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).not.toEqual(6);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkTriangle()).toEqual("not a triangle");
  });

  it('should determine if the triangle is equilateral', function(){
    expect(reusableTriangle.side1).toEqual(5);
    expect(reusableTriangle.side2).toEqual(5);
    expect(reusableTriangle.side3).toEqual(5);
    expect(reusableTriangle.checkEquilateral()).toEqual("It is an Equilateral Triangle.");
    });

  it('should determine if the triangle is isoceles', function(){
    var triangle = new Triangle(3,5,5);
    expect(triangle.checkIsoceles()).toEqual("It is an Isoceles Triangle.");
  });

  it('should determine if the triangle is Scalene', function(){
    var triangle = new Triangle(3,7,5);
    expect(triangle.checkScalene()).toEqual("It is a Scalene Triangle.");
  });
});
