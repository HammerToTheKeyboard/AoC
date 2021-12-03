const { EPERM } = require('constants');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

const input = rawInput.split(/\s+/)

let gamma = ""
let epsilon = ""
for(let i = 0; i < input[0].length; i++){

    let bit = Math.round(input.map(row => parseInt(row.charAt(i))).reduce((a,b) => a + b, 0)/input.length)

    gamma += bit
    epsilon += (1- bit)

}

console.log(gamma, epsilon)
console.log(parseInt(gamma, 2)*parseInt(epsilon,2))

//Solved. Answer = 3429254