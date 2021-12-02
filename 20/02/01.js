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
    value.push(parseInt(input[i])) //min at 0
    i++
    value.push(parseInt(input[i])) //max at 1
    i++
    value.push(input[i]) //letter at 2
    i++
    value.push(input[i]) //password at 3
    i++
    values.push(value)
}

for(let value in values){ 
    const regex = new RegExp(values[value][2],'g')
    const v = values[value][3].match(regex)
    if( v ){
        const l = v.length
        if(l >= values[value][0] && l <= values[value][1]){
            answer++
        }
    }  
}

console.log(values.length, answer)

//Solved. Answer = 536