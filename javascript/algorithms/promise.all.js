/**
 * Wait for multiple Promises/async to finish
 *
 */

const tasks = [
  Promise.resolve("Task 1 complete"),
  new Promise((resolve) => setTimeout(() => resolve("Task 2 complete")), 1000),
];

(async () => {

    const results = await Promise.all(tasks);
    console.log(results);
    // output: [ 'Task 1 complete', 'Tasl 2 complete' ]

})();
