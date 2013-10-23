// David Gaska 10-2013 Functions Assignment Personal




var tripCost = function(hotelTotal, foodTotal, gasTotal){
	var total = hotelTotal + foodTotal + gasTotal;
	return total;
}

var total = tripCost(150, 200, 100)


console.log("You will spend a total of $" + total + " for this trip.");
