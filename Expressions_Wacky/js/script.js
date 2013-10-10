//David Gaska 10-09-2013 Expressions Assignment Wacky

//How many pieces of candy did your family collect per hour trick or treating

var members = prompt("I want to calculate how many pieces of candy a family collect per minute trick or treating. \nHow many people in your family trick or treated?");

var candy = prompt("How many pieces of candy did your family collect?");

var avgPerPerson = candy/members;

//console.log(avgPerPerson);

var minutes = prompt("How many minutes did you spend out trick or treating?");

var avgPerMinute = avgPerPerson/minutes;

console.log("Your family collected " + avgPerPerson + "pieces of candy per person, which gave you an average of " + avgPerMinute + "pieces of candy per minute");



