// --- Day 12: Passage Pathing ---

//input handling
rawInput = ""
lines = rawInput.split(/\n/g).map(line => line.split("-"))

//cave setup
function caveSetup(){
    for(i in lines){
        line = lines[i]
        if(!caves.find(line[0])){
            let cave = {id: line[0], small: !line[0].match(/:upper:/g), adjacent: []}
            caves.push(cave)
        } else {
            caves.find(line[0]).adjacent.push(line[1])
        }
    }
    caves.find(line[1]).adjacent.push(line[0])
}

//traversing cave system
paths = []

async function move(path){
    let cave = path[path.length-1]
    adjacents = cave.adjacents.filter(nextCave => {
        !path.includes(nextCave) && nextCave.small
    })
    if(adjacents.length == 0){
        paths = paths.filter(p => p != path)
        return
    } else {
        for(a in adjacents){
            let nextCave = adjacents[a]
            newPath = Array.from(path)
            newPath.push(nextCave)
            if(nextCave.id == "end") return
            else { return move(newPath)}
        }
    }
}

//run
caveSetup()

move([caves.find("start")])

const answer = paths.length

console.log(answer)