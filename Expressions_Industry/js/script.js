// David Gaska 10-09-2013 Expressions Assignment Industry

// How Many Pounds Of Deli Meat Did You Slice Today?

var ham = prompt("I want to calculate how many pounds of deli meat were sliced today. \nGiven that each ham weighed 5 pounds, How many hams did you slice?"); //prompt explaining what we are doing and asking how many hams they sliced.

const hamWeight = 5; // how much each ham weighs

var hamPounds = hamWeight * ham; // the calculation of how many pounds of ham were sliced.

//console.log(hamPounds); // printed result of pounds of ham

var turkey = prompt("Given that the turkeys are 4lbs each. \nHow many turkeys did you slice?"); // prompt asking for number of turkeys sliced

const turkeyWeight = 4; // weight of each turkey

var turkeyPounds = turkeyWeight * turkey; // calculation of turkey pounds sliced

//console.log(turkeyPounds); //printed result of turkey pounds

var chicken = prompt("Given that each chicken weighs 3 pounds, \n how many chickens did you slice?"); //prompt asking how many hams were sliced

const chickenWeight = 3; // weight of each ham 

var chickenPounds = chickenWeight * chicken; // calculation of pounds of ham sliced

//console.log(chickenPounds); // printed result of ham sliced

var totalPounds = hamPounds + turkeyPounds + chickenPounds; // calculation of the total weight of hams

console.log("The total pounds of ham sliced is " + hamPounds +"lbs. The total weight of turkey sliced is" + turkeyPounds +"lbs, and the total weight of chicken sliced is " + chickenPounds + "lbs. Giving you a total of " + totalPounds + "lbs of meat sliced today.");
// the printed string result in console for the whole problem.




