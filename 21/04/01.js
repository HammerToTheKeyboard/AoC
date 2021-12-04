const fs = require('fs')
const path = require("path");
const rawInput = fs.readFileSync(path.resolve(__dirname,'input2')).toString()

const numbers = rawInput.split(/\n/g,1)[0].split(",")
const boards = rawInput.split(/\n\s*\n/g).slice(1).map(e => e.split(/\n/g).map(e => e.split(/\D/g).filter(e => e)))
let called = []
let call

function makeColumn(board, pos){
    return board.map(e => e[pos])
}

function checkBingo(board){
    for(row in board){
        //rows
        const testR = board[row].every(e => called.includes(e))
        if(testR){
            //console.log(board[row])
            //console.log("row: " + row)
            return true
        } else {
            //columns
            const column = makeColumn(board, row)
            const testC = column.every(e => called.includes(e))
            if(testC){
                //console.log(column)
                //console.log("column: " + row)
                return true
            }
        } 
    }
}

function testBoards(){
    for(number in numbers){
        call = numbers[number]
        called.push(call)
        for(board in boards){
            if(checkBingo(boards[board])){
                console.log("call:",call,"board num:",board,"number:",number)
                //console.log("board:" + boards[board])
                return boards[board]
            } 
        }
    }
    return "bruh"
}

function sumUnmarked(board){
    const unmarked = board.reduce((a,b) => a.concat(b)).filter(e => !called.includes(e))
    //console.log("unmarked: " + unmarked.toString())
    const marked = board.reduce((a,b) => a.concat(b)).filter(e => called.includes(e))
    //console.log("marked: " + marked.toString())
    const sumUnmarked = unmarked.reduce((a,b) => parseInt(a) + parseInt(b), 0)
    console.log("unmarked sum: ",sumUnmarked)
    return sumUnmarked
}

const b = testBoards()
const s = sumUnmarked(b)
const a = parseInt(call) * s

console.log("answer: ",a)

//Solved. Answer = 21607