{
    // type guards
    // typeOf --> type guard

    type AlphaNumeric = string | number

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric => {

        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString()
        }

    }

    const result1 = add(5, 6);
    console.log(result1);

    const result2 = add('5', '4');
    console.log(result2);

    const result3 = add('5', 4);
    console.log(result3);

    // in guard

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        // user.name // here only name exist but role doesn't
        if ('role' in user) {
            console.log(`My name is ${user.name} and role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    }
    const normaluser: NormalUser = {
        name: 'Mr. Normal vai'
    }

    const adminUser: AdminUser = {
        name: 'Mr Admin Vai',
        role: 'admin'
    }

    getUser(normaluser);
    getUser(adminUser);

}

// tsnd --respawn OOP/src/3.3.ts