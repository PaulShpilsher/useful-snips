/**
 * Flatten an array
 */

const src = [0, 1, 2, 3, [4, 5, [6, 7, "foo", "bar"]]];

const dest = src.flat(Infinity);

console.log(dest);
// output:
// [
//     0,     1, 2,
//     3,     4, 5,
//     6,     7, 'foo',
//     'bar'
// ]
