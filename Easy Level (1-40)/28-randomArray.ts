// Create a TypeScript program to generate a random array of numbers.
const randomArray = (num: number[]): number[] => {
  const shuffled = num.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
};

console.log(randomArray([1, 2, 3, 4, 5]));
console.log(randomArray([10, 20, 30, 40, 50]));
