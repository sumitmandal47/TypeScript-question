// Write a TypeScript function to calculate the area of a rectangle.
const rectangleArea = (width: number, height: number): string => {
  let A = width * height;
  return `Area of a rectangle = ${A} square units`;
};
let width = 20;
let height = 8;
console.log(rectangleArea(width, height));
