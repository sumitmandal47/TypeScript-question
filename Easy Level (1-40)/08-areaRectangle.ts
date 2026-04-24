const rectangleArea = (width: number, height: number): string => {
  let A = width * height;
  return `Area of a rectangle = ${A} square units`;
};

let width = 20;
let height = 2.4;
console.log(rectangleArea(width, height));
