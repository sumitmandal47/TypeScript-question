const factorial = (num: number): number =>
  num <= 1 ? 1 : num * factorial(num - 1);

console.log(factorial(4));
console.log(factorial(5));
