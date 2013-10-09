// David Gaska 10-09-2013 Expressions Assignment Industry

// How Many Pounds Of Deli Meat Did You Slice Today?

var ham = prompt("I want to calculate how many pounds of deli meat were sliced today. \nGiven that each ham weighed 5 pounds, How many hams did you slice?"); 

const hamWeight = 5;

var hamPounds = hamWeight * ham;

//console.log(hamPounds);

var turkey = prompt("Given that the turkeys are 4lbs each. \nHow many turkeys did you slice?");

const turkeyWeight = 4;

var turkeyPounds = turkeyWeight * turkey;

//console.log(turkeyPounds);

var chicken = prompt("Given that each chicken weighs 3 pounds, \n how many chickens did you slice?");

const chickenWeight = 3;

var chickenPounds = chickenWeight * chicken;

//console.log(chickenPounds);

var totalPounds = hamPounds + turkeyPounds + chickenPounds;

console.log(totalPounds);
