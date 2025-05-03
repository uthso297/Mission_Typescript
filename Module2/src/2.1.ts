{
    // type assertion
    let anything: any;

    anything = "Next Level Web Development";
    (anything as string).toLowerCase();
    console.log(anything);

    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000
            return `The converted value is ${convertedValue}`;
        }
        if (typeof value === 'number') {
            return value * 1000
        }

    }

    const result1 = kgToGm(1) as number;
    console.log(result1);
    const result2 = kgToGm("1") as string;
    console.log(result2);

    type CustomError = {
        message: string;
    }
    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }

}