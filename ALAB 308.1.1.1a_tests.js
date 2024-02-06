function test() {
    function runTest(
        testName,
        testData,
        testFunction = validateInputs,
    ) {
        result = false;
        console.log(`Running ${testFunction} on ${testData}:`);
        try {
            result = testFunction(...testData);
        } catch (error) {
            console.error(error);
        } finally {
            console.log(`  result: ${result}`);
            return result;
        };
    };

    // function testValidNumberOfInputs() {...};
    // function testValuesSumEqualsTarget() {...};
    // function testValuesContainEnoughOdds() {...};
    // function testValuesWithinMaxLimit() {...};
    // function testValuesAreUnique() {...};
    // function testValidateInputs() {...};

    // test number of inputs
    // test sum equals target
    // test contains enough odds
    // test within max limit
    // test values are unique
    // test fails if not given array of numbers
    // test values can be integers
    // test values can be floats
    //      (no rounding threshold means there WILL be a margin of error!)
    // test behavior when given an array of strings that cast to numbers        
    
        testData = [11, 12, 13, 14];
        runTest(testData);
};
