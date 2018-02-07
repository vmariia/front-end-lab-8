var euro = +prompt("EURO", 0);
var usd = +prompt("USD", 0);

var courseEuro = 33.8565;
var courseUsd = 27.4609;


if (Number.isFinite(euro) && Number.isFinite(usd)) {
	if (euro > 0 && usd > 0) {
		var e = euro * courseEuro;
		var u = usd * courseUsd;
		var oneEuro = courseEuro / courseUsd;
		console.log(euro + " euros are equal " + e.toFixed(3) + " UAH, "
		+ usd + " dollars are equal " + u.toFixed(3) + 
		" UAH, one euro is equal " + oneEuro.toFixed(3) + " dollars.");
	} else {
		console.log("euro or usd < or = 0");
	}
} else {
	console.log("Text was typed");
}