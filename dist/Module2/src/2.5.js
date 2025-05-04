"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const rest1 = createArray('Bangladesh');
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const resGeneric = createArrayWithGeneric('SWE');
    const resGenericObj = createArrayWithGeneric({
        id: 222,
        name: 'Mr. Uthso'
    });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res2 = createArrayWithTuple("BD", 232);
    const res3 = createArrayWithTuple("BD", { continent: 'Asia' });
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ name: 'Mr X', email: 'x@gmail.com', devType: 'Full Stack' });
    console.log(student1);
    // 
}
