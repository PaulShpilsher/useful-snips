/**
 * Deep copy with JSOM
 * NOTE: JSON.stringify argument restrictions apply
 */

const deepCopy = (src) => JSON.parse(JSON.stringify(src));


const original = {
    name: 'Dr. Steven Strange',
    address: {
        street: '177A Bleecker Street',
        city: 'New York City'
    }
};

const cloned = deepCopy(original);
console.log(
    (original.name === cloned.name) &&
    (original.address.street === cloned.address.street) &&
    (original.address.city === cloned.address.city));
// output: true
