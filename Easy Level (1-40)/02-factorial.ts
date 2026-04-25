// Create a TypeScript function to find the factorial of a number.
const factorial = (num: number): number => {
  return num <= 1 ? 1 : num * factorial(num - 1);
};

console.log(factorial(3));
console.log(factorial(4));
