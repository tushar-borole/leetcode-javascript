// https://leetcode.com/problems/shortest-distance-to-a-character/
// Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.
//
//     Example 1:
//
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
//
//
// Note:
//
//     S string length is in [1, 10000].
//     C is a single character, and guaranteed to be in string S.
//     All letters in S and C are lowercase.

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let arr = S.split("");
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let currentLetter = arr[i];
    let leftDistance = null;
    let rightDistance = null;
    if (currentLetter === C) {
      output.push(0);
      continue;
    }
    let leftArray = arr.slice(0, i);
    if (leftArray.lastIndexOf(C) > -1) {
      leftDistance = leftArray.length - leftArray.lastIndexOf(C);
    }
    let rightArray = arr.slice(i + 1, arr.length);
    if (rightArray.indexOf(C) > -1) {
      rightDistance = rightArray.indexOf(C) + 1;
    }
    console.log(leftDistance, rightDistance);
    if (leftDistance === null) {
      output.push(rightDistance);
    } else if (rightDistance === null) {
      output.push(leftDistance);
    } else {
      output.push(Math.min(leftDistance, rightDistance));
    }
  }

  return output;
};

shortestToChar("loveleetcode", "e"); //?
