{/*Conditionals
Conditional statements are used for make decisions based on different conditions.
 By default , statements in JavaScript script executed sequentially from top to bottom.
  If the processing logic require so, the sequential flow of execution can be altered in two ways:

Conditional execution: a block of one or more statements will be executed if a certain 
expression is true
Repetitive execution: a block of one or more statements will be repetitively executed as 
long as a certain expression is true. In this section, we will cover if, else ,
else if statements.


If
// syntax
if (condition) {
  //this part of code runs for truthy condition
}

Example:
*/}
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

/* If Else 
// syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}
*/

let n = 3
if (n > 0) {
  console.log(`${n} is a positive number`)
} else {
  console.log(`${n} is a negative number`)
}
//  3 is a positive number

n = -3
if (n > 0) {
  console.log(`${n} is a positive number`)
} else {
  console.log(`${n} is a negative number`)
}
//  -3 is a negative number

let isRainingg = true
if (isRainingg) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRainingg = false
if (isRainingg) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat

/* 
If Else if Else

// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
*/

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

/* Switch
Switch is an alternative for if else if else else.

switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}

 */

let weatherr = 'cloudy'
switch (weatherr) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}