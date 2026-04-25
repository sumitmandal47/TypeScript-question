// Write a TypeScript program to find the LCM (Least Common Multiple) of two numbers.
const LCM = (a: number, b: number): number => {
  const max = Math.max(a, b);
  let lcm = max;
  while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
      return lcm;
    }
    lcm += max;
  }
};
console.log(LCM(4, 6));
console.log(LCM(15, 20));
console.log(LCM(7, 3));
