const removeWhiteSpace = (str: string): string => {
  return str.replace(/\s/g, "");
};
const stringWithWhitespace = "Hello Bro! How are you?";
const stringWithoutWhitespace = removeWhiteSpace(stringWithWhitespace);
console.log(stringWithoutWhitespace);
