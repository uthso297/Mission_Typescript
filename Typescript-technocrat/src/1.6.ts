// function
// {} --> scope problem solve
{

    function add(num1: number, num2: number): number {
        return num1 + num2;
    }

    console.log(add(8, 9));

    const addArrow = (num1: number, num2: number): number => num1 + num2

    // function inside object ---> method

    const poorUser = {
        name: 'uthso',
        balance: 0,
        addBalance(balance: number): string {
            return `My new balance is: ${this.balance + balance}`;
        }
    }

    console.log(poorUser);
    // array

    const arr: number[] = [1, 4, 10];
    console.log(arr);

    const newArray: number[] = arr.map((elem: number): number => elem * elem)
    console.log(newArray);


}