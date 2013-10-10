//David Gaska 10-09-2013 Expressions Assignment Wacky

//How many pieces of candy did your family collect per hour trick or treating

var members = prompt("I want to calculate how many pieces of candy a family collect per minute trick or treating. \nHow many people in your family trick or treated?");// prompt to collect how many people in the family trick or treated

var candy = prompt("How many pieces of candy did your family collect?");//prompt to collect total amount of candy the family collected

var avgPerPerson = candy/members; // equation to collect the avg amount of candy each person collected

//console.log(avgPerPerson); trial console.log to make sure calculation working properly

var minutes = prompt("How many minutes did you spend out trick or treating?"); //prompt to collect the amount of time the family spent out trick or treating

var avgPerMinute = avgPerPerson/minutes; //equation to figure out pieces of candy collected per minute.

console.log("Your family collected " + avgPerPerson + " pieces of candy per person, which gave you an average of " + avgPerMinute + " pieces of candy per minute"); // final string printed via console.log



