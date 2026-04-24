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
const limit = 1000;
const fibonacciSequence = FibonacciSequence(limit);
console.log(fibonacciSequence);
