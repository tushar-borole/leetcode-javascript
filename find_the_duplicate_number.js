/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let sortedNumber = nums.sort();

  for (let i = 0; i < sortedNumber.length; i++) {
    if (sortedNumber[i] === sortedNumber[i + 1]) {
      return sortedNumber[i];
    }
  }
};

findDuplicate([1, 3, 4, 2, 2]); //?
