/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
  let str = "";
  let count = 0;

  while (str.length <= A.length + B.length) {
    str += A;
    count++;
    if (str.includes(B)) return count;
  }

  return -1;
};

repeatedStringMatch("abcd", "cdabcdab"); //?
