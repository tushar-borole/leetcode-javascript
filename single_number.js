// 136. Single Number
//
// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
//
//     Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
//
//     Example 1:
//
// Input: [2,2,1]
// Output: 1
// Example 2:
//
// Input: [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  const number = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (number[num] === undefined) {
      number[num] = true;
    } else {
      delete number[num];
    }
  }

  const output = parseInt(Object.keys(number)[0]);

  return output;
};

singleNumber([4, 1, 2, 1, 2]);
