// Write a TypeScript function to convert a string to title case.
const titleCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
console.log(titleCase("hello world"));
console.log(titleCase("typescript"));
