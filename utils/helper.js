const fs = require("fs");

function readFile (path) {
    let lines = fs.readFileSync(path, 'utf8');
    return lines.split(/\n/);
}

module.exports = { readFile }