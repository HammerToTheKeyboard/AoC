const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input1')).toString()

const lines = rawInput.trim().split("\n").map(line => line.replace(/[\, | \.\. | x | y | z | \= ]/g, " ").replace(/  +/g, " ").split(" "))

let activeCubes = new Set()
let o = 0

function makeCommand(line) {
    let command = {mode: line[0], x1: parseInt(line[1]), x2: parseInt(line[2]), y1: parseInt(line[3]), y2: parseInt(line[4]), z1: parseInt(line[5]), z2: parseInt(line[6])}
    return command
}

function executeCommand(cmd) {
    for(let x = cmd.x1; x <= cmd.x2; x++){
        for(let y = cmd.y1; y <= cmd.y2; y++){
            for(let z = cmd.z1; z <= cmd.z2; z++){
                if(cmd.mode == "off"){
                    if(activeCubes.delete(`${x}${y}${z}`)) o++
                } 
                else if(cmd.mode == "on"){
                    activeCubes.add(`${x}${y}${z}`)                    
                } 
            }
        }
    }
}

function run(params) {
    
    console.time("run")
    for(i in lines){
        executeCommand(makeCommand(lines[i])) 
        if(i == 19) break
    }
    console.timeEnd("run")
    console.log("ON cubes:", activeCubes.size, `  Turned off cubes ${o} times`)
}

run()