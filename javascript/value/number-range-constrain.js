/**
 * Constrain number to a [min, max] range
 * if the number is less than a min value the min value used
 * if the number is greater than a max value the max value used
 * @param {number} num number to constrain in [min,max] range
 * @param {number} min low boundary
 * @param {number} max high boundary
 * @returns constrained value
 */
const constrain = (num, min, max) => Math.min(Math.max(num, min), max);

// Examples:
console.log(constrain(4, 1, 5));    // 4
console.log(constrain(4, 5, 10));   // 5
console.log(constrain(4, -20, -6)); // -6
