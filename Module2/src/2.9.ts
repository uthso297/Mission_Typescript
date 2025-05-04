{
    // condiotional types

    type a1 = null;
    type a2 = undefined;

    type x = a1 extends null ? true : false  // conditional type

    type y = a1 extends null ? true : a2 extends undefined ? undefined : any   // nested conditional type

    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // type CheckVehicle<T> = T extends 'bike' | 'car' | 'ship' ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasTractor = CheckVehicle<"tractor">
    type HasPlane = CheckVehicle<"plane">

    // 
}