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

console.log(leftInTank);