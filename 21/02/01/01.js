const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const measurements = rawInput.split(/\s+/).map(str => parseInt(str))
var i = 0

for(var m = 1; m < measurements.length; m++){
    if(measurements[m] > measurements[m - 1]){
        i++
    }
}

console.log(i)

//solved. Answer = 1791