/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let anwser = [];

  anwser[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    anwser[i] = nums[i - 1] * anwser[i - 1];
  }

  let R = 1;

  for (let i = anwser.length - 1; i >= 0; i--) {
    anwser[i] = anwser[i] * R;
    R *= nums[i];
  }

  return anwser;
};

productExceptSelf([1, 2, 3, 4]); //?
