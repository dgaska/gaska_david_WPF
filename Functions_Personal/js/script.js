// David Gaska 10-2013 Functions Assignment Personal

// Figuring out how much a trip would cost for the weekend
// Hotel Price
// Food Price
// Gas Price




var tripCost = function(hotelTotal, foodTotal, gasTotal){ // the function I want to use
	var total = hotelTotal * 1 + foodTotal * 1 + gasTotal * 1; // total of the prompts 
	return total; // the return 
}

var total = tripCost(prompt("How much is your hotel cost?"), prompt("How much is your food going to cost?"), prompt("How much do you need for gas?")) //prompts used to invoke funtion


console.log("You will spend a total of $" + total + " for this trip."); // the printed result to the console.
