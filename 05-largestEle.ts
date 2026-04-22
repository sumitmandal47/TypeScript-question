const largestElement = (arr: number[]): number | undefined => {
  let largeEle = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= largeEle) {
      largeEle = arr[i];
    }
  }
  return largeEle;
};
let arr = [12, 23, 34, 14, 55];
console.log(largestElement(arr));
