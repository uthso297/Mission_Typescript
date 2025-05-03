"use strict";
// function
// {} --> scope problem solve
{
    function add(num1, num2) {
        return num1 + num2;
    }
    console.log(add(8, 9));
    const addArrow = (num1, num2) => num1 + num2;
    // function inside object ---> method
    const poorUser = {
        name: 'uthso',
        balance: 0,
        addBalance(balance) {
            return `My new balance is: ${this.balance + balance}`;
        }
    };
    console.log(poorUser);
    // array
    const arr = [1, 4, 10];
    console.log(arr);
    const newArray = arr.map((elem) => elem * elem);
    console.log(newArray);
}
