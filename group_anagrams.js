/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let hashMap = {};
  let out = [];

  for (let val of strs) {
    let sortedVal = val
      .split("")
      .sort()
      .join("");

    if (!hashMap.hasOwnProperty(sortedVal)) hashMap[sortedVal] = [];

    if (hashMap.hasOwnProperty(sortedVal)) {
      hashMap[sortedVal].push(val);
    }
  }

  for (let val in hashMap) {
    out.push(hashMap[val]);
  }

  return out;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); //?
