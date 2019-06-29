/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let openBrackets = "({[";
  let closeBrackets = ")}]";

  let openStack = [];

  for (let val of s) {
    let openIndex = openBrackets.indexOf(val);
    let closeIndex = closeBrackets.indexOf(val);

    if (openIndex > -1) {
      openStack.unshift(openIndex);
    }

    if (closeIndex > -1) {
      if (closeIndex === openStack[0]) {
        openStack.shift();
      } else {
        return false;
      }
    }
  }

  return openStack.length === 0;
};

isValid("["); //?
