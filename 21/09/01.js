const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input1')).toString()
const input = rawInput.split(/\n/g).map(e => e.trim().split("").map(e => parseInt(e)))
let iterations = 0
function minmalist(map, line, lineIndex, e, i){
    iterations++
    var a = true
    if(lineIndex != 0) a = !(e >= map[lineIndex-1][i])
    var b = true
    if(lineIndex < map.length-1) b = !(e >= map[lineIndex+1][i])
    const c = !(e >= line[i-1]) && !(e >= line[i+1])
    return a && b && c
}


const minima = input.map((line, lineIndex) => line.filter((e,i) => minmalist(input, line, lineIndex, e, i))).reduce((a,b) => a.concat(b)) 
const answer = minima.reduce((a,b) => a + b + 1, 0)        
console.log(iterations)
console.log(answer)

//Solved. Answer = 524