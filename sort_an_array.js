// https://leetcode.com/problems/sort-an-array/
//
//     912. Sort an Array
//
//
// Given an array of integers nums, sort the array in ascending order.
//
//
//
//     Example 1:
//
// Input: [5,2,3,1]
// Output: [1,2,3,5]
// Example 2:
//
// Input: [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
//
//
// Note:
//
//     1 <= A.length <= 10000
//     -50000 <= A[i] <= 50000

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};

sortArray([3, 5, 5, 2, 6, 7]); //?
