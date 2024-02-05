/*
 *  Tooling Around with Javascript
 *  ps_2024-02-05_js
 */

console.log("Script running.");

console.log("data types: number: integer: ", 9);
console.log("data types: number: float: ", 9.9);
console.log("data types: string: ", "nine");
console.log("data types: boolean: ", true);
console.log("data types: null: ", null);
console.log("data types: undefined: ", 0/0);

console.log(3+4);

let newNumber = 9;
newNumber = newNumber + 1;
console.log("newNumber: ", newNumber, " is a ", typeof(newNumber));
newNumber += 5;
console.log("newNumber: ", newNumber, " is a ", typeof(newNumber));
newNumber++;
console.log("newNumber: ", newNumber, " is a ", typeof(newNumber));
newNumber = newNumber + "text";
console.log("newNumber: ", newNumber, " is a ", typeof(newNumber));
