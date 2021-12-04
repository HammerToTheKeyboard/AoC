const { EPERM } = require('constants');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(/\s+/)

function dominantBit(input, bit, mask){
    const dominantBit = Math.abs(Math.round(input.filter(e => e.charAt(bit) == 1).length/input.length) - mask)
    return dominantBit
}

function lifeSupport(input, bit, mask){
    if(input.length == 1){
        console.log(input[0])
        return input[0]
    }
    else {
        const output = input.filter(e => e.charAt(bit) == dominantBit(input, bit, mask))
        return lifeSupport(output, ++bit, mask)
    }
}

const  o2rating = lifeSupport(input, 0, 0)
const co2rating = lifeSupport(input, 0, 1)
const answer = parseInt(o2rating, 2) * parseInt(co2rating, 2)

console.log(answer)

//Solved. Answer = 5410338
