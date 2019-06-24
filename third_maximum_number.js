/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums.sort((a, b) => b - a);
  nums = [...new Set(nums)];

  if (nums.length < 3) {
    return nums[0];
  }
  return nums[2];
};

thirdMax([1, 2, 3]); //?
