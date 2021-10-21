var name = prompt("Hello and welcome. Please enter your first name:");
var lname = prompt("Please enter your last name:");
var age = prompt("How old are you?");
var height = prompt("How tall are you in centimeters");
var petName = prompt("What is the name of your pet?");

if(name[0]===lname[0] && age >=20 && age <= 30 && height>=170 &&petName[petName.length-1]==="y"){
    console.log("Welcome Comrade! You've passed the Spy Test");
}else{
    console.log("Nothing to see here");
}