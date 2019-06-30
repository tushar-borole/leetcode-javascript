var factorial = function(a, val = a) {
  if (a == 1) {
    return val;
  }
  a--;

  return factorial(a, val * a);
};

console.log(factorial(5));
