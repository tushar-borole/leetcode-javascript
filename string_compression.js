/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let index = 0,
    count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      const splitCount = count > 1 ? String(count).split("") : [];
      chars.splice(index, count, chars[i], ...splitCount);
      index = index + splitCount.length + 1;
      count = 1;
      i = index - 1;
    } else {
      count++;
    }
  }
};

compress(["a", "b", "c"]);
