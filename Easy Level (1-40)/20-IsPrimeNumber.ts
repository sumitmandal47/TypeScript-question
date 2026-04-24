const isPrimeNumber = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrimeNumber(2)); // true
console.log(isPrimeNumber(3)); // true
console.log(isPrimeNumber(4)); // false
console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(10)); // false
