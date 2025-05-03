{
    // spread operator

    const bros1: string[] = ['Mir', 'Firoz', 'Mijan'];
    const bros2: string[] = ['Tonmoy', 'Nahid', 'Rahat'];

    console.log(bros1);
    bros1.push(...bros2);
    console.log(bros1);

    const mentors = {
        typescript: 'Mezbah',
        redux: 'Mir',
        DBMS: 'Mijan'
    }

    console.log(mentors);

    const mentors2 = {
        prisma: 'Firoz',
        nextjs: 'Tonmoy',
        cloud: 'Nahid'
    }

    console.log(mentors2);

    const mentorList = {
        ...mentors,
        ...mentors2
    }
    console.log(mentorList);

    // rest operator
    // const greetFriends = (friend1: string, friend2: string, friend3: string) => {
    //     console.log(`Hi ${friend1} ${friend2} ${friend3}`);
    // }

    const greetFriends = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends('Sihab', 'Mahmud', 'Uthso');
}