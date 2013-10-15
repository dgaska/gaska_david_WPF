// David Gaska 10-2013 Consditionals Assignment Personl

// How many cans of soda can I have
// I have been trying to reduce how much soda I drink
// I am only allowing to myself to have 48oz a day which is a lot less than I normally drink.
// I mainly drink Mountain Dew
// Normally I drink cans(12oz) and the bottles(20oz). I also have the big bottles (24oz) too.
// It is hard with the different sizes it comes in to keep track.

const dailyLimit = 48; // The daily limit allowed

var cans = prompt("How many cans(12oz) did you have today?"); // asking how much drank in 12oz form

var bottles = prompt("How many bottles(20oz) did you drink today?"); // asking how much in 20oz form

var bigBottles = prompt("How many big bottles(24oz) did you have?"); // asking how much in 24oz form

var totalCans = cans * 12; // total oz for cans

var totalBottles = bottles * 20; // total oz for bottles

var totalBigBottles = bigBottles * 24; // Total oz for big bottles

var ozTotal = totalCans + totalBottles + totalBigBottles // total of all the of soda.

if(ozTotal < dailyLimit){
	// Will print if I can still have some soda
	console.log("You have only had " + ozTotal + "oz of soda. You can still have more.");
}else{
	// Will print if I can not have any more soda
	console.log("You have had too much soda. You can not have any more for today.");
}



