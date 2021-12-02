const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(/\s+/).map(str => parseInt(str))
var answer = undefined

loop:
    for(let outer in input){
        for(let inner in input){
            for(let innerer in input){
                if((input[outer] + input[inner] + input[innerer]) === 2020){
                    answer = input[outer] * input[inner] * input[innerer]
                    console.log(input[outer], input[inner], input[innerer])               
                    break loop
                }
            }
        }
    }

console.log(answer)

//Solved Answer = 539851