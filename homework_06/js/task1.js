var a = parseFloat(prompt("First length of sides", 0));
var b = parseFloat(prompt("Second length of sides", 0));
var c = parseFloat(prompt("Third length of sides", 0));
var triangleType;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
	console.log("Not a number");
	console.log("Incorrect data");
} else {
    if (a < b + c && b < a + c && c < a + b) {
     
   		triangleType(); 

  		var p = (a + b + c)/2;

	 	var s = (Math.round(Math.sqrt(p*(p-a)*(p-b)*(p-c))*100)/100);

	 	if (s == 0) {
			console.log("Incorrect data");
		} else {
		   console.log("Type of triangle is " + triangleType + " and square is " + s);
		}
    } else {
  		console.log("Triangle does not exist");
  		console.log("Incorrect data");
    }
}

function triangleType() {
	if (a*a + b*b == c*c || b*b + c*c == a*a || c*c + a*a == b*b) {
		triangleType = "Right triangle";
	} else if (a === b && b === c && c === a) {
		triangleType = "Equilateral";
	} else if (a === b || b === c || c === a) {
		triangleType = "Isosceles";
	} else if (a !== b && b !== c && c !== a) {
		triangleType = "Scalene";
	}
}