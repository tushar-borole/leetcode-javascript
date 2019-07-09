/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let start = 0;
  let maxCount = 0;
  let map = new Map();
  for (let end = 0; end < s.length; end++) {
    if (!map.has(s[end])) map.set(s[end], 0);
    let val = map.get(s[end]);
    map.set(s[end], val + 1);
    while (map.size > k) {
      map.set(s[start], map.get(s[start]) - 1);

      if (map.get(s[start]) === 0) {
        map.delete(s[start]);
      }
      start++;
    }
    maxCount = Math.max(maxCount, end - start + 1);
  }

  return maxCount;
};

lengthOfLongestSubstringKDistinct("a", 0); //?
