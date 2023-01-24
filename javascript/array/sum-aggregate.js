/**
 * Calculate the sum
 */

const src = [
  { name: "Alice", amount: 11 },
  { name: "Bob", amount: 22 },
  { name: "Charlie", amount: 33 },
  { name: "Dirk", amount: 44 },
];

const sum = src.reduce((accum, obj) => accum + obj.amount, 0);
console.log(sum);
// output: 110
