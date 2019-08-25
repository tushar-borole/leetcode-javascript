/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let targetSum = target - nums[i]; //?
    if (map.has(targetSum)) {
      return [i, map.get(targetSum)];
    }
    map.set(nums[i], i);
  }
};

twoSum([2, 7, 11, 15], 9); //?
