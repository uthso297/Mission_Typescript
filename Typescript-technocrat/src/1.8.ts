{
    //object destructuring

    const user = {
        id: 3002,
        name: {
            firstName: 'Sihab',
            middleName: 'Mahmud',
            lastName: 'Uthso',
        },
        contactNo: '01700000000',
        address: 'BD',

    }

    const { contactNo: phoneNumber, name: { middleName: midName } } = user

    console.log(phoneNumber, midName);

    // array destructuring

    const myFriends = ['Chandler', 'Joey', 'Ross', 'Rachel', 'Richard'];
    const [a, b, bideshiBondhu, ...rest] = myFriends
    console.log(bideshiBondhu);
    console.log(rest);
}   
