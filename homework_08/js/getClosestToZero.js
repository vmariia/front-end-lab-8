function getClosestToZero () {
	var min = Math.abs(arguments[0]);
    var closestToZero;
	for (var i = 1; i < arguments.length; i++) {
		if (Math.abs(arguments[i]) < min) {
			var min = Math.abs(arguments[i]);
			closestToZero = arguments[i];
		}
	}
	return closestToZero;
}