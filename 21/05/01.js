const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input2')).toString()

const input = rawInput.split(/\D/g).filter(e => e).map(e => parseInt(e))
const largestNum = Math.max.apply(null, input)

let data = ""

//really bad 2d array assignment. cba
var map = new Array(largestNum+1);

for (var i = 0; i < map.length; i++) {
  map[i] = new Array(map.length);
}

for (var x = 0; x < map.length; x++) {
    for (var y = 0; y < map[x].length; y++) {
        map[x][y] = 0
    }
}


function mapVertical(x1,y1,x2,y2){
    let x = x1
    if(y1 > y2){
        let yY = y1
        y1 = y2
        y2 = yY
    } 
    //console.log("Horizont; Y: " + y1 + "->" + y2 + " X: " + x)
    for(let y = y1; y <= y2; y++){
        map[y][x] += 1
    }
    
}

function mapHorizontal(x1,y1,x2,y2){
    let y = y1
    if(x1 > x2){
        let xX = x1
        x1 = x2
        x2 = xX
    } 
    //console.log("Vertical; X: " + x1 + "->" + x2 + " Y:" + y)
    for(let x = x1; x <= x2; x ++){
        map[y][x] += 1
    }
}

function determineDirection(){
    for(let i = 0; i < input.length; i +=4){
        if(input[i] == input[i+2]) mapVertical(input[i],input[i+1],input[i+2],input[i+3])
        else if (input[i+1] == input[i+3]) mapHorizontal(input[i],input[1+i],input[2+i],input[3+i])
    }
}

function evaluateMap(){
    determineDirection()
    data = map.map(e => e.toString().replace(/0/g,".")+"\n").toString().replace(/,/g,"")
    console.log(data)
    const hotspots = map.reduce((a,b) => a.concat(b)).filter(e => e >= 2)
    
    return hotspots.length
}

const answer = evaluateMap()
console.log(answer)

//Solved. Answer = 8350


  
// fs.writeFile("ventsp2.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n")
//     console.log("The written has the following contents:")
//     console.log(fs.readFileSync("ventsp2.txt", "utf8"))
//   }
// })