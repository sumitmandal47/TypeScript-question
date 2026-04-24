const reverseString = (str: string): string => {
  const rev: string[] = [];

  for (const item of str) {
    rev.unshift(item);
  }
  return rev.join(" ");
};

console.log(reverseString("sumit"));

// const reverseString = (str: string): string => {
//     let revStr = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         revStr += str[i]
//     }
//     return revStr
// }
// let str = "Dheeraj"
// console.log(reverseString(str))
// export { }
