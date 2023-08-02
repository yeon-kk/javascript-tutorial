// task1
//(1)
const sumToFor = (n) => {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    result += i;
  }
  return result;
};
alert(sumToFor(100));

//(2)
const sumToRecursion = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n + sumToRecursion(n - 1);
  }
};
alert(sumToRecursion(100));
