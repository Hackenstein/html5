window.onload = init;

function init() {
	//alert("get this started");
	var banzaiMovie = new Movie("Buckaroo Banzai","Cult Classic",5,["1:00pm","5:00pm","7:00pm"]);
	var nextShowing = banzaiMovie.getNextShowing();
	alert(nextShowing);
}
