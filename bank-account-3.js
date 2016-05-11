var accounts = [];

var createAccount = function(account) {
	accounts.push(account);
	return account;
}

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
function deposit(account, amount) {
	account.balance += amount;
}

// create a withdrawal function (account arg, amount)
function withdrawal(account, amount) {
	account.balance -= amount;
}

// create a getBalance function (account)
function getBalance(account) {
	return account.balance;
}












