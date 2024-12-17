'use strict'
const Game_game = require('./du.game');
const Konduktor=require('./botstate');
const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];


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
this.client.on('close', function () { this.durak = null;});
this._myrole==='attacker'?this.start():null;
	};
clients(){console.log(this.durak)};

async Message(message, map, durak) {
	
	this.init()[0];this.init()[1];
	let MSG = JSON.parse(message);
	console.log(MSG);
(MSG?.res)?[this.durak.roles=MSG.res,this.init()[0],this.init()[1],this._myrole=this.durak.roles[this.durak.target]]:null;

	let type = MSG?.type;
	if (type === 'set' && durak !==null&&MSG?.role==="defender"&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setback=u;
	console.log(durak.players[durak.target])
	await this.start();
	return await Game_game(MSG, map, durak,this);//this.clients();
	
	}
	if (type === 'set' && durak !==null&&MSG.taks) {
	return	await Game_game(MSG, map, durak,this);}
	////defff///
	if (type === 'set' && durak !==null&&(MSG?.role==="attacker")&&!MSG.taks) {
	let players=MSG?.players;	
	let pos=MSG?.pos;
	let u=durak.players[players][pos];
	this.konduktor.setAktive=u;
	console.log(durak.players[durak.target])
	//await Game_game(MSG, map, durak,this);
	await this.start(MSG);	
	//await Game_game(MSG, map, durak,this);	
		
		
		
	//return	await Game_game(MSG, map, durak,this);
	}
	if (type === 'set' && durak === null) {
		console.log("GAME OVER");
	}//else if(type === 'set' && durak !==null){return await Game_game(MSG, map, durak,this);}
 };
 init(){return [this.durak.attacker=this.durak.players[this.durak.roles.indexOf('attacker')],this.durak.defender=this.durak.players[this.durak.roles.indexOf('defender')]];}
 
async start(msg){
let Durak=this.durak;	
let m_role=this._myrole;
let tg=this.durak.target;
//let k=Durak.players[tg].findIndex(Filter(item,index,Dur_ple))//найти подходящий карту???
let k=(Durak.passes!==0)&&(m_role==='attacker')?filterAttach.call(this,Durak.players[tg]):1;
let qk=(m_role==='defender')?filterDeffender.call(this,Durak.players[tg]):false;
//let task= await attacker.call(this,tg,k);//проверяет соотв хода???	
console.log(`k:${k}`);
console.log(`qk:${qk}`);
if(m_role==='attacker'&& k!==false){
	
Durak.passes +=1
let Mess={type:"set",
players:tg,
pos:Number(k),
id:Durak.id,
name:Durak.name,
deck_id:Durak.deck_id,
role:m_role,
passes:Durak.passes,
roles:Durak.roles};
let message=JSON.stringify(Mess);
this.konduktor.setAktive=Durak.players[tg][k];	
//await this.Message(message,this.map,Durak);
Durak.passes!==0?await Game_game(Mess,this.map, Durak,this):await this.Message(message,this.map,Durak);;
	
}if(m_role==='attacker'&& k===false){let w_m={type:"set","taks":`${tg}`,"players":Durak.target,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};await Game_game(w_m,this.map, Durak,this)	} 
	 
if(m_role==='defender'&& qk!==false){let a = Number(msg?.players);
        let b = Number(msg?.pos);
        let ps = Number(msg?.passes);
		Durak.passes=ps;
		Durak.cach[a].push(Durak.players[a][b]);
    Durak.players[a][b] = null;
	
let Mess={type:"set",
players:tg,
pos:Number(qk),
id:Durak.id,
name:Durak.name,
deck_id:Durak.deck_id,
role:m_role,
broken_card:this.konduktor.broken_card,
passes:Durak.passes,
roles:Durak.roles};	
		
	
this.map[0].send(JSON.stringify(Mess).toString())	
	
	
}
if(m_role==='defender'&& qk===false){await Game_game(msg,this.map, Durak,this);let w_m={type:"set","taks":`${tg}`,"players":Durak.target,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};await Game_game(w_m,this.map, Durak,this);		 
 };
};
}



function filterAttach(Dur_ple){
let A=false;	
let a_cards=this.konduktor.Aktive;
let b_cards=this.konduktor.Back;	
let a_b=a_cards.concat(b_cards);console.log(a_b)
let result=a_b.map(i=>{return i})	
for(let is=0;is<=Dur_ple.length-1;is++){
//console.log(`Dur_ple:${Dur_ple[is]}`);	
 result=a_b.findIndex((i,index)=>{if(Dur_ple[is]&&i){return i[1]==Dur_ple[is][1]}})
console.log(`result:${result}`);	
if(result!==-1){A=is;break}	
	
	
}	
//A?this.konduktor.setktive=Dur_ple[A]:null;	
return A;	
	
};//npm start


function filterDeffender(Dur_ple){
let A=false;	
let a_cards=this.konduktor.Aktive;
let b_cards=this.konduktor.Back;	
let result;
console.log(`a_cards:${a_cards}`)	
for(let is=0;is<=Dur_ple.length-1;is++){
//console.log(`a_cards:${a_cards}`);	
result=a_cards.findIndex((i,index)=>{if(Dur_ple[is]&&i){
	let w=(ranks.indexOf(i[1])<ranks.indexOf(Dur_ple[is][1]))&&(i[0]===Dur_ple[is][0]);
	w?a_cards.splice(index,1):null;w?b_cards.push(i):null;
	 return w
	                                                                                     }
	                                                                                        });	 
 
console.log(`result:${result}`);	
if(result!==-1){A=is;break}	
	
	
}	
//A?this.konduktor.setktive=Dur_ple[A]:null;	
return A;	
	
};//np

module.exports=Bot;