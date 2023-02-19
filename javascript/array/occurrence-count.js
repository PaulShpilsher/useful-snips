
/**
 * Counts of unique element occurrences in an array
 *  
 * @param {Array} arr array of values to count
 * @returns 
 */
const occurrenceCount = (arr) => arr.reduce(
  (a, b) => ((a[b] = (a[b] | 0) + 1), a),
  {}
);

// Example:

const src = [
    "a",
    "b",
    "c",
    "c",
    null,
    "d",
    "a",
    "a",
    "e",
    undefined,
    "f",
    "e",
    "f",
    undefined,
    "g",
    "f",
    "f",
    "f",
  ];
  
const dst = occurrenceCount(src);
  
console.log(dst); // { a: 3, b: 1, c: 2, null: 1, d: 1, e: 2, undefined: 2, f: 5, g: 1 }
