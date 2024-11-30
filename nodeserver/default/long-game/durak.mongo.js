'use strict'
//не используеться использовать du.game.js

let DurakGame=require('./durak');
let Durak = require('../models/game.ex');
const User = require('../models/user');
const uuid = require('uuid');
module.exports = async function (userId, map, Game, path) {
	let jjj = new DurakGame(path);
	const name_id = uuid.v4();//id- game example
	let exg = jjj.play_game();
	exg.name = name_id;
	let y = await User.findOne({ session_id: userId })
	Game.delete(userId);
	let [G_m, D_id] = await sort(Game, y.name, userId, path);
	exg.deck_id = D_id;
	exg.usernames = G_m;
	await init_Game(exg);
	let i = 0;
	for (const item of D_id){
		
		exg.id = item;
		exg.target = i;
		
		let msg = JSON.stringify(exg);
		let clie = map.get(item);
		clie ? clie.send(msg.toString()) : null;
		
		i += 1
		


	}
	jjj = null;

};
		
async function init_Game(du) {
   
	const durak = new Durak({
		players_count: du.players_count, deck: du.deck, active_suit: du.active_suit, attacker: du.attacker, defender: du.attacker,
		players: du.players, passes: du.passes, target: du.target, deck_id: du?.deck_id, iid: du.id, name: du?.name, cach: [[], [], [], []], deck_back: [], roles: du.pl_roles, usernames: du.usernames
});

    durak.save(function (err,du) {
        if (err) return console.log(err);
		console.log(du._id)
    });
}		


async function sort(Game,usr,uid,path) {
	let gamers = [];
	let deck_id = [];
	let i = 0;
	gamers.push(usr);
	deck_id.push(uid);
	for (const item of Game) {
		let y = await User.findOne({ session_id: item })
		gamers.push(y.name);
		deck_id.push(item)
		Game.delete(item)
		i += 1
		if (i === (path - 1)) { return [gamers, deck_id] }
	}
	
}		