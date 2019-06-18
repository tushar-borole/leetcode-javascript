// Return the length of N.  If there is no such N, return -1.
//
//
//
// Example 1:
//
// Input: 1
// Output: 1
// Explanation: The smallest answer is N = 1, which has length 1.
// Example 2:
//
// Input: 2
// Output: -1
// Explanation: There is no such positive integer N divisible by 2.
// Example 3:
//
// Input: 3
// Output: 3
// Explanation: The smallest answer is N = 111, which has length 3.
//
//
// Note:
//
//     1 <= K <= 10^5

/**
 * @param {number} K
 * @return {number}
 */
var smallestRepunitDivByK = function(K) {
  // Let it be JavaScript
  for (let i = 1, a = 0; i <= K; i++) {
    let mod = (a = (a * 10 + 1) % K);
    if (mod === 0) {
      return i;
    }
  }
  return -1;
};

smallestRepunitDivByK(-7); //?
