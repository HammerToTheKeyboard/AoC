const fs = require('fs')
const path = require("path")
const raw_input = fs.readFileSync(path.resolve(__dirname,'input3')).toString()

const lines = raw_input.split(/\n/g).map(e => e.split("|").map(e => e.trim().split(" ")))    

function determine_true_values(line){
    try {
        line = { signals: line[0].map(e => e.split("")), inputs: line[1].map(e => e.split("")), true_numbers: {}, true_letters: {} }

        //---------------------------------------------------
        line.true_numbers.one = line.signals.find(signal => signal.length == 2)
        line.true_numbers.four = line.signals.find(signal => signal.length == 4)
        line.true_numbers.seven = line.signals.find(signal => signal.length == 3)
        line.true_numbers.eight = line.signals.find(signal => signal.length == 7)
    
        line.true_letters.a = line.true_numbers.seven.find(e => !line.true_numbers.one.includes(e))
        
        line.true_numbers.nine = line.signals.filter(e => e.includes(line.true_letters.a) && e.length == 6).find(e => line.true_numbers.four.every(f => e.includes(f)))

        line.true_letters.g = line.true_numbers.nine.filter(e => !line.true_numbers.four.includes(e)).find(e => e != line.true_letters.a)

        line.true_letters.e = line.true_numbers.eight.find(e => !line.true_numbers.nine.includes(e))

        line.true_numbers.three = line.signals.filter(e => line.true_numbers.seven.every(f => e.includes(f))).find(e => e.length == 5)

        line.true_letters.d = line.true_numbers.three.filter(e => !line.true_numbers.seven.includes(e)).find(e =>  e != line.true_letters.g)

        line.true_numbers.zero = line.true_numbers.eight.filter(e => e != line.true_letters.d) 
        
        line.true_letters.b = line.true_numbers.four.filter(e => !line.true_numbers.one.includes(e)).find(e => e != line.true_letters.d)

        line.true_numbers.five = line.signals.filter(e => e.length == 5).find(e => e.includes(line.true_letters.b))

        line.true_numbers.six = line.true_numbers.five
        line.true_numbers.six.push(line.true_letters.e)

        line.true_numbers.two = line.signals.filter(e => e.length == 5).find(e => e != line.true_numbers.three && e != line.true_numbers.five)

        line.true_letters.c = line.true_numbers.one.find(e => !line.true_numbers.two.includes(e))

        line.true_letters.f = line.true_numbers.one.find(e => e != line.true_letters.c )





        console.log(line.true_letters)

    } catch (error) {

        console.log(error)

    }
}


determine_true_values(lines[0])


//var signals = input[i][0].map(e => e.split(""))