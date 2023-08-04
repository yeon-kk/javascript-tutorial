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

//(3)
const sumToFormula = (n) => {
  return (n * (n + 1)) / 2;
};
alert(sumToFormula(100));

//task2
const factorial = (n) => {
  if (n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
};
alert(factorial(5));

//task3
// 재귀의 경우 시간이 많이 소요됨
const fibo = (n) => {
  if (n < 1) return;
  if (n == 1) return 1;
  else if (n == 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
};
const fib = (n) => {
  const dp = [];
  dp.push(0);
  dp.push(1);
  dp.push(1);
  for (let i = 3; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }
  return dp[n];
};
alert(fib(77));
