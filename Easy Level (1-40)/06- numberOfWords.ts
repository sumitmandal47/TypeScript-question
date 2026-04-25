//  Write a TypeScript function to count the number of words in a string.
const numberOfWords = (str: string): number => {
  let cleanedStr = str.replace(/\s+/g, ""); //
  console.log(cleanedStr);
  let count = 0;
  for (let i = 0; i < cleanedStr.length; i++) {
    count += 1;
  }
  return count;
};
console.log(numberOfWords("Sumit mandal"));
