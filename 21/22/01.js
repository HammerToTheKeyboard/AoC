const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

const lines = rawInput.trim().split("\n").map(line => line.replace(/[\, | \.\. | x | y | z | \= ]/g, " ").replace(/  +/g, " ").split(" "))

let activeCubes = new Set()
let o = 0

function makeCommand(line) {
    let cmd = {mode: line[0], x1: parseInt(line[1]), x2: parseInt(line[2]), y1: parseInt(line[3]), y2: parseInt(line[4]), z1: parseInt(line[5]), z2: parseInt(line[6])}
    return cmd
}

function crop(cmd) {
    if(test(cmd.x1) == "s" && test(cmd.x2) != "s") cmd.x1 = -50
    if(test(cmd.x1) != "l" && test(cmd.x2) == "l") cmd.x2 = 50
    
    if(test(cmd.y1) == "s" && test(cmd.y2) != "s") cmd.y1 = -50
    if(test(cmd.y1) != "l" && test(cmd.y2) == "l") cmd.y2 = 50

    if(test(cmd.z1) == "s" && test(cmd.z2) != "s") cmd.z1 = -50
    if(test(cmd.z1) != "l" && test(cmd.z2) == "l") cmd.z2 = 50
    

    if(cmd.x1 >= -50 && cmd.x1 <= 50 && cmd.y1 >= -50 && cmd.y1 <= 50 && cmd.z1 >= -50 && cmd.z1 <= 50) return cmd

    else {
        cmd.mode = "oob"
        console.log(cmd)
        return cmd
    }
}

function test(value){
    let result = false
    if((value / 50) > 1) result = "l"
    else if((value / 50) < -1) result = "s"
    return result 
}

function executeCommand(cmd) {
    if(cmd.mode != "oob"){
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
}

function run() {
    
    console.time("run")
    for(i in lines){
        executeCommand(crop(makeCommand(lines[i]))) 
    }
    console.timeEnd("run")
    console.log("ON cubes:", activeCubes.size, `  Turned off cubes ${o} times`)
}

run()

//console.log(crop(makeCommand(lines[21])))

