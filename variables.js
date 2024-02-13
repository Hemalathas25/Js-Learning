//Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

const name = "Hema";
let age = 21;
let isMarried = false;
let husbandName;
let baby = null; 

console.log(name , age , isMarried, husbandName, baby) 

// Declare four variables without assigning values

/*
In JavaScript, when you declare a variable using const,
 you must initialize it with a value. Unlike var and let,
  const does not allow you to declare a variable without assigning an initial value.
   This is because const creates a constant reference to the value, 
   meaning the variable cannot be reassigned to a different value once initialized.

Therefore, declaring four variables without assigning values using const is not possible. 
 */

let variable1, variable2, variable3, variable4;

//Declare four variables with assigned values

let vari1 = 34;
let vari2 = "meh";
let vari3 = true;
let vari4 = [1, 2];

//Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = 'Hema' 
let lastName = 'Harish' 
let country = 'My World' 
let city = 's' 
let agee = 22
let isMarriedd = true

console.log(firstName, lastName, country, city, agee, isMarriedd)

//Declare variables to store your first name, last name, marital status, country and age in a single line

let  firstNamee = 'Hema' ,
 lastNamee = 'Harish' ,
 countryy = 'My World' ,
 cityy = 's' ,
 ageee = 22,
isMarrieddd = true

console.log(firstNamee  ,
lastNamee  ,
countryy  ,
cityy  ,
ageee,
isMarrieddd)

//Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

var herAge = 21;
var himAge = 22;


console.log("I am " + herAge + " years old");
console.log("he is" + himAge + "years old");
