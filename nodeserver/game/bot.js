'use strict'
const Game_game = require('./du.game');


module.exports=class Bot{
    constructor(durak){
	this.client={};
	this.durak=durak;
	this.map=[this.client,this];
	this.clients.bind(this);
	this._myrole=this.durak.roles[this.durak.target];
	};
	
set clnt(a){this.client=a;
this.map=[this.client,this];
this.init()[0];
this.init()[1];
this.client.on('message',(message)=>{this.Message(message,this.map,this.durak,this )});
this.client.on('close', function () { this.durak = null;});
this.start();
	};
clients(){console.log(this.durak)};

async Message(message, map, durak,tr) {
	
	this.init()[0];this.init()[1];
	let MSG = JSON.parse(message);
	console.log(MSG);
	(MSG?.res)?[this.durak.roles=MSG.res,this.init()[0],this.init()[1]]:null;

	let type = MSG?.type;
	if (type === 'set' && durak !==null) {
	await Game_game(MSG, map, durak,tr);//this.clients();
	//console.log('Att',this.durak.attacker,'\n','DF',this.durak.defender);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}//else this.clients();
 };
 init(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}
async start(){
let Durak=this.durak;	
let m_role=this._myrole;
let tg=this.durak.target;	
if(m_role==='attacker'){
Durak.passes +=1
let a={type:"set",
players:tg,
pos:Number(1),
id:Durak.id,
name:Durak.name,
deck_id:Durak.deck_id,
role:m_role,
passes:Durak.passes,
roles:Durak.roles}
let message=JSON.stringify(a)	
await this.Message(message,this.map,Durak,this );
//await Game_game(a,this.map, Durak,true)	
}	 
	 
if(m_role==='defender'){};	 
 };
};