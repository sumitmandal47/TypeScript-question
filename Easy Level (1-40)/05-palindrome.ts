//  Create a TypeScript function to check if a string is a palindrome.
const palindrome = (str: string): string => {
  let newStr = "";
  const cleanedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(cleanedString);
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += cleanedString[i];
  }
  console.log(newStr);
  if (cleanedString == newStr) {
    return "String is palindrome";
  } else {
    return "String is Not Palindrome";
  }
};
let str1 = "Racecar";
console.log(palindrome(str1));
let str2 = "sumit";
console.log(palindrome(str2));
