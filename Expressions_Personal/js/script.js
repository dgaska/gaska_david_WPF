// David Gaska 10-9-2013 Expressions Assignment Personal

// How much money do you spend on formula a year.

var timesDay = prompt("I am calcultating how much money you spend on baby formula a year. \nEnter in how many times a day you feed your baby."); // This prompt will enter in how many times a day someone feeds their baby.

var ozPerFeeding = prompt("Now enter in how many oz. per feeding your baby gets."); // Prompt to collect how many .oz per feeding they feed their baby!

var ozPerDay = timesDay * ozPerFeeding; // equation to find how many .oz per day they feed their baby.

//console.log(ozPerDay);

const days = 365; // Days in a year

var ozPerYear = ozPerDay * 365; // equation for how many .oz in a year they feed their baby.

//console.log(ozPerYear);

var formulaPrices = [.15, .14, .14, .07, .12];//Array of formula choices and their prices per .oz 0-Enfamil 1-Similac 2-Gerber 3-Parent's Choice 4-Up & Up.

var formulaChoice = formulaPrices[prompt("Please select the brand you buy. \nEnter in a 0 for Enfamil, 1 for Similac, 2 for Gerber, 3 for Parent's Choice, 4 for Up & Up.")];// a prompt giving a choice to how which formula the buy.

formulaPrices[formulaChoice] = .15; // calling element of an array index 0 when prompted
formulaPrices[formulaChoice] = .14; // calling element of an array index 1 when prompted
formulaPrices[formulaChoice] = .14; // calling element of an array index 2 when prompted
formulaPrices[formulaChoice] = .07; // calling element of an array index 3 when prompted
formulaPrices[formulaChoice] = .12; // calling element of an array index 4 when prompted

var totalSpent = ozPerYear * formulaChoice; // calculating the total dollar amount spent on fomual per year

console.log("You feed your baby " + ozPerYear + "oz per year, which means you spend $" + totalSpent + " per year on baby formula."); // printed result for how much you spend on baby formula.











