function getTransformedArray(array, callback) {
	var transformedArray = forEach(array, callback);
	return transformedArray;
}