const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(/\s+/)
let pos = {x: 0, y: 0, aim: 0}
console.log(input)
for(let i = 1; i < input.length; i += 2){
  //console.log(input[i-1], input[i])

  switch (input[i-1]){
    case "forward":
      pos.x += parseInt(input[i])
      pos.y += (pos.aim * parseInt(input[i]))
      break
    case "down":
      pos.aim += parseInt(input[i])
      break
    case "up":
      pos.aim -= parseInt(input[i])
      break
  }
}

answer = pos.x * pos.y
console.log(pos.x, pos.y, pos.aim, answer)

//Solved. Answer 1997106066