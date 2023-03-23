
function foo() {
  const argumentsArray = Array.prototype.slice.call(arguments);
  
  console.log({arguments, argumentsArray});
}

foo();  // { arguments: [Arguments] {}, argumentsArray: [] }


foo(1,"two", Math.PI, {a:"b"}); // {
                                //   arguments: [Arguments] {
                                //     '0': 1,
                                //     '1': 'two',
                                //     '2': 3.141592653589793,
                                //     '3': { a: 'b' }
                                //   },
                                //   argumentsArray: [ 1, 'two', 3.141592653589793, { a: 'b' } ]
                                // }
