function findMedian(numbers: number[]): number | undefined {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate the median of an empty array.");
  }
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
}
console.log(findMedian([3, 1, 2]));
console.log(findMedian([10, 2, 38, 23]));
