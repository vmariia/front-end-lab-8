function cypherPhrase(object, string) {
	var cypherPhraseValue = '';
	cypherPhraseValue = getTransformedArray(string, function(letter) {
		return object[letter] || letter;
	});
	return cypherPhraseValue.join('');
}