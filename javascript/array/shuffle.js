/**
 * Shuffles arrray values
 */
const shuffle = (arr) => arr.sort(() => Math.random()-0.5);


const src = [1,2,'three', 300, Math.PI, { foo: 'bar'}];
const dest = shuffle(src);

// note: your results may vary )
console.log(dest); // [ 1, 3.141592653589793, { foo: 'bar' }, 300, 'three', 2 ]   
