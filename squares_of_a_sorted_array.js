// https://leetcode.com/problems/squares-of-a-sorted-array/

// 977. Squares of a Sorted Array

// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
//
//
//
//     Example 1:
//
// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:
//
// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
//
//
// Note:
//
//     1 <= A.length <= 10000
//     -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  const square = A.map(value => value * value); //?
  const sorted = square.sort((a, b) => a - b);
  return sorted; //?
};

sortedSquares([
  -20,
  -19,
  -14,
  -12,
  -7,
  -5,
  2,
  2,
  4,
  6,
  6,
  7,
  8,
  9,
  10,
  12,
  17,
  17,
  18,
  18
]);
