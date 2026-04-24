const vowelsCount = (str: string): number => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
console.log(vowelsCount("Hello World")); // 3
console.log(vowelsCount("TypeScript")); // 3
