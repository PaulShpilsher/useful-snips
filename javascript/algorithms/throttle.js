/**
 * Throttle function limits the rate at which the function is executed.
 * This means it will forbid executing if the function was invoked before within a given period.
 * It guarantees that a certain function runs at a consistent rate and won’t be triggered too often.
 * 
 * @param {function} func 
 * @param {number} delay 
 */
const throttle = (func, delay) => {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};


// Example

const test = (i) => console.log(i);

const throttleTest = throttle(test, 250);

throttleTest(1);
throttleTest(2);
throttleTest(3);

// output: 1
