function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;

  this.deposit = (amount) => {
    console.log(`Deposited: $${amount} in ${this.customerName}'s account.`);
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
    console.log(
      `Withdrawed Amount: $${amount}, Current balance: $${this.balance}`,
    );
  };
}

/* Creating Object using new keyword
const vivekAccount = new BankAccount("Vivek", 2150);
const johnAccount = new BankAccount("John Doe", 5664);

johnAccount.deposit(5000);
vivekAccount.withdraw(500);
console.log(johnAccount);
*/

const accounts = [];
const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const account = new BankAccount(customerName.value, +balance.value);
  accounts.push(account);
  console.log(accounts);
});

/* ----------------Deposit Money------------------ */

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

depositForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = accounts.find(
    (acc) => acc.accountNumber === Number(accountNumber.value),
  );
  account.deposit(Number(amount.value));
});

/*----------------- Withdraw Money ----------------- */
const withdrawForm = document.querySelector("#withdrawForm");
const accountNumberToWithdraw = document.querySelector(
  "#accountNumberToWithdraw",
);
const amountWithdraw = document.querySelector("#amountWithdraw");

withdrawForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const account = accounts.find(
    (acc) => acc.accountNumber === Number(accountNumberToWithdraw.value),
  );

  account.withdraw(Number(amountWithdraw.value));
});
