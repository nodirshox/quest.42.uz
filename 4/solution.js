const util =require("../utils/helper");

let message = util.readFile("./message.txt");

message = message[0];

let convertedMessage = "";
let selected = {
    character: message[0],
    all: message[0]
};
for (let character = 0; character < message.length; character++) {
    if (selected.character == message[character+1]) {
        selected.all += selected.character;
    } else {
        // check here
        if (selected.all == "0") {
            convertedMessage += " ";
        } else if (selected.all == "2") {
            convertedMessage += "a";
        } else if (selected.all == "22") {
            convertedMessage += "b";
        } else if (selected.all == "222") {
            convertedMessage += "c";
        } else if (selected.all == "3") {
            convertedMessage += "d";
        } else if (selected.all == "33") {
            convertedMessage += "e";
        } else if (selected.all == "333") {
            convertedMessage += "f";
        } else if (selected.all == "4") {
            convertedMessage += "g";
        } else if (selected.all == "4") {
            convertedMessage += "g";
        } else if (selected.all == "44") {
            convertedMessage += "h";
        } else if (selected.all == "444") {
            convertedMessage += "i";
        } else if (selected.all == "5") {
            convertedMessage += "j";
        } else if (selected.all == "55") {
            convertedMessage += "k";
        } else if (selected.all == "555") {
            convertedMessage += "l";
        } else if (selected.all == "6") {
            convertedMessage += "m";
        } else if (selected.all == "66") {
            convertedMessage += "n";
        } else if (selected.all == "666") {
            convertedMessage += "o";
        } else if (selected.all == "7") {
            convertedMessage += "p";
        } else if (selected.all == "77") {
            convertedMessage += "q";
        } else if (selected.all == "777") {
            convertedMessage += "r";
        } else if (selected.all == "7777") {
            convertedMessage += "s";
        } else if (selected.all == "8") {
            convertedMessage += "t";
        } else if (selected.all == "88") {
            convertedMessage += "u";
        } else if (selected.all == "888") {
            convertedMessage += "v";
        } else if (selected.all == "9") {
            convertedMessage += "w";
        } else if (selected.all == "99") {
            convertedMessage += "x";
        } else if (selected.all == "999") {
            convertedMessage += "y";
        } else if (selected.all == "9999") {
            convertedMessage += "z";
        }

        selected.character = message[character+1];
        selected.all = message[character+1];
    }
}

console.log("Converted message:", convertedMessage);