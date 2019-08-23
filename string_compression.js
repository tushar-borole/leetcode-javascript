/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  chars.push("end");
  let count = 1;
  for (var i = 0; i < chars.indexOf("end"); i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
      continue;
    }

    chars.push(chars[i]);
    if (count !== 1) {
      chars.push(...count.toString().split(""));
    }

    count = 1;
  }

  chars.splice(0, chars.indexOf("end") + 1);
};
