{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const rest1 = createArray('Bangladesh');

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const resGeneric = createArrayWithGeneric<string>('SWE');

    type User = {
        id: number;
        name: string;
    }

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mr. Uthso'
    })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res2 = createArrayWithTuple<string, number>("BD", 232)
    const res3 = createArrayWithTuple<string, { continent: string }>("BD", { continent: 'Asia' })

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next Level Web Development'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'Mr X', email: 'x@gmail.com', devType: 'Full Stack' })

    console.log(student1);
    // 
}