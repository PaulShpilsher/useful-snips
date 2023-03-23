/**
 * Finds duplicate items in the array
 * @param {Array} arr
 * @returns array of items that are not unique
 */
const findDuplicates = (arr) => [
  ...new Set(arr.filter((item, index) => arr.indexOf(item) !== index)),
];

console.log(findDuplicates([1, 2, 3, 2, 5, 3])); // [2,3]
console.log(findDuplicates([1, 2, 3, 4, 5, 6])); // []
