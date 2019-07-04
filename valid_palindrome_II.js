// https://leetcode.com/problems/valid-palindrome-ii/
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
//
//     Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
//     Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

let isPalindromic = function(string, left, right) {
  while (left < right) {
    if (string.charAt(left) !== string.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) != s.charAt(j)) {
      return isPalindromic(s, i + 1, j) || isPalindromic(s, i, j - 1);
    }
    i++;
    j--;
  }
  return true;
};

validPalindrome("abeebea"); //?
