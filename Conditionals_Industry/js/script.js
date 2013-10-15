// David Gaska 10-2013 Conditional Assignment Industry

// Order Chicken leg quarters for weekend
// We sell a lot of packages of chicken leg quarters
// We usually keep two palllets in the cooler
// each pallet has 50 cases with 10 packages of chicken in each case
// a good amount to have is 1000 - 1500 packages
// Do I need to order for the weekend or do we have enough?
// We could also have way too much already and need to drop the price.

const neededPackages = 1000;

const packagesPerCase = 10;

const tooMany = 1500

var onFloor = prompt("How many packages of chicken are left on the floor?");

var inCooler = prompt("How many cases of chicken are left in the the coooler?");

var coolerPackages = inCooler * packagesPerCase;

var totalPackages = coolerPackages + onFloor;

if(totalPackages <= neededPackages){
	console.log("You need to order more chicken leg quarters for the weekend!");
}else if(totalPackages >= tooMany){
	console.log("You have too many packages already, must reduce the price for the weekend!");
}else{
	console.log("You have a good amount, no need to order more.");
}





