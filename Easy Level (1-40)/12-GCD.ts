// Create a TypeScript program to find the GCD (Greatest Common Divisor) of two numbers.
function findGCD(a: number, b: number): number {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
const number1 = 2;
const number2 = 4;
const gcd = findGCD(number1, number2);
console.log(`The GCD of ${number1} and ${number2} is ${gcd}`);
