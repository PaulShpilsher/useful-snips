/**
 * Get distinct (unique values) from array
 *
 */

const distinct = (arr) => [...new Set(arr)];

const numbers = [1, 1, 2, 3, 1, 2, 3];

console.log(distinct(numbers));
// output: [ 1, 2, 3 ]

const words = ["foo", "bar", "bar", "foo"];

console.log(distinct(words));
// output: [ 'foo', 'bar' ]
