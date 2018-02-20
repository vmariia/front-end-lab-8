function getFilteredArray(array, callback) {
	var filteredArray = [];
	var booleanArray = forEach(array, callback);
	for (var i = 0; i < booleanArray.length; i++) {
		if (booleanArray[i]) {
			filteredArray.push(array[i]);
		}
	}
	return filteredArray;
}