class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    accountInfo() {
        console.log(`Dansni dugaar: ${this.accountNumber}`);
        console.log(`dans ezemshigch: ${this.accountHolder}`);
        console.log(`Dansni uldegedel: ${this.balance}`);
    }
    deposit(orlogo) {
        this.balance = orlogo;
        console.log(`tani dansand ${this.balance} togrog bolj nemegdlee`);
    }
    withdraw(zarlaga) {
        this.balance = zarlaga;
        console.log(`tani dansanaas ${this.balance} togrog asagdlaa`);
    }
}

let acc = new BankAccount(247823786, 'od', 2345);
acc.accountInfo();
acc.deposit(1200);
acc.accountInfo();

acc.accountInfo();
acc.withdraw(500);
acc.accountInfo();




