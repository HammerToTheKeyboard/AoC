//--- Day 10: Syntax Scoring ---

const fs = require('fs')
const path = require("path");
const { listeners } = require('process');
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const lines = rawInput.split(/\n/g).map(e => e.trim())

//input handling

missingChars = []
scores = []

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
            return 
        } else {
            //line is missing character(s)
            points(Array.from(line))
            return 
        }
    }
}

function points(line){
    let points = []
    let s = 0
    line.map(char => {
        switch(char){
            case "(":
                points.push(1)
                break
            case "[":
                points.push(2)
                break
            case "{":
                points.push(3)
                break
            case "<":
                points.push(4)
                break
        }
    })
    points.reverse().forEach(p => s = s * 5 + p)
    return scores.push(s)
}

function run(){
    console.time("run")
    lines.forEach((line,i) => reduct(i,line))
    const answer = scores.sort((a,b) => a - b)[(scores.length-1)/2]
    console.log(answer)
    console.timeEnd("run")
}

run()


//Solved. Answer = 3969823589