//
// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
//
//     Note:
//
// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
//     You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let count = Math.max(num1.length, num2.length);
  num1 = num1.padStart(count, "0");
  num2 = num2.padStart(count, "0");
  let carry = 0;
  let out = "";
  for (let i = count - 1; i >= 0; i--) {
    let val = parseInt(num1.charAt(i)) + parseInt(num2.charAt(i)) + carry;
    if (val > 9) {
      out = (val % 10) + out;
      carry = 1;
    } else {
      out = val + out;
      carry = 0;
    }
  }
  if (carry == 1) {
    out = 1 + out;
  }

  return out;
};

addStrings("999", "999"); //?
