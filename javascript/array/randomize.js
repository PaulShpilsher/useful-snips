/**
 * Randomize arrray values
 */
const randomize = (arr) => arr.sort(() => Math.random()-0.5);


const src = [1,2,'three', 300, Math.PI, { foo: 'bar'}];

const dest = randomize(src);

console.log(dest);
// output: [ 1, 3.141592653589793, { foo: 'bar' }, 300, 'three', 2 ]
