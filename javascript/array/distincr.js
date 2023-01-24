/**
 * Get distinct (unique values) from array
 *
 */

const disinct = (arr) => [...new Set(arr)];

const numbers = [1, 1, 2, 3, 1, 2, 3];

console.log(disinct(numbers));
// output: [ 1, 2, 3 ]

const words = ["foo", "bar", "bar", "foo"];

console.log(disinct(words));
// output: [ 'foo', 'bar' ]
