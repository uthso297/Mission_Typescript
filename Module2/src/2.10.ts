{
    // mapped types

    const arrofNumbers: number[] = [1, 4, 5]

    // const arrOfString: string[] = ['1', '4', '5']

    const arrOfString: string[] = arrofNumbers.map(number =>
        number.toString()
    )

    console.log(arrOfString);

    type AreaNumber = {
        height: number;
        width: number;
    }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    

}