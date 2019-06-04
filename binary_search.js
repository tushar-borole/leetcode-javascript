// https://leetcode.com/problems/binary-search/

// 704. Binary Search

// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.
//
//
// Example 1:
//
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
//
// Example 2:
//
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
//
//
// Note:
//
//     You may assume that all elements in nums are unique.
//     n will be in the range [1, 10000].
//     The value of each element in nums will be in the range [-9999, 9999].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let start = 0;
  let midValue = null;
  let end = nums.length - 1;
  while (target !== midValue) {
    let mid = Math.floor(end + start / 2);
    midValue = nums[mid]; //?
    if (target === midValue) {
      return mid; //?;
    } else if (target < midValue) {
      end = mid - 1;
    } else if (target > midValue) {
      start = mid + 1;
    }
  }
};

search([1, 4, 7, 8, 9], 9); //?
