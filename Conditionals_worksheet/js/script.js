// David Gaska 10-2013 Conditionals Worksheet

// Last Chance for Gas!

// Enough Gas?
// Can they make it without stopping for gas?
var miles = 200;
// if less than 200 have to stop for gas.

var mpg = prompt("How many miles per gallon does your car get?"); // The miles you can go on a gallon of gas
var gauge = prompt("What percentage of your gas tank is left?"); // How full your current tank of gas is
var capacity = prompt("How many gallons of gas does your tank hold?"); // How much your gas tank can hold in gallons

var gaugeDecimal = gauge / 100; // changes % to a decimal

var howFarTotal = mpg * capacity * gaugeDecimal; // How far you can go on your current level of gas

var leftInTank = capacity * gaugeDecimal; // Gives result of how much is left in tank

//console.log(leftInTank); tested the math and had to fix had wrong symbol in it.

if(howFarTotal > miles){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + leftInTank + " gallons of gas in your tank, better get gas while you can!"); 
}

// Check the Login

// Right Username
// What happens when the wrong username and or password are entered in?
/*var username = prompt("Enter in Username:");
var password = prompt("Enter in Password");

var correctUsername = "Full Sail";
var correctPassword = "JavaScript";


if(username = correctUsername && password = correctPassword){
	console.log("Welcome " + correctUsername + "!");
}else if(username = false){
	console.log("Username not found. Try again.");
}else{
	console.log("Password does not match our records.");
}*/

// Movie Ticket Price
// How much will it cost?
// age of customer and time a factore

var age = prompt("Please enter your age.");
var time = prompt("please enter the time of movie. Use military time.");
var price;

if(age < 10 || age >= 55){
	price = 7.00;
}else if(time > 15 && time < 17){
	price = 7.00;
}else{
	price = 12.00;
}
  console.log("Your ticekt price is $" + price);