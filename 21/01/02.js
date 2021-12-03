const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const measurements = rawInput.split(/\s+/).map(str => parseInt(str))
var i = 0

for(var m = 0; m < measurements.length - 3; m++){
    if(measurements[m] < measurements[m+3]){
        i++
    }
}

console.log(i)

//Solved. Answer = 1822