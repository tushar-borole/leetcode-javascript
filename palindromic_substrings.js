// https://leetcode.com/problems/palindromic-substrings/submissions/

//
// 647. Palindromic Substrings
// Medium
//
// 1420
//
// 74
//
// Favorite
//
// Share
// Given a string, your task is to count how many palindromic substrings in this string.
//
//     The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
//
//     Example 1:
//
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
//
//
//     Example 2:
//
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

let isPalindromic = function(array) {
  if (array.length === 1) {
    return true;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[array.length - i - 1]) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let stringToArray = s.split("");
  let result = 0;
  let index = 0;
  while (index < s.length) {
    for (let i = index; i < s.length; i++) {
      if (isPalindromic(stringToArray.slice(index, i + 1))) {
        result++;
      }
    }
    index++;
  }
  return result;
};
countSubstrings("abc"); //?
