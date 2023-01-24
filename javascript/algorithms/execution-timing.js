/**
 * Console timing
 */

console.time('timing-my-code');

for(let i = 0; i < 1e6; ++i) {
    Math.sqrt(i);
}

console.timeEnd('timing-my-code');
// output: timing-my-code: 3.976ms
