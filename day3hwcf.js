// If/else problem

var food = ["pizza", "oranges", "tangerines"];

	if (food.length === 0) {
		console.log("You have no food");
	}
	else if (food.length === 1) {
		console.log("You have one food");
	}
	else {
		console.log("You have lots of food");
	}

// While loop for 99 bottles of beer on the wall

var bottles = 99;

	
	while (bottles > 0) {
	console.log (bottles+" "+" bottles of beer on the wall," + " "+ bottles+ 
	" bottles of beer, "+"knock one down, pass it around"+" "+
	(bottles-1)+" bottles of beer on the wall."); 
	bottles--;
	
	}

// For Array

var people = ["Maggie", "Me", "James", "Elie"];
	for (var i = 0; i < people.length; i++) {
    console.log("Hello, " +people[i]+"!");
	}


