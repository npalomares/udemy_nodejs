var isValid = true;

var toggleBoolean = function(booleanVar) {
	if(typeof booleanVar === 'boolean') {
		return !booleanVar;
	} else {
		console.log("Warning this is not a boolean!");
	}
}
var newBoolean = toggleBoolean('andrew');
console.log(newBoolean);