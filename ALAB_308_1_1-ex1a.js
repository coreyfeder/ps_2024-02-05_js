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
const DEBUG = 0;


function validInputFormat(numbers) {
    return numbers instanceof Array && numbers.length > 0;
};

function validNumberOfInputs(numbers, target = COUNT_OF_INPUTS) {
    return numbers.length == target;
};

function valuesSumEqualsTarget(numbers, target = SUM_OF_NUMBERS_EQUALS) {
    function addItUp(a, b) { return a + b; };    
    return numbers.reduce(addItUp) == target;
};    

function valuesContainEnoughOdds(numbers, target = COUNT_OF_ODDS_MINIMUM) {
    function isOdd(n) { return n & 1 == 1; };
    return numbers.filter(isOdd).length >= target;
};    

function valuesWithinMaxLimit(numbers, target = SINGLE_NUMBER_MAX) {
    function exceedsMaxLimit(n) { return n > target; };
    return numbers.filter(exceedsMaxLimit).length == 0;
};    

function valuesAreUnique(numbers) {
    return numbers.length == new Set(numbers).size;
};    

function validateInputs(numbers) {
    // takes an array of numbers
    let result = true;
    result = validInputFormat(numbers);
    result = result && validNumberOfInputs(numbers);
    result = result && valuesSumEqualsTarget(numbers);
    result = result && valuesContainEnoughOdds(numbers);
    result = result && valuesWithinMaxLimit(numbers);
    result = result && valuesAreUnique(numbers);
    if (DEBUG > 1) {
        if (!validInputFormat(numbers)) {
            console.log("  Test failure: validInputFormat");
        } else {
            validNumberOfInputs(numbers) || console.log("  Test failure: validNumberOfInputs");
            valuesSumEqualsTarget(numbers) || console.log("  Test failure: valuesSumEqualsTarget");
            valuesContainEnoughOdds(numbers) || console.log("  Test failure: valuesContainEnoughOdds");
            valuesWithinMaxLimit(numbers) || console.log("  Test failure: valuesWithinMaxLimit");
            valuesAreUnique(numbers) || console.log("  Test failure: valuesAreUnique");
        };
    };
    // console.log(`Inputs are ${(!result && "NOT " || "")}valid!`);
    return result;
};


function unitTests() {
    // import { runTest } from "./test.mjs";
    // usage:
    //  runTest(
    //      testFunction,               function to test
    //      testData,                   test data contained in an Array
    //      expectedReturnValue,        value the function is expected to return
    //      testDescription = "",   descriptive name of the test;
    //                                  e.g., "Nulls in input data" or "Missing authorization"
    //  )
    // Fuck, I can't get the import right now.

    function runTest(
        testFunction,
        testData,
        expectedReturnValue,
        testDescription = null,
    ) {
        // if (testDescription) {
        //     console.log(`Test: ${testFunction.name}`);
        // } else {
        //     console.log(`Test: ${testFunction.name}: ${testDescription}`);
        // }
        console.log(`Test: ${testFunction.name}: ${testDescription} (${testData} should return ${expectedReturnValue})`);
        let actualReturnValue = null;
        let result = null;
        try {
            actualReturnValue = testFunction(testData);
            result = actualReturnValue == expectedReturnValue;
            // TODO: consider whether this should be `===`. Need a separate test?
        } catch (error) {
            console.error(error);
            result = false;
        } finally {
            if (result == false) {
                console.log(' → FAIL');
            } else if (result == true) {
                console.log(' → pass');
            } else {
                console.log(' → !! What the hell just happened? !!');
            };
        };
        return result;
    };
    

    runTest(validateInputs, [11, 12, 13, 14], true, "Simple success case");
    runTest(validateInputs, [-1, 24, 12, 15], true, "Negative inputs acceptable (?)");
    // number of inputs
    runTest(validateInputs, [17, 20, 13], false, "Too few inputs");
    runTest(validateInputs, [17, 9, 11, 13, 0], false, "Too many inputs");
    runTest(validateInputs, [], false, "No inputs");
    // sum of inputs
    runTest(validateInputs, [11, 12, 13, 15], false, "Sum does not match expected value");
    runTest(validateInputs, [11, 12.1, 13, 14.1], false, "Float sum does not match expected value");
    // max limit
    runTest(validateInputs, [1, 2, 13, 34], false, "Max limit exceeded");
    runTest(validateInputs, [1, 2, 13, 33.3455], false, "Max limit exceeded with floats");
    // uniqueness
    runTest(validateInputs, [12, 15, 12, 11], false, "Arguments are not unique");
    // number of odd inputs
    runTest(validateInputs, [9, 11, 13, 17], true, "Four odds");
    runTest(validateInputs, [10, 11, 12, 17], true, "Two odds");
    runTest(validateInputs, [10, 20, 12, 8], false, "Zero odds");
    
    // unknown how things will act
    runTest(validateInputs, [11.0, 12, 13.0, 14], true, "Odds are Floats");
    runTest(validateInputs, [11.0, 12.0, 13.0, 14.0], true, "All are Floats");
    runTest(validateInputs, [11.0, 11.999999999999999, 13.0, 14.000000000000001], true, "Imprecise Floats");
    runTest(validateInputs, [10.5, 11.5, 13, 15], true, "Values are otherwise-valid Floats (?)");
    runTest(validateInputs, ["11", "12", "13", "14"], false, "Inputs are coercable strings");
};

unitTests()
