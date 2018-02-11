var n = parseInt(prompt("Please enter natural number N (0<N<=20)", "0"));
var columns =  2 * n - 1;
var pyramid = "";

if (n > 0 && n <= 20) {
	for (var i = 0; i < n; i++) {
		for (var j =0; j < columns; j++) {
			if (j >= Math.floor(columns / 2) - i && j <= Math.floor(columns / 2) + i){
				pyramid += "[~]";
			} else {
				pyramid += "   ";
			}
		}
	    pyramid += "\n";
	}
	console.log(pyramid);
} else {
	console.log("Incorrect data");
}
