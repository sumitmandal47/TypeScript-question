// Create a TypeScript function to remove duplicates from an array.
const removeDuplicates = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};
const arr: number[] = [2, 12, 4, 6, 2, 4, 7, 2, 0, 9, 7, 0];
const arr1: number[] = [2, 1, 1, 1, 1];
const arr2: number[] = [1, 1, 1, 1];
console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr1));
console.log(removeDuplicates(arr2));
