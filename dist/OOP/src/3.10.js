"use strict";
{
    class BankAccount {
        constructor(accountNumber, owner, initialBalance) {
            this.accountNumber = accountNumber;
            this.owner = owner;
            this.balance = initialBalance;
        }
        deposit(amount) {
            if (amount <= 0) {
                console.log("Deposit amount must be positive.");
                return;
            }
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        withdraw(amount) {
            if (amount > this.balance) {
                console.log("Insufficient balance.");
                return;
            }
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
        }
        getBalance() {
            return this.balance;
        }
        getAccountSummary() {
            return `Account: ${this.accountNumber}, Owner: ${this.owner}, Balance: $${this.balance}`;
        }
    }
    // Usage
    const account = new BankAccount("1234567890", "Alice", 1000);
    account.deposit(500);
    account.withdraw(200);
    console.log(account.getAccountSummary());
    // console.log(account.balance); // Property 'balance' is private
}
