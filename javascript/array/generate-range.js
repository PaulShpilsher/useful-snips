/**
 * Generate Range of Numbers
 */
const generageRange = (lo, hi) => [...new Array(hi + 1).keys()].slice(lo);

console.log(generageRange(10, 20));
// output: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
