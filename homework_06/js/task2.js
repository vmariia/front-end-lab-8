var euro = parseFloat(prompt("EURO", 0));
var usd = parseFloat(prompt("USD", 0));

var courseEuro = 33.8565;
var courseUsd = 27.4609;


if (isNaN(euro) || isNaN(usd)) {
	console.log("Not a number");
	console.log("Incorrect data");	
} else {
	if (euro > 0 && usd > 0) {

		var e = euro * courseEuro;
		var u = usd * courseUsd;
		var oneEuro = courseEuro / courseUsd;
		console.log(euro + " euros are equal " + e.toFixed(2) + " UAH, "
		+ usd + " dollars are equal " + u.toFixed(2) + 
		" UAH, one euro is equal " + oneEuro.toFixed(2) + " dollars.");
	} else {
		console.log("Incorrect data");
	}
}