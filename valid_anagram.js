// 242. Valid Anagram

// https://leetcode.com/problems/valid-anagram/

// Given two strings s and t , write a function to determine if t is an anagram of s.
//
//     Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false
// Note:
//     You may assume the string contains only lowercase alphabets.
//
//     Follow up:
//     What if the inputs contain unicode characters? How would you adapt your solution to such case?

let getHashMap = function(s) {
  let objectMap = {};
  let arrayString = s.split("");
  for (let val of arrayString) {
    if (objectMap[val] === undefined) objectMap[val] = 0;
    ++objectMap[val];
  }
  return objectMap;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let output = true;
  if (s.length != t.length) return false;
  let hashMapOfS = getHashMap(s);
  let hashMapOfT = getHashMap(t);

  for (let val in hashMapOfS) {
    if (hashMapOfS[val] != hashMapOfT[val]) {
      output = false;
      break;
    }
  }
  return output;
};

isAnagram("anagram", "nagaam"); //?
