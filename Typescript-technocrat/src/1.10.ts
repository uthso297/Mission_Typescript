{
    // union types
    // string literal types

    // type FrontendDeveloper = 'fakibajDev' | 'juniorDev';
    // type FullStackDeveloper = 'fakibajDev' | 'expertDev';

    // type Developer = FrontendDeveloper | FullStackDeveloper;

    // const developer: Developer = 'fakibajDev'
    // console.log(developer);

    // const newDev : FrontendDeveloper = 'fakibajDev';
    // or
    // const newDev: FrontendDeveloper = 'juniorDev';

    type User = {
        name: string;
        email: string;
        gender: 'Male' | 'Female';
        bloodGroup: 'A+' | 'O+' | 'AB+' | 'B+'
    }

    const user1: User = {
        name: 'Iccha Fokinni',
        email: 'iccha@pokinni.com',
        gender: 'Male',
        bloodGroup: 'B+',
    }
    console.log(user1);

    // intersection types
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    };

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    };

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    };
}