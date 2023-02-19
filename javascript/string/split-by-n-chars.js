/**
 *
 * @param {number} numberOfChars - by how many characters we want to split a string
 * @returns string[]
 */
const splitByNChars = (str, numberOfChars) =>
  str.match(new RegExp(`.{1,${numberOfChars}}`, "g"));


// Example:
const str = "asdfghjklmnopq";
console.log(splitByNChars(str, 3)); // [ 'asd', 'fgh', 'jkl', 'mno', 'pq' ]
