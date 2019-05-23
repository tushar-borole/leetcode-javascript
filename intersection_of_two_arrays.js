// https://leetcode.com/problems/intersection-of-two-arrays/
//
//
//     349. Intersection of Two Arrays
//
//
// Given two arrays, write a function to compute their intersection.
//
//     Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:
//
//     Each element in the result must be unique.
//     The result can be in any order.

const arrayToHashMap = function(array) {
  const tempHashMap = {};
  for (let val of array) {
    tempHashMap[val] = true;
  }
  return tempHashMap;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
  let output = [];
  const num1Array = arrayToHashMap(nums1);
  const num2Array = arrayToHashMap(nums2);

  for (let val in num1Array) {
    if (num1Array.hasOwnProperty(val) && num2Array.hasOwnProperty(val)) {
      output.push(val);
    }
  }

  return output;
};

intersection([1, 2, 1, 3, 4], [1, 2, 4]); //?
