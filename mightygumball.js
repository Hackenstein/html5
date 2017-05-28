window.onload = function() {
	//alert("about to setup call");
	//var url = "http://localhost:3001/sales.json";
	//var url = "http://gumball.wickedlysmart.com";
	//var request = new XMLHttpRequest();
	//request.open("GET",url);
	//request.onload = function() {
//		if(request.status == 200)
//		{
		//	alert("some response");
//			updateSales(request.responseText);
//		}
//		else
//			alert("bad response");
//	};
//	request.send(null);
}

function updateSales(sales) {
	//alert("inside update sales");
	var salesDiv = document.getElementById("sales");
	//`salesDiv.innerHTML = responseText;
	for (var i = 0; i<sales.length;i++) {
		var sale = sales[i];
		var div = document.createElement("div");
		div.setAttribute("class","saleItem");
		div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
		salesDiv.appendChild(div);
	}
}
