const containOnlyDigits = (str: string): boolean => {
  return /^\d+$/.test(str);
};
console.log(containOnlyDigits("12345")); // true
console.log(containOnlyDigits("123a45")); // false
