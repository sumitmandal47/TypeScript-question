const isPalindrome = (str: string): boolean => {
  const clearStr = str.toLowerCase();
  const reversed = clearStr.split("").reverse().join("");

  return clearStr === reversed;
};
console.log(isPalindrome("level"));
console.log(isPalindrome("name"));
