// Create a TypeScript program to generate the Fibonacci sequence up to a given number.
const FibonacciSequence = (number: number): number[] => {
  let a = 0;
  let b = 1;
  let arr: number[] = [];
  while (a <= number) {
    arr.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }
  return arr;
};
const limit = 100;
const fibonacciSequence = FibonacciSequence(limit);
console.log(fibonacciSequence);
