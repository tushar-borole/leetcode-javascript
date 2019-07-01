// https://www.youtube.com/watch?v=VdnvmfzA1pw

// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
//     Example:
//
// Input: nums = [1,2,3]
// Output:
//     [
//         [3],
//         [1],
//         [2],
//         [1,2,3],
//         [1,3],
//         [2,3],
//         [1,2],
//         []
//     ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums, index = 0, current = [], result = [[]]) {
  if (current.length === nums.length) {
    return;
  }

  if (index < nums.length) {
    current.push(nums[index]);
    result.push(current.slice(0));
    subsets(nums, index + 1, current, result);
    current.pop();
    subsets(nums, index + 1, current, result);
  }

  return result;
};

subsets([1, 2, 3]); //?
