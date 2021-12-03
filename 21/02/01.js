
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()
const input = rawInput.split(/\s+/)

let commands = []

for(i = 1; i < input.length; i+=2){
    command = {x: 0, y:0}
    //console.log(input[i-1], input[i])
    switch (input[i-1]){
      case "forward":
        command.x += parseInt(input[i])
        break
      case "down":
        command.y += parseInt(input[i])
        break
      case "up":
        command.y -= parseInt(input[i])
        break
    }
    commands.push(command)
  }
  
  pos = {x: 0, y: 0}
  commands.map(c => {
    pos.x += c.x
    pos.y += c.y
  })
  
  answer = pos.x * pos.y
  console.log(pos.x, pos.y, answer)


//Solved. Answer = 1936494