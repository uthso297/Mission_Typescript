"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything.toLowerCase();
    console.log(anything);
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1);
    console.log(result1);
    const result2 = kgToGm("1");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
