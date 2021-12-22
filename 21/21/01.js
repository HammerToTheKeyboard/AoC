

function play(start1, start2) {
    let turn = 1
    let player1 = {points: 0, pos: start1}
    let player2 = {points: 0, pos: start2}

    while(true){
        roll(player1, turn)
        if(player1.points >= 1000) break
        roll(player2, turn + 3)
        if(player2.points >= 1000) break
        turn += 6
    }
    let answer = Math.min(player1.points, player2.points) * (turn + 2) 
    console.log(answer)
}


function roll(player, turn) {
    let pos = player.pos
    let step = 3 * ((turn - 1) % 100 +1) + 3
    let newPos = (pos + step - 1) % 10 + 1
    player.pos = newPos
    player.points += newPos
}

play(7, 5)