/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let duplicateCounter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      duplicateCounter++;
    } else {
      duplicateCounter = 0;
    }

    if (duplicateCounter > 1) {
      nums.splice(i, 1);
      i--;
    }
  }
};

removeDuplicates([1, 1, 1, 2, 2, 3]);
