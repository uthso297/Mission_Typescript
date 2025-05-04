"use strict";
{
    // mapped types
    const arrofNumbers = [1, 4, 5];
    // const arrOfString: string[] = ['1', '4', '5']
    const arrOfString = arrofNumbers.map(number => number.toString());
    console.log(arrOfString);
}
