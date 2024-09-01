#! /usr/bin/env node
import inquirer from "inquirer";

//In this Program we will calculate your Birth
let currentdate = new Date();
console.log(currentdate);
let birthdate = await inquirer.prompt([{
    name :"date",
    type : "any",
    message : "Enter Date of birth in following Order Year-Month-Date:"
}]);
birthdate = new Date(birthdate.date);

let diff = currentdate.getTime() - birthdate.getTime();

//total days
let totaldays = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(`You have completed ${totaldays} days in the World`);

//total years
let Years =Math.floor( totaldays / 365);
console.log(`You have completed ${Years} Years in the World`);

//total Months
let Months = Years*12;
console.log(`You have completed ${Months} Months in the World`);

//total weeks
let weeks = Math.floor(totaldays/7);
console.log(`You have completed ${weeks} Weeks in the World`);

//total hours
let hours = Math.floor(totaldays*24);
console.log(`You have completed ${hours} Hours in the World`);

//total minutes
let minutes=hours*60;
console.log(`You have completed ${minutes} minutes in the World`);

//total Seconds
let seconds=minutes*60;
console.log(`You have completed ${seconds} Seconds in the World`);



