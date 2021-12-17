const { on } = require('events');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

const input = rawInput.split(/\n/g).map(e => e.split("|").map(e => e.trim().split(" ")))    

var outputs = []

for(i in input){
    //Figure out what signals mean
    var signals = input[i][0].map(e => e.split(""))
    
    var vOne = signals.find(e => e.length == 2)
    var vFour = signals.find(e => e.length == 4)
    var vSeven = signals.find(e => e.length == 3)
    var vEight = signals.find(e => e.length == 7)

    var vA = vSeven.find(e => !vOne.includes(e))

    var vNine = signals.filter(e => e.includes(vA) && e.length == 6).find(e => vFour.every(f => e.includes(f)))

    var vG = vNine.filter(e => !vFour.includes(e)).find(e => e != vA)

    var vE = vEight.find(e => !vNine.includes(e))

    var vThree = signals.filter(e => vSeven.every(f => e.includes(f))).find(e => e.length == 5)

    var vD = vThree.filter(e => !vSeven.includes(e)).find(e =>  e != vG)

    //Unnecessary. Totally didnt waste a lot of time on this

    var vB = vFour.filter(e => !vOne.includes(e)).find(e => e != vD)
    //console.log(vG, vB, vThree)
    //break
    // var vZero = vEight.filter(e => e != vD)   

    // var vFive = signals.filter(e => e.length == 5).find(e => e.includes(vB))

    // var vSix = vFive
    // vSix.push(vE)

    // var vTwo = signals.filter(e => e.length == 5).find(e => e != vThree && e != vFive)

    //Figure out what the output signals are
    var output = input[i][1].map(e => e.split(""))

    output = output.map(e => {
        if(e.length == 7) return 8
        else if(e.length == 4) return 4
        else if(e.length == 3) return 7
        else if(e.length == 2) return 1
        else if(e.length == 5){
            console.log(e, vE, vB)
            if(e.includes(vE)) return 2
            else if(e.includes(vB)) return 5
            else return 3
        } else if(e.length == 6){
            if(!e.includes(vD)) return 0
            else if(!e.includes(vE)) return 9
            else return 6
        }
    }).toString().replace(/,/g,"")

    console.log((parseInt(i)+1) + ": " + output)
        
    outputs.push(parseInt(output))

}

const answer = outputs.reduce((a,b) => a + b, 0)
console.log("Answer: "+ answer)
// break

//Solved. Answer = 102464


