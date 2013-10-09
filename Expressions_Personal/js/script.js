// David Gaska 10-9-2013 Expressions Assignment Personal

// How much money do you spend on formula a year.

var timesDay = prompt("I am calcultating how much money you spend on baby formula a year. \nEnter in how many times a day you feed your baby."); // This prompt will enter in how many times a day someone feeds their baby.

var ozPerFeeding = prompt("Now enter in how many oz. per feeding your baby gets."); // Prompt to collect how many oz. per feeding they feed their baby!

var ozPerDay = timesDay * ozPerFeeding; // equation to find how many oz per day they feed their baby.

console.log(ozPerDay);

const days = 365; // Days in a year

//var ozPerYear = ozPerDay * 365; // equation for how many oz in a year they feed their baby.

//var formulaPrice = prompt("Please select the brand you buy. \nEnter in a 0 for Enfamil, 1 for Similac, 2 for Gerber, 3 for Parent's Choice, 4 for Up & Up.")["Enfamil", "Similac", "Gerber", "Parent's Choice", "Up & Up"]; // an array giving a choice to how which formula the buy.

formulaPrice[0] = 25;
formulaPrice[1] = 24;
formulaPrice[2] = 24;
formulaPrice[3] = 20;
formulaPrice[4] = 24;

var amountPerYear = formulaPrice * ozPerYear;






