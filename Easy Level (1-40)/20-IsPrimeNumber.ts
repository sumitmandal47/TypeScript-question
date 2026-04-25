// Write a TypeScript function to check if a number is a prime number.
const isPrimeNumber = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
console.log(isPrimeNumber(2));
console.log(isPrimeNumber(4));
