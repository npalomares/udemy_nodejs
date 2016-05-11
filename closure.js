/*
createAdder(baseNumber)
	return function (numberToAdd)

		add up baseNumber & numberToAdd
		return resule;
*/

function createAdder(baseNumber) {
	return function (numberToAdd) {
		return baseNumber + numberToAdd;
		//console.log('Number to add: ' + baseNumber);
	}
}

var addTen = createAdder(10);
console.log(addTen(2)); //12
console.log(addTen(0)); //10

// function greetMaker(name) {
// 	function greet() {
// 		console.log('Hello ' + name + '!');
// 	} 
// 	return greet;
// }

// var greetNicholas = greetMaker('Nicholas');
// greetNicholas();

// var greetWorld = greetMaker('World');
// greetWorld();