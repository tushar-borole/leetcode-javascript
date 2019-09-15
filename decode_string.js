//https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let isInteger = Number.isInteger(parseInt(s[i]));
    let numberString = "";
    while (isInteger) {
      isInteger = Number.isInteger(parseInt(s[i + 1]));
      numberString = numberString + s[i];
      i++;
      if (!isInteger) {
        arr.push(numberString);
      }
    }
    arr.push(s[i]);
  }
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current === "]") {
      let lastElement = stack.shift();
      let tempString = lastElement;
      while (lastElement !== "[") {
        lastElement = stack.shift();
        if (lastElement !== "[") {
          tempString = lastElement + tempString;
        }
      }
      const number = stack.shift();
      const tempOut = tempString
        .split("")
        .reverse()
        .join("")
        .repeat(number)
        .split(""); //?
      stack.unshift(...tempOut);
    } else {
      stack.unshift(current);
    }
  }

  return stack.reverse().join("");
};

decodeString("100[abc]3[cd]ef"); //?
