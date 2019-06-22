/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    if (value >= target) {
      return i;
    }
  }
  return nums.length;
};

searchInsert([1, 3, 5, 7], 9); //?
