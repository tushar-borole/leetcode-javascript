// https://www.youtube.com/watch?v=KukNnoN-SoY

// Given a collection of distinct integers, return all possible permutations.
//
//     Example:
//
// Input: [1,2,3]
// Output:
//     [
//         [1,2,3],
//         [1,3,2],
//         [2,1,3],
//         [2,3,1],
//         [3,1,2],
//         [3,2,1]
//     ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, set = [], answer = []) {
  if (nums.length === 0) {
    answer.push([...set]);
  }

  for (let i = 0; i < nums.length; i++) {
    let newNum = nums.filter((a, index) => index !== i);
    set.push(nums[i]);
    permute(newNum, set, answer);
    set.pop();
  }

  return answer;
};

permute([1, 2, 3, 4]); //?
