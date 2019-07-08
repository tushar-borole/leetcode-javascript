// 3. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
//
//     Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let set = new Set();
  let maxCount = 0;
  let windowStart = 0,
    windowEnd = 0;

  while (windowStart < s.length && windowEnd < s.length) {
    if (!set.has(s[windowEnd])) {
      set.add(s[windowEnd]);
      maxCount = Math.max(maxCount, windowEnd - windowStart + 1);
      windowEnd++;
    } else {
      set.delete(s[windowStart]);
      windowStart++;
    }
  }

  return maxCount;
};

lengthOfLongestSubstring("pwwkew"); //?
