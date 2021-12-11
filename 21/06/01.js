const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(",").map(e => parseInt(e))

var school = [0,0,0,0,0,0,0,0,0]

input.forEach(e => school[e]++)

function simulateGrowth(time){
    let newSchool
    for(let i = 0; i < time; i++){
        //console.log(school)
        newSchool = [0,0,0,0,0,0,0,0,0]
        school.forEach((e,i) => {
            if(i === 0) newSchool[8] = e
            else newSchool[i-1] = e
        })
        newSchool[6] += school[0]
        school = newSchool
    }
    return school.reduce((a,b) => parseInt(a) + parseInt(b), 0)
}

answer = simulateGrowth(80)
console.log(answer)

//01 Solved. Answer = 366057
//02 Solved. Answer = 1653559299811