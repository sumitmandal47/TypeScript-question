// Implement a TypeScript function to remove all whitespace from a string.
const removeWhiteSpace = (str: string): string => {
  return str.replace(/\s/g, "");
};
const stringWithWhitespace = "Hello Bro! How are you?";
const stringWithoutWhitespace = removeWhiteSpace(stringWithWhitespace);
console.log(stringWithoutWhitespace);
