/*
 Write a function which increments the last number in a string.

  - If the string already ends with a number, the number should be incremented by 1.
  - If the string does not end with a number. the number 1 should be appended to the new string.
*/

const incrementStr = (str) => {
  // implement your solution here

  let num = "";
  let index;
  for (let i = str.length - 1; i >= 0; i--) {
    if (!isNaN(str.charAt(i))) {
      num = str.charAt(i) + num;
      index = i;
    }

  }

  let zeroes = ""

  for (let i = 0; i < num.length - 1; i++) {
    if (num.charAt(i) === "0") {
      zeroes += 0;
    }
  }
  let resultingStr
  if (num !== "") {
    let res = (parseInt(num) + 1).toString(); //number
    resultingStr = str.slice(0, index) + zeroes + res

  } else {
    return str + "1"
  }


  return resultingStr
}

console.log(incrementStr('dc')) // expected result - dc1
console.log(incrementStr('miniCat23')) // expected result - miniCat24
console.log(incrementStr('miniCat0042')) // expected result - miniCat0043
console.log(incrementStr('dc9')) // expected result - dc10
console.log(incrementStr('dc099')) // expected result - dc100
console.log(incrementStr('mini4cat5')) // expected result - mini4cat6
