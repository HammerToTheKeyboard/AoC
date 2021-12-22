// --- Day 11: Dumbo Octopus ---

const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input1')).toString()

const lines = rawInput.trim().split(/\n/g).map(e => e.trim().split(""))
let octopi = []
let flashes = 0

function octopusSetup(){

    //raw octopi
    for(y in lines){
        line = lines[y]
        for(x in line){
            let octopus = {x: x, y: y, energy: parseInt(line[x]), flashed: false, adjacent: []}  
            octopi.push(octopus)     
        }
    }

    //adjacent octopi
    for(o in octopi){
        limit = lines[0].length
        octopus = octopi[o]
        y = octopus.y
        x = octopus.x
        console.log(x,y,limit, lines.length)
        //this
        if(octopus) {
            this_octopus = octopi.find(e => e.x == x && e.y == y)
            console.log("this", this_octopus)
        }
        //north
        if(y - 1 >= 0) {
            adjacent_octopus = octopi.find(e => e.x == x && e.y == y - 1)
            console.log("north", adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        }
        //northeast
        if(x + 1 < line.length && y - 1 >= 0){
            adjacent_octopus = octopi.find(e => e.x == x + 1 && e.y == y - 1)
            console.log("northeast",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //east
        if(x + 1 < limit){
            adjacent_octopus = octopi.find(e => e.x == x + 1 && e.y == y)
            console.log("east",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //southeast
        if(x + 1 < limit && y + 1 < lines.length){
            adjacent_octopus = octopi.find(e => e.x == x + 1 && e.y == y + 1)
            console.log("southeast",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //south
        if(y + 1 < lines.length){
            adjacent_octopus = octopi.find(e => e.x == x && e.y == y + 1)
            console.log("south",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //southwest
        if(x - 1 >= 0 && y + 1 < lines.length){
            adjacent_octopus = octopi.find(e => e.x == x - 1 && e.y == y + 1)
            console.log("southwest",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //west
        if(x - 1 >= 0){
            adjacent_octopus = octopi.find(e => e.x == x - 1 && e.y == y)
            console.log("west",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        //northwest
        if(x - 1 >= 0 && y - 1 >= 0){
            adjacent_octopus = octopi.find(e => e.x == x - 1 && e.y == y - 1)
            console.log("northwest",adjacent_octopus)
            octopus.adjacent.push(adjacent_octopus)
        } 
        
        //console.log(x, y, octopus.adjacent)
        
    }
    console.log(octopi.length, "octopi")
}

function step(steps) {
    let step = 0
    while(step <= steps){
        
        // console.log(`\nAfter step ${step}:`)
        // for(l in lines){
        //     console.log(octopi.filter(e => e.y == l).map(e => e.energy).toString())
        // }
        
        //energy ++
        for(o in octopi){
            octopus = octopi[o]
            octopus.energy++
        }
        
        substep()

        //return flashed to 0
        for(o in octopi){
            octopus = octopi[o]
            if(octopus.energy >= 9){
                octopus.energy = 0
            }
        }

        step++
    }
}

function substep(){
    // console.log(`\nSubstep:`)
    // for(l in lines){
    //     console.log(octopi.filter(e => e.y == l).map(e => e.energy).toString())
    // }
    let repeat = false
    
    for(o in octopi){
        octopus = octopi[o]
        if(octopus.energy >= 9 && !octopus.flashed){
            for(a in octopus.adjacent){
                adjacent_octopus = octopus.adjacent[a]
                adjacent_octopus.energy++
            }
            flashes++
            octopus.flashed = true
            repeat = true
        }
    }
    if(repeat){
        console.log("here")
        substep()
    } else return
}

function run(){
    
    console.time("run")
    octopusSetup()
    step(1)
    console.timeEnd("run")
    //console.log(flashes, "flashes")
}

run()