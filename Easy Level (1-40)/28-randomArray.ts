const randomArray = (nums: number[]): number[] => {
    const shuffled = nums.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};

console.log(randomArray([1, 2, 3, 4, 5]));
console.log(randomArray([10, 20, 30, 40, 50]));