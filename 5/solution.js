const util =require("../utils/helper");

let commands = util.readFile("./commands.txt");

let position = {
    x: 0,
    y: 0
}

for (let index = 0; index < commands.length; index++) {
    let meters = parseInt(commands[index].substring(1));
    
    direction = commands[index][0];
    if (direction == "R") {
        position.x += meters;
    } else if (direction == "L") {
        position.y += meters;
    }
}

console.log("Result: ", position)