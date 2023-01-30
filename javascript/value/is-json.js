/**
 * Is the string a valid JSON
 * 
 * @param {string} json a string to test
 * @returns true/falss
 */
const isJSON = (json) => {
  if (typeof json === "string") {
    try {
      JSON.parse(json);
      return true;
    } catch {}
  }
  return false;
};

console.log(isJSON('{"id": 1}'));               // true
console.log(isJSON('[1,2,"foo", {"id": 1}]'));  // true

console.log(isJSON("not a JSON string"));       // false
console.log(isJSON());                          // false
console.log(isJSON(null));                      // false
console.log(isJSON(42));                        // false
console.log(isJSON([77]));                      // false
console.log(isJSON({ a: 2 }));                  // false
