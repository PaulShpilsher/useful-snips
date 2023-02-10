
/**
 * Pure function memorization
 * IMPORTANT: limited to single argument 
 * @param {*} fn 
 * @returns 
 */
const memo = (fn) => {
  const cache = {};
  return (...args) => {
    const key = args[0];
    if (key in cache) {
      console.log("cache hit", key);
      return cache[key];
    } else {
      console.log("cache miss", key);
      const value = fn(...args);
      cache[key] = value;
      return value;
    }
  };
};

const factorial = memo((x) => {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
});
console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
