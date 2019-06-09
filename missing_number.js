/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let arrayOfNumber = Array.from({ length: nums.length + 1 }, (a, i) => i);
  let difference = arrayOfNumber.find(value => !nums.includes(value));

  return difference;
};

missingNumber([3, 0, 1]); //?
