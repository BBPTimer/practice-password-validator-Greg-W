const readline = require('readline-sync');

console.log(`Please enter a password. The password should meet all these requirements:

The password must be at least 8 characters long.
The password must contain at least one uppercase letter.
The password must contain at least one number.`);

let password = "";
let eightCharLong = false;
let oneUppercaseLetter = false;
let oneNumber = false;

do {
    eightCharLong = false;
    oneUppercaseLetter = false;
    oneNumber = false;

    password = readline.question("\nPlease enter your password: ");

    if (password.length >= 8) {eightCharLong = true};

    if (password.search(/[A-Z]/) !== -1) {oneUppercaseLetter = true};
    //if (password.search(/[0-9]/) !== -1) {oneNumber = true};

    for (const character of password) {
        if (!isNaN(character)) {oneNumber = true};
    };

    if (eightCharLong === false) {console.log("The password must be at least 8 characters long.")};
    if (oneUppercaseLetter === false) {console.log("The password must contain at least one uppercase letter.")};
    if (oneNumber === false) {console.log("The password must contain at least one number.")};
 } while (eightCharLong === false || oneUppercaseLetter === false || oneNumber === false);

 console.log("Success!");