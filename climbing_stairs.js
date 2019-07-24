/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = []) {
  /*
    0 distinct ways to climb negative steps if we
    can only take 1 or 2 steps
  */
  if (n === 0) {
    return 1;
  }

  /*
     1 distinct way to climb 1 if we can only take 1
     or 2 steps.
     We take 1 step.
      */
  if (n < 0) {
    return 0;
  }

  if (memo[n] > 0) {
    return memo[n];
  }

  const left = climbStairs(n - 1, memo); //?
  const right = climbStairs(n - 2, memo);
  memo[n] = left + right;
  return memo[n];
};

climbStairs(6); //?
