var account = {
	balance: 0
};

// create a deposit function (account and amount)
var deposit = function(account, amount) {
	account.balance += amount;
}

// create a withdrawal function (account arg, amount)
var widthdrawal = function(account, amount) {
	account.balance -= amount;
}

// create a getBalance function (account)
var getBalance = function(account) {
	return account.balance;
}

deposit(account, 1000);
console.log(getBalance(account));

widthdrawal(account, 121);
console.log(getBalance(account));