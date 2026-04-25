// Implement a TypeScript function to check if a given year is a leap year.
const isLeapYear = (year: number): string => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `Yes ${year} this  is leap year`;
  } else {
    return "not leap year";
  }
};
console.log(isLeapYear(2000));
console.log(isLeapYear(2005));
