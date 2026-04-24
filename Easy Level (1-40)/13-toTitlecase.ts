const toTitlecase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

console.log(toTitlecase("hello world"));
console.log(toTitlecase("typescript"));
