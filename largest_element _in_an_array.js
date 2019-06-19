/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let sortedArray = nums.sort((a, b) => b - a);
  return sortedArray[k - 1];
};

findKthLargest([3, 2, 1, 5, 6, 4], 2); //?
