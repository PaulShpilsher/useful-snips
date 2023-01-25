let count = 0;
const fibonacciWithMemo = (n) => {
  // Check the cache
  if (typeof fibonacciWithMemo[n] !== "undefined") {
    return fibonacciWithMemo[n];
  }

  ++count;
  if (n > 2) {
    const result = fibonacciWithMemo(n - 2) + fibonacciWithMemo(n - 1);
    // Cache the results of the calculation
    fibonacciWithMemo[n] = result;
    return result;
  }
  else {
    return n === 0 ? 0:1;
  }
};

console.log(fibonacciWithMemo(100)); 
// output: 354224848179262000000
