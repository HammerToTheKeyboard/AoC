const { on } = require('events');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()


const input = rawInput.split(/\n/g).map(e => e.split("|")[1]).map(e => e.split(/\s/g)).reduce((a,b) => a.concat(b))
const answer = input.filter(e => e.match(/\b\w{2,4}\b|\b\w{7,7}\b/g)).length
console.log(answer)

//Solved. Answer = 409