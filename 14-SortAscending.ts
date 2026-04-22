const sortAscending = (arr: number[]): number[] => {
  return [...arr].sort((a, b) => a - b);
};
const nums = [40, 1, 4, 89, 45, 30];
console.log(sortAscending(nums));
