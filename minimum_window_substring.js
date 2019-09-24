// https://leetcode.com/problems/minimum-window-substring/

let checkValueExist = function(a, b) {
  let currentMap = {};
  a.split("").forEach(
    value => (currentMap[value] = (currentMap[value] || 0) + 1)
  );
  for (let val in b) {
    if (!currentMap.hasOwnProperty(val) || !(b[val] <= currentMap[val])) {
      return false;
    }
  }

  return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let l = 0;
  let r = t.length - 1;
  let map = {};
  t.split("").forEach(value => (map[value] = (map[value] || 0) + 1));

  let uniqueCount = Number.POSITIVE_INFINITY;
  let outString = "";

  while (r < s.length) {
    let currentVal = s.substring(l, r + 1);
    const isAllValueExist = checkValueExist(currentVal, map);
    if (isAllValueExist) {
      if (currentVal.length < uniqueCount) {
        uniqueCount = currentVal.length;
        outString = currentVal;
      }
      l++;
    } else {
      r++;
    }
  }

  return outString;
};

minWindow("abc", "b"); //?
