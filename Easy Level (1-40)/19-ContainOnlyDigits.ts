// Create a TypeScript function to check if a string contains only digits.
const containOnlyDigits = (str: string): boolean => {
  return /^\d+$/.test(str);
};
console.log(containOnlyDigits("12345")); // true
console.log(containOnlyDigits("123a45")); // false
