
/**
 * Return a new function that executes the original function after a previously defined delay.
 * If the function is called again, the timeout will be reset, and calling the function will be postponed.
 * @param {function} func 
 * @param {number} delay 
 * @returns 
 */
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}


// Example

const test = (i) => console.log(i);

const debouncedTest = debounce(test, 250);

debouncedTest(1);
debouncedTest(2);
debouncedTest(3);

// output: 3
