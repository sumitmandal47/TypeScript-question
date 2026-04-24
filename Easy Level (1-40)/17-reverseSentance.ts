function reverseWordsInSentence(sentence: string): string {
  const words = sentence.split(" ");
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}
const originalSentence = "Hello, world! This is a sample sentence.";
const reversedSentence = reverseWordsInSentence(originalSentence);
console.log(reversedSentence);
