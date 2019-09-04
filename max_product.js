// https://leetcode.com/problems/maximum-product-subarray/
// https://www.youtube.com/watch?v=-rUBh45rugs

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxSoFar = nums[0],
    minSoFar = nums[0],
    res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar *= nums[i];
    minSoFar *= nums[i];

    if (nums[i] < 0) {
      let temp = maxSoFar;
      maxSoFar = minSoFar;
      minSoFar = temp;
    }

    maxSoFar = Math.max(maxSoFar, nums[i]);
    minSoFar = Math.min(minSoFar, nums[i]);
    res = Math.max(maxSoFar, res);
  }
  return res;
};
