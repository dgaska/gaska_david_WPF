//conditionals Logic

var oldEnough = true;

         // if the child is old enough, print to console you can ride

if(oldEnough){
	//code performed if condition is true
	console.log("You can ride the coaster");
}

//Relational Expressions

var kidHeight = 46;
var minHeight = 48;
var sneakerLift = 2;
var parentHeight = 45;
if(kidHeight > minHeight){
	// code performed if true
	console.log("You can ride the coaster!");
}else if(kidHeight > parentHeight){
	// you can ride with parent present
	console.log("You can ride, but only with a parent")
}else{
	// code performed if false
	console.log("Sorry kid, your too short!");
}

//condition with expressions
//if(kidHeight + sneakerLift > minHeight){}

// Relational Operators\
	// <
	// >
	// <=
	// >=
	// They compare to values
	// The results are true or false
// Equality Operators
	// Equality ==
	// Strict Equality ===
	// Inequality !=
	
	// NO SPACES 
	
// Logical Operators
	// and &&
	// or ||
	// XOR ^
	// Not !

var budget = 300;
var iphone = 199.99;
var paycheck = 200;

if(iphone < budget && paycheck > 300){
	console.log("We can buy the phone!");
}else{
	console.log("No phone!");
}

var wonLottery = true;

//if(iphone < budget || wonLottery){
//	console.log();
//}

///// Ternaries

var gpa = 48

//if the gpa is over the min 2.0 the student can graduate
/*if( gpa >  2.0){
	console.log("You can graduate!!");
}else{
	console.log("GPA is too low!");
}*/

(gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA too low!");

var age = 11;
var book;

//if child is under 10, they get green eggs, otherwise time machine

/*if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}
 console.log(book);*/
 
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
console.log(book);

//loops

var b = 10; // setups the index

while (b > 0){// checks the condition
	console.log(b + "kegs on the wall");
	b--; // increments or decrements the index
}

// do while loop

var c = 10;

do{
	console.log(c + "kegs on the wall");
	c--;
}
while(c > 0);

// for loop

for (var i = 10; i > 0; i--){
	console.log(i + "kegs on the wall")
}

// normal functions

function outptMsg(){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

