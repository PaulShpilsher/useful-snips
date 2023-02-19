/**
 * Example how to iterate through object's key/value pairs
 */

const srcObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

const dstObject = Object.entries(srcObject).map(
  ([key, value]) => `${key}: ${value}`
);

console.log(dstObject); // [ 'key1: value1', 'key2: value2', 'key3: value3' ]
