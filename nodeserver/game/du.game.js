'use strict'



module.exports = async function (msg, map, Durak,bot) {
    if (!msg?.taks) {
        let a = Number(msg?.players);
        let b = Number(msg?.pos);
        let ps = Number(msg?.passes);
        return await update(a, b, ps, map, msg, Durak,bot);
    }
    if (msg?.taks && (msg?.role === "defender")) {
        let t = Number(msg?.taks);
        let u = Number(msg?.players);

        return await defender_main(t, u, map, msg, Durak,bot);

    }
    if (msg?.taks && (msg.role === "attacker" || msg.role === "attacker2")) {
        console.log("attaker")
        let t = Number(msg?.taks);
        let u = Number(msg?.players);
        return await attaker_main(t, u, map, msg, Durak,bot);


    }
};



async function update(a, b, ps, map, msg, Durak,bot) {
    console.log(msg?.name)
    let game = Durak;


    game.cach[a].push(game.players[a][b]);
    game.players[a][b] = null;
    game.passes = ps;
if(bot){map[0].send(JSON.stringify(msg).toString())}
 else  { game.deck_id.forEach((client) => { map.has(client) ? map.get(client).send(JSON.stringify(msg).toString()) : null })}



    return 0;

}

async function defender_main(t, ui, map, msg, Durak,bot) {

    
    let game = Durak;

    for (let ie = 0; ie <= (game.players_count - 1); ie++) {
        game.players[ie] = await sortdek(game.players[ie])
        // for( let i of game.cach[ie]){game.players[ui].push(i)};
        game.cach[ie].forEach((i) => { game.players[ui].push(i) })
        game.cach[ie] = [];
        let n6 = game.players[ie].length;
        let nn6 = 6 - n6;
        if (nn6 > 0 && game.deck.length !== 0) {
            await popdek(game.deck, game.players[ie], nn6)
        }
        if (game.players[ie].length === 0) { game.players.splice[ie, 1] }
    }

    let gam_n = game; //console.log(result);
    let response = JSON.stringify({ 'type': 'round-taks', 'deck': gam_n.deck, 'players': gam_n.players, 'roles': gam_n.roles, 'cach': gam_n.cach, 'deck_back': gam_n.deck_back, 'deck_id': gam_n.deck_id, 'bito': false });
	if(bot){map[0].send(response.toString());bot.start()}
  else  {gam_n.deck_id.forEach((client) => { map.has(client) ? map.get(client).send(response.toString()) : null })}

}
async function attaker_main(t, u, map, msg, Durak,bot) {
    
    let game = Durak;
    let num = game.players.length;
    for (let ie = 0; ie <= num - 1; ie++) {

        game.players[ie] = await sortdek(game.players[ie]);

        let nn = game.players[ie].length;
        let nn6 = 6 - nn
        await pop_dek(nn6, game, ie)
        if (game.cach[ie].length > 0) {
            await back_dek(game.cach, ie, game.deck_back)

        }
        game.cach[ie] = [];
        if (game.players[ie].length === 0) { game.players.splice[ie,1] }
    }
    let gam_n = game; //console.log(result)
    let response = JSON.stringify({ 'type': 'round-taks', 'deck': gam_n.deck, 'players': gam_n.players, 'roles': gam_n.roles, 'cach': gam_n.cach, 'deck_back': gam_n.deck_back, 'deck_id': gam_n.deck_id, 'bito': true });
	if(bot){map[0].send(response.toString())}
  else { gam_n.deck_id.forEach((client) => { map.has(client) ? map.get(client).send(response.toString()) : null })}
}

async function sortdek(gm) {

    //let g = gm.map((i) => { if (i!==null|| i!==undefined) { return i } })
    let g = gm.filter((i) => { return (i !== null) })
    return g
}

async function popdek(gmd, gm, nn6) {
    for (let ii = 0; ii <= nn6 - 1; ii++) {
        let y = gmd.pop()
        if (y) {
            gm.push(y)
        }

    }
    return 0
}

async function back_dek(game_cach, num, game_deck_back) {

    for (let x of game_cach[num]) {
        if (x !== null) {
            game_deck_back.push(x)
        }
    }
}


async function pop_dek(nn6, game, ie) {


    if (nn6 <= 0) {

        return 0;
    }
    if (nn6 > 0 && (game.deck.length >= nn6)) {

        await popdek(game.deck, game.players[ie], nn6)
        return 0;
    }

    else if ((nn6 > game.deck.length) && (game.deck.length !== 0)) {

        await popdek(game.deck, game.players[ie], game.deck.length)
        return 0;
    }

    else {

        return 0;
    }
}