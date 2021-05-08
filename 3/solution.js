const util =require("../utils/helper");

let passwords = util.readFile("./passwords.txt");

let validPasswords = 0;

const atOneLetter = /.*[a-z].*/;
const atOneCapitalLetter = /.*[A-Z].*/;
const atOneDigit = /.*[0-9].*/;
const atSpecialCharacter = /.*[$#@].*/;
const miniumLength = /.{8,}/

for (let index = 0; index < passwords.length; index++) {
    let word = passwords[index];

    if (
        word.match(atOneLetter) && 
        word.match(atOneCapitalLetter) &&
        word.match(atOneDigit) &&
        word.match(atSpecialCharacter) &&
        word.match(miniumLength)
    ) {
        validPasswords += 1;
    }
}

console.log("Valid passwords count: ", validPasswords);