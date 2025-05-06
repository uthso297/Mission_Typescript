{
    // inheritance  ==> OOP
    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numofHours: number) {
            console.log(`${this.name} will sleep for ${numofHours} hours`);
        }
    }


    class Student extends Person {


        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }

    const student1 = new Student('Mr. Uthso', 20, 'Jadupur');
    console.log(student1);
    console.log(typeof student1);
    student1.getSleep(10);


    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }
        getSleep(numofHours: number) {
            console.log(`${this.name} will slepp for ${numofHours} hours`);
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass} classes`);
        }
    }

    const teacher = new Teacher('Mr Al Mamun', 35, 'DIU', 'Lecturer')
    console.log(teacher);
    teacher.takeClass(10);
}

// tsnd --respawn OOP/src/3.2.ts