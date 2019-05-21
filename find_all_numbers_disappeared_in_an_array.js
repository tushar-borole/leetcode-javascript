// 448. Find All Numbers Disappeared in an Array

// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
//     Find all the elements of [1, n] inclusive that do not appear in this array.
//
//     Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
//
//     Example:
//
// Input:
//     [4,3,2,7,8,2,3,1]
//
// Output:
//     [5,6]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  Array.from({ length: nums.length }, (v, k) => k + 1); //?
  const numberArray = [];
  const outPut = [];
  for (let i = 1; i <= nums.length; i++) {
    numberArray.push(i);
  }
  for (let i = 0; i < numberArray.length; i++) {
    if (!nums.includes(numberArray[i])) {
      outPut.push(numberArray[i]);
    }
  }

  return outPut; //?
};

var findDisappearedNumbers = function(nums) {
  let arr = Array.from({ length: nums.length }, (v, k) => k + 1);
  return arr.filter(el => nums.indexOf(el) === -1);
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]); //?
