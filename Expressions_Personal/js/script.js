// David Gaska 10-9-2013 Expressions Assignment Personal

// How much money do you spend on formula a year.

var timesDay = prompt("I am calcultating how much money you spend on baby formula a year. \nEnter in how many times a day you feed your baby."); // This prompt will enter in how many times a day someone feeds their baby.

var ozPerFeeding = prompt("Now enter in how many oz. per feeding your baby gets."); // Prompt to collect how many oz. per feeding they feed their baby!

var ozPerDay = timesDay * ozPerFeeding; // equation to find how many oz per day they feed their baby.

//console.log(ozPerDay);

const days = 365; // Days in a year

var ozPerYear = ozPerDay * 365; // equation for how many oz in a year they feed their baby.

//console.log(ozPerYear);

var formulaPrices = [25, 24, 24, 20, 24];//Array of formula choices 0-Enfamil 1-Similac 2-Gerber 3-Parent's Choice 4-Up & Up.
var formulaChoice; 

var formulaChoice[formulaPrices] = prompt("Please select the brand you buy. \nEnter in a 0 for Enfamil, 1 for Similac, 2 for Gerber, 3 for Parent's Choice, 4 for Up & Up.");// a prompt giving a choice to how which formula the buy.


var amountPerYear = formulaChoice * ozPerYear;

console.log(amountPerYear);





