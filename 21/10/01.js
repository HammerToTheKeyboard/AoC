//--- Day 10: Syntax Scoring ---

const fs = require('fs')
const path = require("path");
const { listeners } = require('process');
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const lines = rawInput.split(/\n/g).map(e => e.trim())

//input handling

corruptedChars = []

function reduct(i,line){
    let a = line.length 
    line = line.replace(/\(\)|\[\]|{}|<>/g,"")
    let b = line.length
    if(a != b){
        //everything is fine move along
        return reduct(i,line)
    } else {
        index = line.search(/\(}|\(\]|\(>|{\)|{\]|{>|\[\)|\[}|\[>|<\)|<}|<\]/g)
        if(index != -1){
            //line is corrupted
            let corruptedChar = line.charAt(index+1)
            return corruptedChars.push(corruptedChar)
        } else {
            //line is missing character(s)
            return
        }
    }
}

function points(){
    points = 0
    corruptedChars.forEach(char => {
        switch(char){
            case ")":
                points += 3
                break
            case "]":
                points += 57
                break
            case "}":
                points += 1197
                break
            case ">":
                points += 25137
                break
            default:
                return 
        }
    })
    return points
}

function run(){
    console.time("run")
    lines.forEach((line,i) => reduct(i,line))
    //reduct(0,lines[0])
    const answer = points()
    console.log(answer)
    console.timeEnd("run")
}

run()


//Solved. Answer = 265527