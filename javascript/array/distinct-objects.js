/**
 * Get distinct (unique) objects from array
 * 
 * Note: limitation: objects must not have circular references
 * @param {Array<object>} arr 
 * @returns an array of unique objects 
 */
const distinctObjects = (arr) => [...new Set(arr.map(JSON.stringify))].map(JSON.parse);

// Example:

const objects = [{ key: 'value' }, { key2: 'value2' }, { key: 'value' }, { key3: 'value3' }];

console.log(distinctObjects(objects)); // [ { key: 'value' }, { key2: 'value2' }, { key3: 'value3' } ]
