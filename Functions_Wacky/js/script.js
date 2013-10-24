// David Gaska 10-2013 Functions Assignment Wacky

// How many loafs of bread do you use in a week?
// Do you make toast in the morning?
// If you do make toast how many pieces do you have?
// Do you make sandwiches for lunch or dinner?
// How many sandwiches per day do you make?

var totalLoafs = function(toast, sandwich){ // Anoymous Function
	var loafs = (toast * 1 + sandwich * 1) / 26; // var with formula for answer
	return loafs; // return function
}
var total = totalLoafs(prompt("I am collecting data to find out how much bread a person uses in a week. \nHow many pieces of toast do you make in a week?"),prompt("How many sandwiches do u make in a week?") * 2); // prompt to collect how many pieces of toast & prompt to collect number of sandwiches are made and then multiply by 2 since you normally use 2 slices of bread.

console.log("You use " + total + " loafs of bread per week!"); // Printed result to the console.