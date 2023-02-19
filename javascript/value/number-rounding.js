/**
 * Rounding number to N fraction digits
 * 
 * @param {number} num - Number to round
 * @param {number} fractionDigits - Number of digits after the decimal point. Per MDN range 0 - 20 inclusive
 * @returns rounded number
 */
const toPrecision = (num, precision) => Number(num.toFixed(precision));

// Examples
// rounding Pi 3.141592653589793
console.log(toPrecision(Math.PI, 3)); // 3.142
console.log(toPrecision(Math.PI, 4)); // 3.1416
console.log(toPrecision(Math.PI, 5)); // 3.14159
