// Write a TypeScript program to find the second largest element in an array.
const secondLargest = (arr: number[]): number | undefined => {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique[1];
};
console.log(secondLargest([3, 1, 4, 2, 5]));
console.log(secondLargest([10, 20, 30, 40, 50]));
