// Write a TypeScript function to check if a number is even or odd.
const EvenOdd = (num: number): string => {
  return num % 2 == 0 ? "Even Number" : "Odd Number";
};
console.log(EvenOdd(2));
console.log(EvenOdd(5));
