/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let hash = {};

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let diff = target - current; //?
    if (hash.hasOwnProperty(diff)) {
      let index1 = i + 1;
      let index2 = hash[diff] + 1;
      return [Math.min(index1, index2), Math.max(index1, index2)];
    }
    hash[current] = i;
  }

  return [-1, -1];
};

twoSum([-1, 0], -1); //?
