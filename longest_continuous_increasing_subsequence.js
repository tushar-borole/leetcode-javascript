/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let counter = 1;
  let out = 0;
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] < nums[j + 1]) {
      counter++;
      j++;
    } else {
      i = j;
      j++;
      counter = 1;
    }
    out = Math.max(out, counter);
  }

  return out;
};

findLengthOfLCIS([]); //?
