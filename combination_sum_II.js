/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(
  candidates,
  target,
  index = 0,
  curr = [],
  combinations = [],
  store = {}
) {
  if (target <= 0) {
    if (target === 0) {
      let val = curr.slice(0);
      let sortedVal = val
        .slice(0)
        .sort()
        .join("");
      if (!store.hasOwnProperty(sortedVal)) {
        store[sortedVal] = true;
        combinations.push(val);
      }
    }
    return;
  }
  if (index < candidates.length) {
    let current = candidates[index];
    curr.push(current);
    combinationSum2(
      candidates,
      target - current,
      index + 1,
      curr,
      combinations,
      store
    );
    curr.pop();
    combinationSum2(candidates, target, index + 1, curr, combinations, store);
  }

  return combinations;
};

combinationSum2([10, 1, 2, 7, 6, 1, 5].sort(), 8); //?
