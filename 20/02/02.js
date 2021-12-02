const fs = require('fs')
const path = require("path");
const { mainModule } = require('process');
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.replace(/-/g, " ").replace(/:/g, " ").split(/\s+/)
var answer = 0

let i = 0
let values = []

while(i < input.length){
    let value = []
    value.push(parseInt(input[i])-1) //pos 1 at 0
    i++
    value.push(parseInt(input[i])-1) //pos 2 at 1
    i++
    value.push(input[i]) //letter at 2
    i++
    value.push(input[i]) //password at 3
    i++
    values.push(value)
}

for(let value in values){ 
    const v = values[value]
    const condition1 = (v[3].charAt(v[0]) === v[2])
    const condition2 = (v[3].charAt(v[1]) === v[2])
    const condition3 = ((condition1 || condition2) && !(condition1 && condition2))
    if(condition3){
        answer++
    }
}

console.log(values.length, answer)

//Solved. Answer = 558