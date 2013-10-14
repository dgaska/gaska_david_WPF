// JavaScipt

var yearBorn = 1983

console.log("hello World");
console.log(yearBorn);

// Defining Variables

var age; //declaration
age = 30; // definition
//storage container = value

var yearOfBirth = 1983; //decalring and defining on the same line

// Variables of Different Types, Numbers, Booleans and Strings

var age = 30; // Number Variable

var isStudent = false; //Boolean Variable

var firstName = "David";

var phrase = 'I don\'t know \n You\'ll have to speak with the professor';
// Arrays

var muppetNames = ["Kermit", "Miss Piggy"]; //0,1,2,3

muppetNames[1] = "Rizzo"; //change indez #1 to Rizzo
muppetNames[2] = "Fozzy"; 

console.log(muppetNames[0]);
//experessions

var a = 2; //sets up our variable a and defines it with 2
var b;
a = a + 3; //add 3 to a
console.log(a);
//expressions - age example

var yearBorn = 1983;
var age = 2013 - yearBorn - 1;
console.log(age);
//expressions - arithmatic operations

//area of the triangle is half of the width times the height

var width = 4;
var height = 5;
var area = width * height/2;
console.log(area);
//Expressions = Modulo

var remainder = 32 % 10;
console.log(remainder);
//order of operations

var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

// the average is the sum of the items divided by the number of items
var average = (quiz1 + quiz2 + quiz3 + quiz4)/4;
console.log(average);
//arrays in expressions

var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];
console.log(total);
//Concatenating combining strings

var firstName = "David";
var lastName = "Gaska";
var fullName = firstName + " " + lastName;

console.log(fullName);

var a = "6";
var b = "7";

var result = a + b;
console.log(result);
//Casting 

var stringVar = "6";
var result = 7 + Number(stringVar);
console.log(result);

var areaCode = 262;
var firstPart = 408;
var secPart = 1769;
//(262)408-1769

var phoneNo = "(" + String(areaCode) + ")" + String(firstPart)+ "-" + String(secPart);
console.log(phoneNo);
//assignment Operators

var a = 3;
a += 4; //a = a +4
//a ++ ; // a = a + 1 // a += 1
console.log(a);

//prompt and alert
//var userInput = prompt("Enter your year of birth");


//var width = prompt("We are calculating the area of a rectangle. \nPlease enter width");
//var height = prompt("Please enter the height");
//var area = width * height; // calculates
//console.log(area); //prints it out to console

alert("The area of your rectangle is " + area + " sq feet");

