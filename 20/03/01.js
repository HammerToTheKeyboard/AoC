const fs = require('fs')
const path = require("path");
const s = fs.readFileSync(path.resolve(__dirname,'input')).toString()

a=0;p=s.split("\n").map((e,i)=>a+=e[i*3%31]=="#");console.log(a)

//Solved. Golfed. Answer = 254