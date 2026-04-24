const randomString = (length: number): string => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";
  for (let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * charset.length);
    newStr += charset[randomindex];
  }
  return newStr;
};
console.log(randomString(7));
