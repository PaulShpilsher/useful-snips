/**
 * Split string by different chars
 * @param {string} str input string 
 * @returns an array of strings 
 */
const splitByDiffentChars = (str) => str.match(/(.)\1*/g);

// Example:
const str = "abbcccdeefghhiijkllla";

console.log(splitByDiffentChars(str));
// output: 
//  [
//   'a', 'bb', 'ccc',
//   'd', 'ee', 'f',
//   'g', 'hh', 'ii',
//   'j', 'k',  'lll',
//   'a'
//  ] 
