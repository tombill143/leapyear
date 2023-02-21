/*Check if the year is divisible by 4.
If the year is not divisible by 4, it's not a leap year.
If the year is divisible by 4, check if it's divisible by 100.
If the year is divisible by 100, check if it's divisible by 400.
If the year is divisible by 400, it's a leap year.
If the year is divisible by 100 but not by 400, it's not a leap year.
If the year is divisible by 4 but not by 100, it's a leap year.*/

function isLeapYear(year) {
  if (year % 4 !== 0) {
    //Checking to see if the year is divisible by 4.
    // If the year is not divisible by 4, it's not a leap year
    return false;
  } else if (year % 100 !== 0) {
    // If the year is divisible by 4 but not by 100, it will be a leap year
    return true;
  } else if (year % 400 !== 0) {
    // If the year is divisible by 100 but not by 400, it will not be a leap year
    return false;
  } else {
    // If the year is divisible by 400, it will be a leap year
    return true;
  }
}

//------------------------RESULTS----------------------------
console.log("------RESULTS---------");
console.log(isLeapYear(2020)); // expected output: true

//----------------------OTHER TESTS--------------------------
console.log("----OTHER TESTS---------");
console.log(isLeapYear(2020)); // expected output: true
console.log(isLeapYear(2021)); // expected output: false
console.log(isLeapYear(2022)); // expected output: false
console.log(isLeapYear(2023)); // expected output: false
console.log(isLeapYear(2024)); // expected output: true
console.log(isLeapYear(2025)); // expected output: false
console.log(isLeapYear(2026)); // expected output: false
console.log(isLeapYear(2027)); // expected output: false
console.log(isLeapYear(2028)); // expected output: true
console.log(isLeapYear(2029)); // expected output: false
