// Write a TypeScript program to calculate the sum of all even numbers in an array.
const sumOfEvenNumber = (arr: number[]): number => {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
};
let arr1 = [2, 1, 5, 3, 7, 8, 9, 4];
console.log(sumOfEvenNumber(arr1));
