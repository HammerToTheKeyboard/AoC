const { EPERM } = require('constants');
const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input')).toString()

const numbers = rawInput.split(/\n/g,1)[0].split(",")
const boards = rawInput.split(/\n\s*\n/g).slice(1).map(e => e.split(/\n/g).map(e => e.split(/\D/g).filter(e => e)))
let called = []
let call

function makeColumn(board, pos){
    const column = board.map(e => e.slice(pos,pos+1))
    return column
}

function checkBingo(board){
    //rows
    for(row in board){
        const test = board[row].every(e => called.includes(e))
        if(test) return true
    }
    //columns
    for(row in board){
        const column = makeColumn(board, row)
        const test = column.every(e => called.includes(e))
        if(test) return true
    }
    return false
}

function testBoards(){
    for(number in numbers){
        call = numbers[number]
        called.push(call)
        for(board in boards){
            if(checkBingo(boards[board])){
                console.log("call:",call,"board:",board,"number:",number)
                return boards[board]
            } 
        }
    }
    return "bruh"
}

function sumUnmarked(board){
    const unmarked = board.reduce((a,b) => a.concat(b)).filter(e => !called.includes(e))
    const sumUnmarked = unmarked.reduce((a,b) => parseInt(a) + parseInt(b), 0)
    console.log("sum:",sumUnmarked)
    return sumUnmarked
}

const b = testBoards()
const s = sumUnmarked(b)
const a = parseInt(call) * s

console.log("answer",a)

//unsolved. calculated answers of 54366, 20213 are incorrect