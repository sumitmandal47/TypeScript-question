function countString(str: String): number {
  let cleanedStr = str.replace(/\s+/g, "");

  let count = 0;
  for (let i = 0; i < cleanedStr.length; i++) {
    count += 1;
  }
  return count;
}
console.log(countString("sumit/ mandal"));
