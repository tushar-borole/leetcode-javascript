/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function(A) {
  let minimum = A.sort((a, b) => a - b)[0];
  let sum = minimum
    .toString()
    .split("")
    .map(value => parseInt(value))
    .reduce((a, total) => total + parseInt(a)); //?

  return sum % 2 === 0 ? 1 : 0;
};

sumOfDigits([34, 23, 100, 24, 75, 33, 54, 80]); //?
