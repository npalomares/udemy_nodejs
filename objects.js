var person = {};

person.firstName = 'Nicholas';
person.lastName = 'Palomares';
person.age = 34;
function greetUser( person ) {
	console.log('Hello ' + person.firstName + ' ' + person.lastName);
}

greetUser(person);