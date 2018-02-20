function collectIds(movies) {
	var filteredArrayMovies = getFilteredArray(movies, function(movie) {
		if (movie == null || movie == undefined) {
			return false;
		}
		return movie.rating > 3.0
	});
	var transformedArrayMovies = getTransformedArray(filteredArrayMovies, function(movie) { 
		return movie.id; 
	});
	return transformedArrayMovies;
}