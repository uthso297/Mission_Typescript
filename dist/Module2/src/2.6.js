"use strict";
{
    // constraints
    const addCourseToStudent = (student) => {
        const course = 'Next Level Web Development';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStudent({ id: 222, name: 'Mr X', email: 'x@gmail.com', devType: 'Full Stack' });
    const student2 = addCourseToStudent({ id: 232, name: 'Mr Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' });
    // const student3 = addCourseToStudent({ emni: 'emni' }) // must have student id,name,email
    console.log(student1);
    console.log(student2);
}
