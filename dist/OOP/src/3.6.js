"use strict";
{
    {
        // getter setter
        class BankAccount {
            // protected _balance: number; // child class can not get private attributes,but they can get protected attributes
            constructor(id, name, balance) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }
            set addMoney(amount) {
                this._balance = this._balance + amount;
            }
            get balance() {
                return this._balance;
            }
        }
        const middleClassMan = new BankAccount(111, 'Mr. Middle Man', 200000);
        console.log(middleClassMan);
        // middleClassMan.addMoney(500);
        middleClassMan.addMoney = 500;
        console.log(middleClassMan);
        // const myBalance = middleClassMan.getBalance();
        const myBalance = middleClassMan.balance;
        console.log(myBalance);
    }
}
