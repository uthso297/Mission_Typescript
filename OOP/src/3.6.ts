{
    {

        // getter setter

        class BankAccount {
            public readonly id: number;
            public name: string;
            private _balance: number;
            // protected _balance: number; // child class can not get private attributes,but they can get protected attributes

            constructor(id: number, name: string, balance: number) {
                this.id = id;
                this.name = name;
                this._balance = balance;
            }

            set addMoney(amount: number) {
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
        const myBalance = middleClassMan.balance
        console.log(myBalance);

    }
}