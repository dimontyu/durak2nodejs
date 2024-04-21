'use strict'
let DurakGame=require('./durak');
let Durak=require('../models/game.ex');
const uuid = require('uuid');
module.exports=function(userId,map,Game,path){let jjj=new DurakGame(path);
const name_id = uuid.v4();
let client=map.get(userId);
//console.log(jjj.play_game())
let exg=jjj.play_game();
exg.name=name_id;
//exg.id=userId;
//let msg=JSON.stringify(exg);
Game.delete(userId);
let i=0;
for (const item of Game) {

exg.id=item;
exg.target=i;
exg.deck_id.push(item)
let msg=JSON.stringify(exg);	
let clie=map.get(item);	
clie?clie.send(msg.toString()):null;
clie.send(JSON.stringify({"connect":exg.players_count}))
Game.delete(item);i+=1
if(i===(path-1)){
exg.id=userId;
exg.target=i;
let msg=JSON.stringify(exg);exg.deck_id.push(userId);client?client.send(msg.toString()):null;init_Game(exg);
client.send(JSON.stringify({"connect":exg.players_count}))


return}	
	

}


		}
		
function init_Game(du) {
   
const durak = new Durak({players_count:du.players_count,deck:du.deck,active_suit:du.active_suit,attacker:du.attacker,defender:du.attacker,
    players:du.players,passes:du.passes,target:du.target,deck_id:du?.deck_id,iid:du.id,name:du?.name,cach:[[],[],[],[]],deck_back:[],roles:du.pl_roles});

    durak.save(function (err,du) {
        if (err) return console.log(err);
		console.log(du._id)
    });
}		
		