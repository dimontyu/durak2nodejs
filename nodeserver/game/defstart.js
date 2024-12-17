const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];


const Game_game = require('./du.game');


async function defstart(msg){
let Durak=this.durak;	
let m_role=this._myrole;
let tg=this.durak.target;


let qk=(m_role==='defender')?filterDeffender.call(this,Durak.players[tg]):false;
	

console.log(`qk:${qk}`);
if(qk!==false){let a = Number(msg?.players);
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
if(qk===false){await Game_game(msg,this.map, Durak,this);let w_m={type:"set","taks":`${tg}`,"players":Durak.target,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};await Game_game(w_m,this.map, Durak,this);		 
 };
};




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


module.exports=defstart;