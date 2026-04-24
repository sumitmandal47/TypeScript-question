function countOccurrence(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrence("hello world", "o"));
console.log(countOccurrence("typescript", "s"));
console.log(countOccurrence("mississippi", "s"));
