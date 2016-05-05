var grades = [48, 100, 22, 75, 97];
var totalGrade = 0;

// forEach iterate and add grade to totalGrade
grades.forEach(function(grade) {
	totalGrade = totalGrade + grade;
	console.log('Current total grade is ' + totalGrade);
});

//console.log total grade / total number of grades
var average = totalGrade / grades.length;
console.log('Average is ' + average);