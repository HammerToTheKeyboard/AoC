const fs = require('fs')
const path = require("path");
const string = fs.readFileSync(path.resolve(__dirname,'input')).toString()

passports = string.split(/\n\s*\n/g)
let counter = 0

passports.forEach(passport => {
    passport.replace(/\n/g," ")
    let iyr = passport.match(/iyr/g)
    let hgt = passport.match(/hgt/g)
    let byr = passport.match(/byr/g)
    let pid = passport.match(/pid/g)
    let eyr = passport.match(/eyr/g)
    let hcl = passport.match(/hcl/g)
    let ecl = passport.match(/ecl/g)
    if(iyr && hgt && byr && pid && eyr && hcl && ecl){
        counter++
    }
})

console.log(counter)

//Solved. Answer = 210