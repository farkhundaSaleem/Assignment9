//////////////// QUESTION 1 ////////////////////

var num = (prompt("Enter a positive integer:"));

document.write("Number: " + num + "<br>" );
document.write("Rounded Value: " + Math.round(num)  + "<br>");
document.write("Floor Value: " + Math.floor(num) + "<br>" );
document.write("Ceiling Value: " + Math.ceil(num) + "<br>" );



//////////////// QUESTION 2 ////////////////////

var num = parseFloat(prompt("Enter a negative floating-point number:"));

document.write("Number: " + num  + "<br>");
document.write("Rounded Value: " + Math.round(num)  + "<br>");
document.write("Floor Value: " + Math.floor(num) + "<br>" );
document.write("Ceiling Value: " + Math.ceil(num) + "<br>" );



/////////////// QUESTION 3 ////////////////////



var num = parseInt(prompt("Enter a number:"));

document.write("Absolute value of " + num + " is " + Math.abs(num) + "<br>" );






/////////////// QUESTION 4 ////////////////////

var diceValue = Math.floor(Math.random() * 6) + 1;

document.write("Random dice value: " + diceValue + "<br>" );

var diceValue2 = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue2 + "<br>")




/////////////// QUESTION 5 ////////////////////





var coinValue = Math.floor(Math.random() * 2) + 1;

if (coinValue === 1) {
    document.write(" 2 : " + "<br>" + "Random coin value: Heads"+ "<br>");
} else {
    document.write(" 1 : " + "<br>" + "Random coin value: Tails"+ "<br>");
}

















/////////////// QUESTION 6 ////////////////////



var randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100: " + randomNumber + "<br>");













/////////////// QUESTION 7 ////////////////////


var weight = prompt("Enter your weight in kilograms:");
document.write("The weight of user is: " + weight + " kilograms<br>");















/////////////// QUESTION 8 ////////////////////

var secretNumber = Math.floor(Math.random() * 10) + 1;
var userGuess = prompt("Guess the secret number between 1 and 10:");

if (userGuess == secretNumber) {
  document.write("Congratulations! You guessed the secret number right.</h3>");
} else {
  document.write("Sorry!Try Again");
}
