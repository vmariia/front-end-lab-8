function isPrime(value) {
  var message;
	if (value === 1) return false;
	if (value === 2) return true;
	if (value % 2 === 0) return false;
	var boundary = Math.floor(Math.sqrt(value));
	for (var i=3; i<=boundary; i++) {
		if (value % i === 0) return false;
	}
	return true;
}