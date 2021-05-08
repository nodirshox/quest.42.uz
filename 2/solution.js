const ascii = require("./ascii");
const util =require("../utils/helper");

function calculateAscii (name) {
    let sum = 0;
    for (let index = 0; index < name.length; index++) {
        sum += ascii[name[index]];
    }
    return sum;
}

let winner = {
    name: "",
    score: 0
};

let names = util.readFile("./names.txt");

for (let index = 0; index < names.length; index++) {
    let score = calculateAscii(names[index]);
    if (winner.score <= score) {
        winner.name = names[index];
        winner.score = score;
    }
}

console.log(winner);