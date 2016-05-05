// function greetUser (name)
// if name exists say hello name
// if it is undefined say Hello World

var greetUser = function(name) {
	if (typeof name === 'undefined') {
		console.log('Hello ' + name + '!')
	} else {
		console.log('Hello World!');
	}
}

greetUser('Nicholas');
greetUser();