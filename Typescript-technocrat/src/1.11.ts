{
    // ternary || optional cahining || nullish coalescing operator

    const age: number = 18;
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

    const result1 = isAuthenicated ?? 'Guest';
    const result2 = isAuthenicated ? isAuthenicated : 'Guest';
    console.log({ result1 }, { result2 });

    // optional cahining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentaddress: string;
            permanentAddress?: string;
        };
    };

    const user: User = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentaddress: "ctg town",
            // permanentAddress: "dhk"
        },
    };

    const permanentAddress =
        user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAddress });
}