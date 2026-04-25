// Write a TypeScript function to check if a number is a palindrome.
const isPalindrome = (num: number): boolean => {
  if (num < 0) return false;
  const str = num.toString();
  const reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
