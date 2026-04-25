// Write a TypeScript program to find the sum of all numbers in an array.
function sumOfArray(num: number[]): number {
  let total: number = 0;
  for (const n of num) {
    total += n;
  }
  return total;
}
const arr = [2, 4, 6, 7, 8, 3];
console.log(sumOfArray(arr));
