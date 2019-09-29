/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const length = cost.length;
  for (let i = 2; i < length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }

  return Math.min(cost[length - 1], cost[length - 2]);
};

minCostClimbingStairs([10, 15, 20]); //?
