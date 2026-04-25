// Implement a TypeScript function to sort an array of numbers in ascending order.
const sortAscending = (arr: number[]): number[] => {
  return [...arr].sort((a, b) => a - b);
};
const num = [40, 1, 4, 89, 45, 30];
console.log(sortAscending(num));
