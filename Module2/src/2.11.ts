{
    // utility types
    // pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        conmtactNo: string;
    }

    type NameAge = Pick<Person, 'name' | 'age'>

    // Omit

    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required

    type PersonRequired = Required<Person>

    // Partial

    type PersonPertial = Partial<Person>

    // readonly

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: 'Mr. XY',
        age: 2000,
        conmtactNo: '2333'
    }

    // person1.name = 'Mr. sss' , error because of readonly

    // Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>

    const obj1: MyObj = {
        a: 'a',
        b: 'b',
        c: 'c',
        // d: 4 , // will not work because string,string type
    }

    const EmptObj: Record<string, unknown> = {}
}