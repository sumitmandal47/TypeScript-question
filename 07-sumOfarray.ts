const sumOfarray = (arr: number[]): number => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = arr[i] + total;
  }
  return total;
};

console.log(sumOfarray([10, 2, 3, 40, 5]));
