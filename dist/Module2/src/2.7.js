"use strict";
{
    const person1 = "bike"; // ctrl+space
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'abc',
        age: 23,
        address: 'abcd'
    };
    getPropertyValue(user, 'address');
}
