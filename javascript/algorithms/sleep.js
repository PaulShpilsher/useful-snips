/**
 * An awaitable sleep / pause
 */
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// example
(async () => {
  await sleep(3000);
})();
