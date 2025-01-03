'use strict'
const Game_game = require('./du.game');
const Bot=require('./bot');

module.exports =class Player{
   constructor(durak,D_id,map,botj){
       this.players=D_id;	
       this.durak=durak;
       this.map=map;
       this.Message=this.Message.bind(this);
	   this.bt=botj;
	   this.bot=null;
       this.init(this.durak,this.map);	
    }
init(durak,map){
let Client=null	
let i = 0;	
    for (const item of this.players) {

		durak.id = item;
		durak.target = i;

		let msg = JSON.stringify(durak);
		let client = map.get(item);
		if(this.bt){
		client?null:this.bot=new Bot(durak);
		client?Client=client:null;
		client?client.on('close', ()=>
		{ durak = null;this.bot.konduktor=null;this.bot.map=null;this.bot=null;}):null;
		}
		client ? client.send(msg.toString()) : null;
		if(!this.bt){
		client?client.on('message',(message)=>{this.Message(message,map,durak,this.bt )}):null;
		client?client.on('close', function () { durak = null;}):null;
		}
i += 1

    }
return	[this.bt?this.bot.clnt=Client:null];
};
async Message(message, map, durak,bt) {
	this.inits()[0];this.inits()[1];
	let MSG = JSON.parse(message);
	(MSG?.res)?this.durak.roles=MSG.res:null;
	let type = MSG?.type;
	
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	if (type === 'set' && durak !==null) {
	await Game_game(MSG, map, durak,bt);
	//this.bot?.clients();
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
 };
 
 inits(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}

	};	
