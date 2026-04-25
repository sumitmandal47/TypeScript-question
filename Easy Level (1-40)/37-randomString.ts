// Create a TypeScript program to generate a random string of a given length.
const randomString = (length: number): string => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    newStr += charset[randomIndex];
  }
  return newStr;
};
console.log(randomString(7));
