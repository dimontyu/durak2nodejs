'use strict'
let DurakGame = require('./durak');
const User = require('../models/user');
const uuid = require('uuid');
let Game_game = require('./du.game');
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
	exg.cach = [[], [], [], []];
	exg.deck_back = [];
	exg.roles = exg.pl_roles;
	
	let i = 0;
	for (const item of D_id) {

		exg.id = item;
		exg.target = i;

		let msg = JSON.stringify(exg);
		let client = map.get(item);
		client.on('message', function (message) { Message(message, map, exg) });
		client.on('close', function () { exg = null; jjj = null; });
		client ? client.send(msg.toString()) : null;

		i += 1



	}
	
};




async function sort(Game, usr, uid, path) {
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

function Message(message, map, durak) {
	let MSG = JSON.parse(message);
	let type = MSG?.type;
	if (type === 'set' && durak !==null) {
		Game_game(MSG, map, durak);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}
}