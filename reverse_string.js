/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s, start = 0, end = s.length - 1) {
  if (start >= end) {
    return;
  }

  let temp = s[end];
  s[end] = s[start];
  s[start] = temp;

  reverseString(s, start + 1, end - 1);
};
