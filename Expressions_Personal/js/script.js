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
//<<<<<<< HEAD

var formulaChoice = formulaPrices[prompt("Please select the brand you buy. \nEnter in a 0 for Enfamil, 1 for Similac, 2 for Gerber, 3 for Parent's Choice, 4 for Up & Up.")];// a prompt giving a choice to how which formula the buy.

formulaPrices[formulaChoice] = 25;
formulaPrices[formulaChoice] = 24;
formulaPrices[formulaChoice] = 24;
formulaPrices[formulaChoice] = 20;
formulaPrices[formulaChoice] = 24; 
console.log(formulaChoice);
//=======
//var formulaChoice; //*********** JDALTON if you look at line 22 you have prompt. Set this vairable with that prompt 

//var formulaChoice = formulaPrices(prompt("Please select the brand you buy. \nEnter in a 0 for Enfamil, 1 for Similac, 2 for Gerber, 3 for Parent's Choice, 4 for Up & Up."));// a prompt giving a choice to how which formula the buy.
//************** JDALTON Now to call an element of an array you don't use the () but the [ ] symbols
// So in this example formulaPrices[0] would be equal to the first value of the array or 25
// formulaPrices[1] would be equal to 24
// So you can replace the number above with the variable formulaChoice.
// Like this formulaPrices[formulaChoice]
//So if the variable forumlaChoice = 0  then  formulaPrices[formulaChoice] = 25
//>>>>>>> refs/remotes/origin/master









