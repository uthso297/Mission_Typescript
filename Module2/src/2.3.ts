{
    // generic type

    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [3, 6, 8]
    // const rollNumbers: Array<number> = [3, 6, 8]
    const rollNumbers: GenericArray<number> = [3, 6, 8]


    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr Z'];
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr Z'];

    // const boolArray: boolean[] = [true, false, true]
    // const boolArray: Array<boolean> = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    interface User {
        name: string;
        age: number
    }
    // const user: GenericArray<{ name: string, age: number }> = [
    const user: GenericArray<User> = [
        {
            name: 'Sihab',
            age: 100,
        },
        {
            name: 'uthso',
            age: 200,
        }
    ]

    // generic tuple

    type GenericTuple<X, Y> = [X, Y];

    // const manush: [string, string] = ['Mr X', 'Mr Y'];

    const manush: GenericTuple<string, string> = ['Mr X', 'Mr Y'];

    const UserWithID: GenericTuple<number, { name: string, email: string }> = [1234, { name: 'Uthso', email: 'uthso119464@gmail.com' }];


}