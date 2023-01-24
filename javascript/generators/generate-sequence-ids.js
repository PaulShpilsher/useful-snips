/**
 * Using generators to create sequential IDs
 */

function* sequenceIdGenerator() {
    let id = 0;
    while(true){
        yield id++;
    }
}

const generateId = sequenceIdGenerator();

console.log( generateId.next().value );
console.log( generateId.next().value );
console.log( generateId.next().value );

// output:
// 0
// 1
// 2
