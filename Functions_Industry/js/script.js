// David Gaska 10-2013 Functions Assingment Industry

//When is my lunch
// lunch is either at noon or 1pm or later depending on start time

function lunchHour(hours){//my function

if(hours <= 7){//if you start at 7am or earlier
	console.log("You lunch is at noon");
}else if(hours > 7 && hours <= 9){ // if you start later than 7am or but before 10am
	console.log("Your lunch is at one.");
}else{ // if you start later than 9am
	console.log("Your lunch is at the half-way point of your shift.");
}
}
	
lunchHour(prompt("What hour do you start work?"))// prompt to invoke function
  