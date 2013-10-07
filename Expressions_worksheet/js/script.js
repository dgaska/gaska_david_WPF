// David Gaska, 10-7-2013 Expressions Worksheet


// Dog Years

var sparkysAge = 5; // Sparky's given age in human years
const dogAge = 7; // a dog's age is 7 times that of its age in human years.

var sparkysDogAge = sparkysAge * dogAge; // The formula to figure sparky's age in dog years.
 
var sparkysResult = "Sparky is" + " " + sparkysAge + " " + "human years which is" + " " + sparkysDogAge + " " + "in dog years." // the expression to get the result

console.log(sparkysResult); // printed result using console.log

// Slice of Pie part 1

var slices = 8; // the number of slices per pizza
const people = 18; // the number of people at the party
var pizzas = 6; // number of pizzas ordered

var slicesPerPerson = pizzas * slices / people; // formula to figure out slices per person.

var slicesResult = "Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party." // string result

console.log(slicesResult); // printed result using console.log

// Slice of Pie part II

var wholeSlices = 2; // number of whole slices per person.

var slicesAte = wholeSlices * people; // total number of whole slices ate.

var totalSlices = pizzas * slices; // total number of slices.

var remainder = totalSlices % slicesAte; // slices left over for Sparky.

var sparkysSlices = "Sparky got" + " " + remainder + " " + "slices of pizza."

console.log(sparkysSlices);

// Average Shopping Bill

var bills = [86, 104, 93, 150, 98]; // five weekly grocery bills.

const totalBills = bills[0] + bills[1] + bills[2] + bills[3] + bills[4] //total of all items in the array

var weeklyAverage = totalBills/5; // weekly average on groceries

var budget = "You have spent a total of $" + totalBills + " " + "on groceries over 5 weeks. That is an average of $" + weeklyAverage + " " + "per week."

console.log(budget);
