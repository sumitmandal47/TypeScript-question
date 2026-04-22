const sumOfEvenNumber = (arr: number[]): number => {
  return arr.reduce((sum, num) => (num % 2 == 0 ? sum + num : sum), 0);
};
let arr1 = [2, 1, 5, 3, 7, 8, 9, 4];
console.log(sumOfEvenNumber(arr1));
