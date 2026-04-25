// Write a TypeScript function to find the minimum and maximum elements in an array.
const minMaxElements = (arr: number[]): { min: number; max: number } => {
  if (arr.length === 0) {
    throw new Error(" Invalid Array ");
  }
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
};
const numbers = [4, 2, 9, 7, 1, 15, 6];
const { min, max } = minMaxElements(numbers);
console.log(`Min: ${min}, Max: ${max}`);
