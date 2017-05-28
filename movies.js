function Movie(title, genre, rating, showtimes) {
	this.title = title;
	this.genre = genre;
	this.rating = rating;
	this.showtimes = showtimes;
	this.getNextShowing = function() {
	//alert("in getnextshowing");
	var now = new Date().getTime();

	for (var i = 0; i < this.showtimes.length; i++) {
		var showtime = getTimeFromString(this.showtimes[i]);
		if ((showtime - now ) > 0) {
			return "Next Showing of " + this.title + " is " + this.showtimes[i];
		}
	
	}
	};
}

function getTimeFromString(timeString) {
	var theTime = new Date();
	var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
	theTime.setHours(parseInt(time[1]) + (time[3]?12:0));
	theTime.setMinutes(parseInt(time[2]) || 0);
	return theTime.getTime();
};
