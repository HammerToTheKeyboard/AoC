const { on } = require('events');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(",").map(e => parseInt(e))

const pos = input.sort((a,b) => a - b)
const medPos = pos.length/2
const medVal = Math.round((pos[medPos] + pos[medPos -1]) /2)

const dis = pos.map(e => Math.abs(e - medVal))
const disSum = dis.reduce((a,b) => a + b)

console.log(disSum)

//Solved. Answer = 355150