// 21. Implement a TypeScript program to generate a random password.
const randomPassword = (length: number): string => {
  const chars = "ABCDEFGHIJKLMNO0123456789!@#$%";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
};

console.log(randomPassword(8));
console.log(randomPassword(4));
