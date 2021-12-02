const fs = require('fs')
const path = require("path");
const string = fs.readFileSync(path.resolve(__dirname,'input')).toString()

forrest = string.split("\n").map(e => e.split(""))

function slide(right,down){
    console.log("right:",right,"down:",down)
    let a = 0

    for(f in forrest){
        let y = f*down
        let x = (f*right)%(string.indexOf("\n")-1)
        if(y <= forrest.length){
            if(forrest[y][x] == "#"){
                a++
            }  
        } 
    } 
    console.log(a)
    return parseInt(a)
}

let answer = slide(1,1) * slide(3,1) * slide(5,1) * slide(7,1) * slide(1,2)

console.log(answer)


//Solved. Golfed. Answer = 254