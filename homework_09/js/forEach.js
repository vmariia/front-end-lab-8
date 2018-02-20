function forEach(array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		var callbackValue = callback(array[i]);
		if (callbackValue != undefined) {
			result[i]  = callbackValue;
		}
	}	
	return result;
}