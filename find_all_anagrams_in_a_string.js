let isAnagram = function(s, p) {
  if (!isAnagram.cache) {
    isAnagram.cache = new Map();
  }

  if (s.length !== p.length) {
    return false;
  }

  if (s === p) {
    return true;
  }

  if (isAnagram.cache.has(`${s},${p}`)) {
    return isAnagram.cache.get(`${s},${p}`);
  }

  let compare =
    s
      .split("")
      .sort()
      .join("") ===
    p
      .split("")
      .sort()
      .join("");

  isAnagram.cache.set(`${s},${p}`, compare);

  return compare;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
let findAnagrams = function(s, p) {
  let out = [];
  for (let i = 0; i <= s.length - p.length; i++) {
    let subString = s.substring(i, i + p.length);
    if (isAnagram(subString, p)) {
      out.push(i);
    }
  }

  return out;
};

findAnagrams(
  "abceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebca",
  "abc"
); //?
