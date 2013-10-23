// David Gaska 10-2013 Functions Assingment Industry

//When is my lunch
// lunch is either at noon or after

function lunchHour(hours){//my function

if(hours = null){ //if nothing is entered
	console.log("Please enter in a number.");
}else if(hours <= 7){ // if you start earlier than 7am or at 7
	console.log("Your lunch is at noon.");
}else{ // if you start later than 7am
	console.log("Your lunch is after the person gets who went on lunch at noon.");
}
}
	
lunchHour(prompt("What hour do you start work?"))// prompt to invoke function
  