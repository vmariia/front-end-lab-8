var a = +prompt("First length of sides", 0);
var b = +prompt("Second length of sides", 0);
var c = +prompt("Third length of sides", 0);
var triangleType;

if (Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c)) {
	if (a <= 0 || b <= 0 || c <= 0) {
	console.log("Incorrect data");
	} else {	
		if (a*a + b*b == c*c || b*b + c*c == a*a || c*c + a*a == b*b) {
			triangleType = "Right triangle";
		} else if (a === b && b === c && c === a) {
			triangleType = "Equilateral";
		} else if (a === b || b === c || c === a) {
			triangleType = "Isosceles";
		} else if (a !== b && b !== c && c !== a) {
			triangleType = "Scalene";
		}

		var p = (a + b + c)/2;
		console.log("p =", p);

		if (p > a && p > b && p > c) {
			var s = Math.sqrt(p*(p-a)*(p-b)*(p-c)).toFixed(2);
			console.log("s =", s);
			if (s == 0) {
				console.log("Incorrect data");
			} else {
			   console.log("Type of triangle is " + triangleType + " and square is " + s);
			}
		} else {
			console.log("p <= than a or b or c");
		}
	}
} else {
	console.log("Text was typed");
}