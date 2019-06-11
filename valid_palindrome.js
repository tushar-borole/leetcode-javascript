// https://leetcode.com/problems/valid-palindrome/

// 125. Valid Palindrome

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
//
//     Note: For the purpose of this problem, we define empty string as valid palindrome.
//
//     Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let stringWithout = s.toLowerCase().match(/[a-z0-9A-Z]/g);

  stringWithout = stringWithout !== null ? stringWithout.join("") : null; //?
  let reverseString =
    stringWithout !== null
      ? stringWithout
          .split("")
          .reverse()
          .join("")
      : null;

  return stringWithout === reverseString;
};

isPalindrome("A man, a plan, a canal: Panama"); //?
