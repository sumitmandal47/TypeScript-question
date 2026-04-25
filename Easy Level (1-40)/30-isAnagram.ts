// Implement a TypeScript function to check if a string is an anagram.
const isAnagram = (s: string, t: string): boolean => {
  const normalize = (str: string): string =>
    str.toLowerCase().split("").sort().join("");

  return normalize(s) === normalize(t);
};
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("evil", "vile"));
