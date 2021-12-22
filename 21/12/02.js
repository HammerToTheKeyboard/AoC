// --- Day 12: Passage Pathing ---

//input handling
require("async")
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

let lines = rawInput.trim().split("\n").map(line => line.trim().split("-"))

let caves = []
// let caves = new Set()
// lines.flat().forEach(cave => caves.add(cave))
// caves = Array.from(caves)
//console.log(caves)

//cave setup
function caveSetup(){
    try {
        let line
        for(i in lines){
            line = lines[i]
            //console.log(line[0])
            if(!caves.find(e => e.id === line[0])){
                let cave = {id: line[0], small: !line[0].match(/[A-Z]/g), adjacent: []}
                //console.log(cave)
                caves.push(cave)
            }
            if(!caves.find(e => e.id === line[1])){
                let cave = {id: line[1], small: !line[1].match(/[A-Z]/g), adjacent: []}
                //console.log(cave)
                caves.push(cave)
            }
            caves.find(e => e.id === line[0]).adjacent.push(caves.find(e => e.id === line[1]))
            caves.find(e => e.id === line[1]).adjacent.push(caves.find(e => e.id === line[0]))
        }
    } catch (error) {
        console.log(error)
    }
}

//traversing cave system
let paths = []

async function move(path){
    try {
        let cave = path[path.length-1]
        let adjacents = cave.adjacent.filter(nextCave => {
            return (!path.includes(nextCave) || !nextCave.small)
        })
        //console.log(cave.adjacent, adjacents)
        
        if(adjacents.length > 0){
            //console.log(adjacents.map(cave => cave.id).toString())
            for(a in adjacents){
                let nextCave = adjacents[a]
                //console.log(path.map(cave => cave.id).toString())
                let newPath = Array.from(path)
                newPath.push(nextCave)
                paths.push(newPath)
                if(nextCave.id !== "end") move(newPath)
            }
        }
        paths = paths.filter(p => p != path)
        
    } catch (error) {
        console.log(error)
    }
}

function run(){
    console.time("run")
    caveSetup()
    move([caves.find(e => e.id === "start")])
    const answer = paths.length
    console.timeEnd("run")
    //paths.forEach(path => console.log(path.map(cave => cave.id).toString()))
    console.log(answer)
}

run()


//idea: run cave Setup a bunch of times, each time granting just one small cave a visit counter limit of 2. 
//then do a pathsearch just like part 1 on each of the cave setups. dont forget to get rid of duplicate paths