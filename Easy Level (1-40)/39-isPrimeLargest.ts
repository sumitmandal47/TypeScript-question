const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
};
const findLargestPrime = (arr: number[]): number | null => {
  let largestPrime: number | null = null;
  for (const num of arr) {
    if (isPrime(num)) {
      if (largestPrime === null || num > largestPrime) {
        largestPrime = num;
      }
    }
  }
  return largestPrime;
};
const numbers = [2, 12, 4, 5, 41, 7, 8, 9, 10, 11];
console.log(findLargestPrime(numbers));
