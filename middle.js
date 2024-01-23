/*
  Implement a solution that returns the middle character(s) of a string.
  
  - If the string's length is even, return the middle 2 characters.
  - If the string's length is 1, return itself.
*/

export const getMiddle = (str) => {
  // implement your solution here

  let left = 0;
  let right = str.length - 1;

  let middleNum = Math.floor((left + right) / 2);

  if (str.length % 2 === 0) {
    let res = str.charAt(middleNum) + str.charAt(middleNum + 1)
    return res;
  } else {

    return str.charAt(middleNum);
  }


}

console.log(getMiddle('test')) // expected result - 'es'
console.log(getMiddle('testing')) // expected result - 't'
console.log(getMiddle('middle')) // expected result - 'dd'
console.log(getMiddle('A')) // expected result - 'A'
