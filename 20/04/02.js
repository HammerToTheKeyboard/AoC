const fs = require('fs')
const path = require("path");
const string = fs.readFileSync(path.resolve(__dirname,'input')).toString()

passports = string.split(/\n\s*\n/g).map(passport => passport.replace(/\n/g," ")).map(passport => passport.split(" ").map(field => field.split(":")))

//for every passport[x] check if passport[x][x][0] in combination with passport[x][x][1] are all valid (except for cid)



console.log(passports[0][0][1])