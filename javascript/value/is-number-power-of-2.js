/**
 * Is the number a power of 2
 * 
 * @param {number} value 
 * @returns true/false
 */
const isNumberPowerOfTwo = (value) => !!value && (value & (value-1)) === 0;


console.log(isNumberPowerOfTwo(128));   // true
console.log(isNumberPowerOfTwo(127));   // false
