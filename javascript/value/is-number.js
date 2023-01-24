/**
 * Is number
 */
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

console.log(isNumber(null));    // output: false 
console.log(isNumber(NaN));     // output: false
console.log(isNumber({}));      // output: false
console.log(isNumber([]));      // output: false
console.log(isNumber('text'));  // output: false

console.log(isNumber(42));      // output: true
console.log(isNumber(Math.PI)); // output: true
