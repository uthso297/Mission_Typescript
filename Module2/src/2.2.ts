{
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    type UserWithRole = User1 & { role: string }

    const user2: UserWithRole = {
        name: 'Uthso',
        age: 20,
        role: 'Manager'
    }

    console.log(user2);

    interface User2 {
        name: string;
        age: number;
    }
    // interface UserWithRole2 extends User1 (interface can also extend type)
    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: User2 = {
        name: 'Uthso',
        age: 20,
    }

    const user3: UserWithRole2 = {
        name: 'Sihab',
        age: 24,
        role: 'Admin'
    }


    console.log(user1);
    console.log(user3);

    // array type interface

    type Roll1 = number[];

    const rollNumber: Roll1 = [1, 2, 3];

    interface Roll2 {
        [index: number]: number;
    }
    const rollNumber1: Roll2 = [1, 2, 3];

    type Add = (num1: number, num2: number) => number;

    interface Add1 {
        (num1: number, num2: number): number;
    }

    const add: Add = (num1, num2) => num1 + num2;
    const add1: Add1 = (num1, num2) => num1 + num2;

}