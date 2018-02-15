function reverseNumber(number) {
    var i, reverse = 0;
    var n = Math.abs(number);
	while(n > 0) {
		i = n % 10;
        reverse = (reverse * 10 + i);
		n = Math.floor(n / 10);
	}
	return reverse * Math.sign(number);
}