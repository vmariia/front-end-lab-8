var euro = parseFloat(prompt("EURO", 0));
var usd = parseFloat(prompt("USD", 0));

var courseEuro = 33.2324;
var courseUsd = 27.1240;


if (isNaN(euro) || isNaN(usd)) {
	console.log("Not a number");
	console.log("Incorrect data");	
} else {
	if (euro > 0 && usd > 0) {
		var e = euro * courseEuro;
		var u = usd * courseUsd;
		var oneEuro = courseEuro / courseUsd;
		console.log(euro + " euros are equal " + Math.round(e*100)/100 + " UAH, "
		+ usd + " dollars are equal " + Math.round(u*100)/100 + 
		" UAH, one euro is equal " + Math.round(oneEuro*100)/100 + " dollars.");
	} else {
		console.log("Incorrect data");
	}
}