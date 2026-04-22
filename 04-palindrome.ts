const isPalindrom = (str: string): boolean => {
  const clearStr = str.toLowerCase();
  const reversed = clearStr.split("").reverse().join("");

  return clearStr === reversed;
};
console.log(isPalindrom("level"));
console.log(isPalindrom("name"));
