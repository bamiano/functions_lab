
// Problem 1

function hello () {
	console.log("Hello, World!");
}


// Problem 2
function friend (name) {
	console.log("Hello " + name);
}


// Problem 3
function friend (name) {
	return ("Hello " + name);
}
var yourname = friend("Brent");
console.log(yourname);

// Problem 4 part 1
var sub = function(a,b) {
	return a - b;
};
var numbers = sub(129, 139);
console.log(numbers);

//Problem 4 part 2
function combine (a,b,bool) {
	if(bool === true) {
	return a + b;
	}
	
	else {
	return a - b;
	}
}
var total = combine(6, 7, 9 < 10);
console.log(total);

// Problem 5
function isPrime(number) {
    var start = 2;
    
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}





