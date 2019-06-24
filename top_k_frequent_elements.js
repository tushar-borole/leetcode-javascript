// 347. Top K Frequent Elements

// https://leetcode.com/problems/top-k-frequent-elements/

//
// Given a non-empty array of integers, return the k most frequent elements.
//
//     Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
// Note:
//
//     You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
//     Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let store = {};

  for (let val of nums) {
    if (store[val] === undefined) store[val] = 0;
    store[val]++;
  }

  let res = Object.entries(store)
    .sort((a, b) => b[1] - a[1])
    .map(a => a[0]); //?

  return res.slice(0, k); //?
};

topKFrequent([1, 1, 1, 2, 2, 3], 2); //?
