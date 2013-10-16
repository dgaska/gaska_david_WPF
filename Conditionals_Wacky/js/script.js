// David Gaska 10-2013 Conditionals Assignment Wacky

// Do I have time to do wash
// I am leaving for vacation tomorrow
// Do I have time today to do all my laundry
// How many loads do I have?
// How much time do I have left?
// How long does each load take?
// Will it be done before I leave

var loads = prompt("How many loads do you have to do?");

var washTime = prompt("How long do you put your laundry in the washer for in minutes?");

var dryTime = prompt("How long do you put your laundry in the dryer for?");

var hours = prompt("How many hours do you have before you leave?");

var minutesLeft = hours * 60;

console.log(minutesLeft);
//var totalWashTime = washTime + dryTime;

//var totalLaundryTime = totalWashTime * loads;

/*(minutesLeft > totalLaundryTime) ? console.log("Yes, you do have time to complete your laundry.") : console.log("You have too much laundry and not enough time.");*/