const minMaxElements = (arr: number[]): { min: number; max: number } => {
  if (arr.length === 0) {
    throw new Error("Cannot find min/max of an empty array");
  }
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    if (current < min) {
      min = current;
    } else if (current > max) {
      max = current;
    }
  }
  return { min, max };
};
const numbers = [4, 2, 9, 7, 1, 15, 6];
const { min, max } = minMaxElements(numbers);
console.log(`Minimum: ${min}, Maximum: ${max}`);
