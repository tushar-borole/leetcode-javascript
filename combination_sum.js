// https://www.youtube.com/watch?v=MTI2wc8s0BY
// https://leetcode.com/problems/combination-sum/

// 39. Combination Sum
// Medium
//
// 2087
//
// 65
//
// Favorite
//
// Share
// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
//
//     The same repeated number may be chosen from candidates unlimited number of times.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(
  candidates,
  target,
  index = 0,
  curr = [],
  combinations = []
) {
  if (target <= 0) {
    if (target === 0) {
      combinations.push(curr.slice());
    }
    return;
  }
  if (index < candidates.length) {
    let current = candidates[index];
    curr.push(current);
    combinationSum(candidates, target - current, index, curr, combinations);
    curr.pop();
    combinationSum(candidates, target, index + 1, curr, combinations);
  }

  return combinations;
};

combinationSum([2, 3, 6, 7], 7); //?
