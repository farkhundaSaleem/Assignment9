
// //////////////// QUESTION 1 ////////////////////



var firstName = prompt("Enter Your First Name");
var LastName = prompt("Enter Your Last Name");
var fullName = firstName + LastName ;
document.write( `Hey Welcome! ${fullName}<br>`);




// //////////////// QUESTION 2 ////////////////////


var mobile = prompt("Enter Your Favourite Mobile Phone Model : ");
document.write( "My favourite phone is : " + mobile + "<br>");
document.write( "Length of String : " + mobile.length + "<br>");




//////////////// QUESTION 3 ////////////////////



 var string = "Pakistan";
 document.write("Sring : Pakistan"+ "<br>");
 document.write("Index of 'n'  :"+ string.indexOf("n") + "<br>");




 
//////////////// QUESTION 4  ////////////////////

var sTring = "Hello World";
document.write("Sring : Hello World"+ "<br>");
document.write("Last Index of 'l'  :"+ sTring.lastIndexOf("l") + "<br>");
 


//////////////// QUESTION 5  ////////////////////

var stRing = "Pakistani";
document.write("Sring : Pakistani"+ "<br>");
document.write("Character at index 3  : " + string.charAt(3) + "<br>");



//////////////// QUESTION 6  ////////////////////

var firstName = prompt("Enter Your First Name");
var LastName = prompt("Enter Your Last Name");
document.write( "Hey Welcome! " + firstName + LastName + "<br>");




//////////////// QUESTION 7 ////////////////////


var word = "Hyderabad";
var newWord = word.replace("Hyder", "Islam");
document.write( "City : " + word + "<br>");
document.write( "After Replacement : " + newWord + "<br>");



//////////////// QUESTION 8 ////////////////////
var message = "Ali and Sami are best friends. They play cricket and football together.";
var change = message.replace(/and/g,"&");
document.write(change + "<br>");




//////////////// QUESTION 9 ////////////////////


var str = "472";
var num = Number(str);
document.write( "Value : 472" + "<br>");
document.write("Type : "+ typeof str + "<br>");
document.write( "Value : 472" + "<br>");
document.write("Type : "+ typeof num + "<br>");



//////////////// QUESTION 10 ////////////////////

var alp = prompt("Enter any word to convert in uppercase");
document.write("User Input : "+ alp + "<br>");
document.write("Upper Case : "+ alp.toUpperCase() + "<br>");




// //////////////// QUESTION 11 ////////////////////



var titleCase = prompt("Enter any word to convert in Title Case");
document.write("User Input : "+ titleCase + "<br>");
document.write("Title Case : "+ titleCase.to + "<br>");




// //////////////// QUESTION 12 ////////////////////

var num = 35.36;
var sTr = num.toString().replace(".", "");
document.write("Number : "+ num + "<br>");
document.write("String : "+ sTr + "<br>");




// //////////////// QUESTION 13 ////////////////////



var username = prompt("Enter your username:");


if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {

    document.write("Please enter a valid username without any special characters!"+ "<br>");
} else {
 
    document.write("Username: " + username + "<br>");
}



// //////////////// QUESTION 14 ////////////////////
var A = ["cake", "apple pie", "cookie", "chips", "patties"];





var searchItem = prompt("Welcome to ABC Bakery. Enter an item to search:" );

var found = false;


for (var i = 0; i < A.length; i++) {
  
  if (searchItem.toLowerCase() === A[i].toLowerCase()) {
   
    found = true;
    
    document.write(searchItem + " is available at index " + i + " in the array!"+ "<br>");
    break;
  }
}


if (!found)document.write(searchItem + " is not available in the array!"+ "<br>");





// //////////////// QUESTION 15 ////////////////////
let password = prompt("Enter a password:");
document.write("Entered Password : " + password+ "<br>");
if (password.length < 6) {
  document.write("Password should be at least 6 characters long."+ "<br>");
  document.write("Please enter a valid password"+ "<br>")
} else if (!isNaN(password[0])) {
  document.write("Password should not start with a number."+ "<br>");
  document.write("Please enter a valid password"+ "<br>")
} else if (!/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
  document.write("Password should contain alphabets and numbers."+ "<br>");
  document.write("Please enter a valid password"+ "<br>")
} else {
  document.write("Please enter a valid password"+ "<br>");
}



// //////////////// QUESTION 16 ////////////////////



var university = "University of Karachi";
var arr = university.split("");

for(var i=0; i<arr.length; i++){
document.write(arr[i] + "<br>");
}

// //////////////// QUESTION 17 ////////////////////

var userInput = prompt("User Input");
document.write( "User Input :" + userInput  + "<br>");
document.write( "Last Character Of Input :" + userInput.charAt(userInput.length - 1) + "<br>" );



// //////////////// QUESTION 18 ////////////////////

var strIng ="The quick brown fox jumps over the lazy dog";
document.write( "Text :" + strIng + "<br>");
var count = strIng.toLowerCase().split("the").length - 1;
document.write( "There are " + count + " occurance of word 'the'.");