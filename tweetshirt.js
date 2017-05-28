window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
};

function previewHandler() {
	var canvas = document.getElementById("tshirtCanvas");
	var context = canvas.getContext("2d");

	var selectObj = document.getElementById("shape");	
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;

	fillBackgroundColor(canvas,context);

	if(shape == "squares") {
		for (var squares = 0; squares < 20; squares++)
			drawSquare(canvas,context);
	}
	else
	{
		for(var circles = 0; circles < 20; circles++)
			drawCircle(canvas,context);
	}
	drawTweet(canvas,context);
	drawBird(canvas,context);
}

function drawSquare(canvas, context) {
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);
	var width = Math.floor(Math.random()*40);
	context.fillStyle="lightblue";
	context.fillRect(x,y,width,width);
}

function fillBackgroundColor(canvas, context) {

	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var backgroundColor = selectObj[index].value;	
	context.fillStyle=backgroundColor;
	context.fillRect(0,0,canvas.width, canvas.height);
}

function drawCircle(canvas, context) {
	context.beginPath();
	/*context.moveTo(100,150);
	context.lineTo(250,75);
	context.lineTo(125,30);
	context.closePath();
	*/
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);
	var radius = Math.floor(Math.random()*40);
	
	context.arc(x,y,radius,0,Math.PI*2, true);
	//context.lineWidth=5;
	//context.stroke();
	context.fillStyle = "red";
	context.fill();
}
function updateTweets(tweets) {
	//alert(tweets);
	var tweetsSelection = document.getElementById("tweets");
	for (var i = 0; i < tweets.length; i++)
	{
		//alert(tweets[i]);
		tweet = tweets[i];
		var option = document.createElement("option");
		option.text = tweet.text;
		option.value = tweet.text.replace("\"","'");
		tweetsSelection.options.add(option);
	}
	tweetsSelection.selectedIndex=0;
}
function drawTweet(canvas, context) {
	var fg = document.getElementById("foregroundColor");
	var index = fg.selectedIndex;
	var fgcolor = fg[index].value;
	context.fillStyle=fgcolor;
	context.textAlign = "left";
	var x = 15;
	var y = 15; 
	context.font = "bold 1em sans-serif";
	context.fillText("I saw this tweet",x,y);
	x = canvas.width/2;
	y = canvas.height/2;
	context.textAlign="center";
	context.font = "italic 1.2em serif";
	var tweets = document.getElementById("tweets");
	index = tweets.selectedIndex;
	var tweet = tweets[index].value;
	context.fillText(tweet,x,y);
	x = canvas.width - 15;
	y = canvas.height -15;
	context.textAlign="right";
	context.font = "bold 1em sans-serif";
	context.fillText("and all I got was this lousy t-shirt!",x,y);
	
}
function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird,20,120,70,70);

	}
}
