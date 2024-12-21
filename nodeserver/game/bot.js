'use strict'
const Game_game = require('./du.game');
const Konduktor=require('./botstate');
const astart=require('./start');
const defstart=require('./defstart');
class Bot{
    constructor(durak){
	this.client={};
	this.durak=durak;
	this.map=[this.client,this];
	this.clients.bind(this);
	this._myrole=this.durak.roles[this.durak.target];
	};
konduktor=new Konduktor();	
set clnt(a){this.client=a;
this.map=[this.client];
this.init()[0];
this.init()[1];
this.client.on('message',(message)=>{this.Message(message,this.map,this.durak)});
this.client.on('close', ()=>{ this.durak = null;this.konduktor=null;this.map=null});
this._myrole==='attacker'?this.start():null;
	};
clients(){console.log(this.durak)};

async Message(message, map, durak) {
	
	this.init()[0];this.init()[1];
	let MSG = JSON.parse(message);
	//console.log(MSG);
(MSG?.res)?[this.durak.roles=MSG.res,this.init()[0],this.init()[1],this._myrole=this.durak.roles[this.durak.target]]:null;

	let type = MSG?.type;
	if (type === 'set' && durak !==null&&MSG?.role==="defender"&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setback=u;
	//console.log(durak.players[durak.target])
	await Game_game(MSG, map, durak,this)
	await this.start(MSG);
	//return await Game_game(MSG, map, durak,this);//this.clients();
	
	}
	if (type === 'set' && durak !==null&&MSG.taks) {
	return	await Game_game(MSG, map, durak,this);}
	////defff///
	if (type === 'set' && durak !==null&&(MSG?.role==="attacker")&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setAktive=u;
	//console.log(durak.players[durak.target])
	//await Game_game(MSG, map, durak,this);
	await this.defstart(MSG);	
	//await Game_game(MSG, map, durak,this);	
		
		
		
	//return	await Game_game(MSG, map, durak,this);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}//else if(type === 'set' && durak !==null){return await Game_game(MSG, map, durak,this);}
 };
 init(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}
 
async start(msg){try{await astart.call(this,msg)}catch(error){console.error(error);}};
async defstart(msg){try{await defstart.call(this,msg)}catch(error){console.error(error);}};
}




module.exports=Bot;