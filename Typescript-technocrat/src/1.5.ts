// Reference type --> Object

const user: {
    company: 'PH'; // no change,always the value will be PH ---> different type --> literal types
    // readonly company: string; //also works same
    firstName: string;
    middleName?: string; //optional type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'PH',
    firstName: 'Sihab',
    middleName: 'Mahmud',
    lastName: 'Uthso',
    isMarried: false,
}