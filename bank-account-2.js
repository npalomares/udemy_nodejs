var accounts = [];

//Account Object
// balance
// username

//create a new account
//push onto accounts array
//return account
var createAccount = function(account) {
	accounts.push(account);
	return account;
}

//function getAccount(username - string)
//find matching account using forEach function
//if username matches a username in account object return account
//else "nothing matches"
var getAccount = function(username) {
	var matchedAccount;
	
	accounts.forEach(function(account) {
		if(account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

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
var nicksAccount = createAccount({
	username: 'npalomares',
	balance: 0
});

deposit(nicksAccount, 1000);
console.log(getBalance(nicksAccount));

widthdrawal(nicksAccount, 45);
console.log(getBalance(nicksAccount));


var existingAccount = getAccount('npalomares');
console.log(getBalance(nicksAccount));

//create a new account
var billysAccount = createAccount({
	username: 'billy007',
	balance: 23
});

var existingBillysAccount = getAccount('billy007');
//console.log(exitingBillysAccount);

console.log(accounts);












