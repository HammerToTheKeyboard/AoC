async = require("async")
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(/\n/g).map(e => e.trim().split("").map(e => parseInt(e)))

let points = []
input.forEach((line,lineI) => line.forEach((element,elementI) => {
    let point = {x: elementI, y: lineI, value: element, basin: 0}
    points.push(point)
}))

let minima = []
let unknown = points.filter(point => point.value != 9)
let total = unknown.length

let iterations = 0

while(unknown.length > 0){
    let origin = point = unknown.shift()
    move(origin, point, [], 0)
}

function move(origin, point, path){
    try {
        iterations++

        let x = point.x
        let y = point.y
        let value = point.value

        let adjacent = points.filter(point => (point.y == y && (point.x == x-1 || point.x == x+1)) || (point.x == x && (point.y == y-1 || point.y == y+1)))
        let next = adjacent.find(point => point.value < value)
        if(!next) next = adjacent.find(point => point.value <= value)

        if(next){
            point = next
            path.push(point)
            move(origin, next, path)
        } else {
            const unknownpath = path.filter(point => unknown.includes(point))
            unknown = unknown.filter(point => !path.includes(point))
            point.basin += unknownpath.length+1
            
            if(!minima.includes(point)) minima.push(point)
        } 
        return
    } catch (error) {
        console.log(error)
    }
}

console.log("Iterations: " + iterations)
console.log("Total of non 9 fields: " + total)

const answer2 = minima.sort((a,b) => b.basin - a.basin).slice(0,3).map(point => point.basin).reduce((a,b) => a * b)

const answer1 = minima.map(point => point.value).reduce((a,b) => a + b + 1, 0)     

console.log("Answer 1: " + answer1 + "; Answer 2: " + answer2)

//Solved. Answer 1: 524; Answer 2: 1235430