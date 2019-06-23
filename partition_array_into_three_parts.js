/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let sum = A.reduce((prev, curr) => prev + curr);

  let counter = 0;
  let temp = 0;

  A.forEach(function(value, index, array) {
    temp += value;
    if (temp === sum / 3) {
      temp = 0;
      counter++;
    }
  });

  return counter === 3;
};
