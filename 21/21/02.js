let i1 = 0
let wins1 = 0
let wins2 = 0

function turn(player1I, player2I) {
    // console.log(player1I, player2I)
    for(let e1 = 1; e1 <= 3; e1++){
        for(let e2 = 1; e2 <= 3; e2++){
            for(let e3 = 1; e3 <= 3; e3++){
                i1++


                let dist1 = e1 + e2 + e3
                let player1 = Object.fromEntries(Object.entries(move(player1I, dist1)))

                if(player1.points >= 21){
                    wins1++
                   
                    //console.log(`Player 1 wins with ${player1.points} points`)
                    continue
                }

                let i2 = 0
                for(let p1 = 1; p1 <= 3; p1++){
                    console.log(i1, i2, player1, player2)
                    for(let p2 = 1; p2 <= 3; p2++){
                        for(let p3 = 1; p3 <= 3; p3++){
                            i2++

                             

                            let dist2 = p1 + p2 + p3
                            let player2 = Object.fromEntries(Object.entries(move(player2I, dist2)))

                            if(player2.points >= 21){
                                wins2++
                                //console.log(`Player 2 wins with ${player2.points} points`)
                                continue

                            }
                            turn(player1, player2)
                        }
                    }
                }
            }
        }
    }
}



function move(player, dist) {
    let pos = player.pos
    let newPos = (pos + dist - 1) % 10 + 1
    player.pos = newPos
    player.points += newPos
    return player
}

function run(start1, start2) {
    console.time("run")
    player1 = {points: 0, pos: start1}
    player2 = {points: 0, pos: start2}
    turn(player1, player2)
    console.timeEnd("run")
    let answer = Math.max(wins1, wins2)
    console.log(wins1, wins2)
    console.log("Iterations", i1+ i2)
}

run(4, 8)