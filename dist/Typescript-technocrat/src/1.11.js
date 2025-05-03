"use strict";
var _a, _b;
{
    // ternary || optional cahining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log('Adult');
    }
    else {
        console.log('Not adult');
    }
    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);
    console.log({ isAdult });
    // nullish coalescing operator
    // null / undefined ----> nullish coalescing operator
    // const isAuthenicated = null;
    const isAuthenicated = '';
    const result1 = isAuthenicated !== null && isAuthenicated !== void 0 ? isAuthenicated : 'Guest';
    const result2 = isAuthenicated ? isAuthenicated : 'Guest';
    console.log({ result1 }, { result2 });
    const user = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentaddress: "ctg town",
            // permanentAddress: "dhk"
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
}
