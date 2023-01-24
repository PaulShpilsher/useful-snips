/**
 * Console timing
 */

const starTtime = performance.now();

for(let i = 0; i < 1e6; ++i) {
    Math.sqrt(i);
}

const endTtime = performance.now();
const elapsedTome = endTtime - starTtime;

console.log(`Execution took ${elapsedTome} ms`);
// output: Execution took 4.3875639997422695 ms
