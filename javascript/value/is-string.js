/**
 * Is string
 */
const isString = (value) => typeof value === 'string';

console.log(isString(null));    // output: false 
console.log(isString(NaN));     // output: false
console.log(isString({}));      // output: false
console.log(isString([]));      // output: false
console.log(isString(42));      // output: false
console.log(isString('text'));  // output: true
console.log(isString(''));  // output: true


