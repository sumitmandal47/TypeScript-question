function isPangram(str: string): boolean {
  const processedStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const uniqueLetters = new Set(processedStr);
  return uniqueLetters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over a lazy dog")); // true
console.log(isPangram("Hello World")); // false
console.log(isPangram("Pack my box with five dozen liquor jugs")); // true
