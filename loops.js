// var i = 0;
// var countLimit = 8;

// while(i < countLimit) {
// 	console.log('while: ' + i);
// 	i++;
// }

// for (i=0; i< countLimit; i++) { 
// 	console.log('for: ' + i);
// }


//create variables
//var startingPoint = 20;
//var stoppingPoint = 10;

//countDown while
function countDownWhile(startingPoint, stoppingPoint) {	
	//var i = startingPoint;
	while(startingPoint >= stoppingPoint) {
		console.log('while: ' + startingPoint);
		startingPoint--;
	}
}
countDownWhile(20, 10);


//countDown for
function countDownFor(startingPoint, stoppingPoint) {
	for(var i=startingPoint; i>=stoppingPoint; i--) {
		console.log('for: ' + i);
	}
}
countDownFor(20, 10);









