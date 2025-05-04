{
    // generic constraint with key of operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    // type Owner = 'bike' | 'car' | 'ship';

    type Owner = keyof Vehicle;

    const person1: Owner = "bike"; // ctrl+space

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const user = {
        name: 'abc',
        age: 23,
        address: 'abcd'
    }

    getPropertyValue(user, 'address')

}