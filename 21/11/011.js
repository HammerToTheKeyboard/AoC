
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

let octopi = rawInput.trim().split(/\n/g).map(e => e.trim().split(""))
let lines = []

for(y in octopi){
    let line = []
    for(x in octopi[y]){
        let octopus = {value: octopi[y][x], flashed: false}
        line.push(octopus)
    }
    lines.push(line)
}

octopi = lines

let flashed = 0
let stepFlashed = 0

function increaseAdjacent(x,y){
    try {
        //console.log("This pos:", x, y)
        //north
        let xLimit = octopi[y].length
        let yLimit = octopi.length
        if(y - 1 >= 0) {
            octopi[y - 1][x].value++
            //console.log("north", x, y -1)
        }
        //northeast
        if(x + 1 < xLimit && y - 1 >= 0){
            octopi[y - 1][x + 1].value++
            //console.log("northeast")
        } 
        //east
        if(x + 1 < xLimit){
            octopi[y][x + 1].value++
            //console.log("east", x + 1, y)
        } 
        //southeast
        if(x + 1 < xLimit && y + 1 < yLimit){
            octopi[y + 1][x + 1].value++
            //console.log("southeast")
        } 
        //south
        if(y + 1 < yLimit){
            octopi[y + 1][x].value++
            //console.log("south")
        } 
        //southwest
        if(x - 1 >= 0 && y + 1 < yLimit){
            octopi[y + 1][x - 1].value++
            //console.log("southwest")
        } 
        //west
        if(x - 1 >= 0){
            octopi[y][x - 1].value++
            //console.log("west", x - 1, y)
        } 
        //northwest
        if(x - 1 >= 0 && y - 1 >= 0){
            octopi[y - 1][x - 1].value++
            //console.log("northwest")
        } 
            
    } catch (error) {
        
        return console.log(error)
    }
    
}

function increaseAll() {
    for(y in octopi){
        for(x in octopi[y]){
            octopi[y][x].value++
        }
    }
}

function draw(s){
    let str = s
    octopi.forEach(o => {
        o.forEach(o => str += o.value)
        str += "\n"})
    console.log(str)
}

function step(){
    //increase all by 1 at the start of each step
    increaseAll()
    //possibly increase adjacent octopi, pseudo recursive
    while(octopi.flat().filter(o => o.value > 9).some(o => !o.flashed)){
        for(y in octopi){
            for(x in octopi[y]){
                if(octopi[y][x].value > 9 && !octopi[y][x].flashed){
                    octopi[y][x].flashed = true
                    increaseAdjacent(parseInt(x), parseInt(y))
                } 
            }
        }
    }
    //reset all octopi that flashed
    for(y in octopi){
        for(x in octopi[y]){
            if(octopi[y][x].flashed){
                octopi[y][x] = {value: 0, flashed: false}
                stepFlashed++
            } 
        }
    }
}

function run(steps){
    console.time("run")
    //draw("Before any steps:\n")
    let answer = 0
    for(let i = 0; i < steps; i++){
        if(stepFlashed == octopi.flat().length) answer = i
        if(answer != 0){
            break
        }
        stepFlashed = 0
        step()
        flashed += stepFlashed
        //draw(`After step ${i+1}:\n`)
    }
    
    console.timeEnd("run")
    console.log(answer)
}

run(1000)

//Part 2 Solved. Answer = 227