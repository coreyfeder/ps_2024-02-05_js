// We have four numbers that need to add up to 50. At least two of these numbers must 
// be odd. No number can be larger than 25, and each number must be unique.

/*
 * Given:
 * - we have four inputs
 * - the inputs are numbers
 * 
 * Implied:
 * - the numbers are rational
 * - the numbers are integers
 * 
 * Confirm:
 * - the sum of the inputs is 50
 * - two or more inputs are odd
 * - numbers are ≤ 25
 * - numbers are unique
 */

// https://codesandbox.io/embed/alab-301-1-1-activity-one-example-yhd2x8?fontsize=14&hidenavigation=1&module=%2Fsrc%2Findex.mjs&theme=dark&view=editor
// Copy the code from the editor into your own file to use as a starting point. Make sure to commit!
// ...No. Those things are hideous
// I want to make my own, EQUALLY hideous constructs.


const COUNT_OF_INPUTS = 4;
const SUM_OF_NUMBERS_EQUALS = 50;
const COUNT_OF_ODDS_MINIMUM = 2;
const SINGLE_NUMBER_MAX = 25;


function validNumberOfInputs(numbers, target = COUNT_OF_INPUTS) {
    return numbers.length == target;
};

function valuesSumEqualsTarget(numbers, target = SUM_OF_NUMBERS_EQUALS) {
    function addItUp(a, b) { return a + b; };    
    return numbers.reduce(addItUp) == target;
};    

function valuesContainEnoughOdds(numbers, target = COUNT_OF_ODDS_MINIMUM) {
    function isOdd(n) { return n % 2 == 0; };
    return numbers.filter(isOdd).length >= target;
};    

function valuesWithinMaxLimit(numbers, target = SINGLE_NUMBER_MAX) {
    function exceedsMaxLimit(n) { return n > target; };
    return numbers.filter(exceedsMaxLimit).length >= 0;
};    

function valuesAreUnique(numbers) {
    return numbers.length == new Set(numbers).size;
};    

function validateInputs(numbers) {
    // takes an array of numbers
    let result = true;
    result = result && validNumberOfInputs(numbers);
    result = result && valuesSumEqualsTarget(numbers);
    result = result && valuesContainEnoughOdds(numbers);
    result = result && valuesWithinMaxLimit(numbers);
    result = result && valuesAreUnique(numbers);
    // console.log(`Inputs are ${(!result && "NOT " || "")}valid!`);
    return result;
};


