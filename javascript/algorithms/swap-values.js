/**
 * Swap two values using destructuring
 * [x, y] = [y, x];
 */

let x = "foo";
let y = "bar";

console.log(`x=${x}, y=${y}`);
// output: x=foo, y=bar

[x, y] = [y, x];

console.log(`x=${x}, y=${y}`);
// output: x=bar, y=foo