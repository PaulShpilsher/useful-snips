/**
 * Is the string a palindrome
 * 
 * @param {string} value 
 * @returns true/false
 */
const isPalindrome = (value) => value === value.split('').reverse().join('');

console.log(isPalindrome('kayak')); // true
console.log(isPalindrome('boat'));  // false
