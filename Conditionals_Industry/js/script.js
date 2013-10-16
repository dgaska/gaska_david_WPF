// David Gaska 10-2013 Conditional Assignment Industry

// Order Chicken leg quarters for weekend
// We sell a lot of packages of chicken leg quarters
// We usually keep two palllets in the cooler
// each pallet has 50 cases with 10 packages of chicken in each case
// a good amount to have is 1000 - 1500 packages
// Do I need to order for the weekend or do we have enough?
// We could also have way too much already and need to drop the price.
// Whats on the sales for should be considered already sold as they will sell in one day usually



const packagesPerCase = 10; // Number of packages of chicken per case


var comingIn = prompt("How many cases of chicken are coming in today?"); // asking the user how many cases are coming in today

var inCooler = prompt("How many cases of chicken are left in the the coooler?"); // asking the user how many cases are in the cooler already

var coolerPackages = inCooler * packagesPerCase; // equation to figure out how many packages are in the cooler

var delivaryTotal = comingIn * packagesPerCase; // equation to figure out how many packages are being delivered

//console.log(coolerPackages);

var totalPackages = delivaryTotal + coolerPackages; // the total number of packages that you currently have on hand

//console.log(totalPackages);

if(totalPackages <= 1000){
	// printed if true meaning you need to order more
	console.log("You need to order more chicken leg quarters for the weekend!");
}else if(totalPackages >= 1500){
	// printed if there too many 
	console.log("You have too many packages already, must reduce the price for the weekend!");
}else{
	// printed if you there is no need to do anything
	console.log("You have a good amount, no need to order more.");
}





