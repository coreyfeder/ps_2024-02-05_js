export function runTest(
    testFunction,
    testData,
    expectedReturnValue,
    testDescription = null,
) {
    if (testDescription) {
        console.log(`Test: ${testFunction.name}`);
    } else {
        console.log(`Test: ${testFunction.name}: ${testDescription}`);
    }
    let actualReturnValue = null;
    let result = null;
    try {
        actualReturnValue = testFunction(...testData);
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
