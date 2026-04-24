const sumOfPrimes = (arr: number[]): number => {
  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter(isPrime).reduce((sum, num) => sum + num, 0);
};
console.log(sumOfPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10])); // 17
