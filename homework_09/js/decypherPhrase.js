function decypherPhrase(obj, string) {
	var newObject = {};
	for (var key in obj) {
		newObject[obj[key]] = key;
	}
	return cypherPhrase(newObject, string);
}