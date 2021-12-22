universes = multiverse = ["1","2","3"]

function playGod(depth) {
    for(let l = 0; l < depth; l++){
        console.time(`Depth ${l+1}`)
        universes = universes.flat().map(u => {
            let n = new Array()
            for(let i = 1; i <= 3; i++){
                let v = u + i.toString()
                n.push(v)
            }
            return n
        })
        console.timeEnd(`Depth ${l+1}`)
    }
}

function run(depth) {
    console.time("run")
    
    playGod(depth)
    console.timeEnd("run")
    console.log(universes.flat().length);
}

run(15)
