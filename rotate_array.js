/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let i = 0;

  while (i < k) {
    nums.unshift(nums.pop());
    i++;
  }
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);
