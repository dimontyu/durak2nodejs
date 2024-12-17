const ranks= ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits= ["Ch", "B", "K", "P"];


const Game_game = require('./du.game');


async function astart(msg){
let Durak=this.durak;	
let m_role=this._myrole;
let tg=this.durak.target;

let k=(Durak.passes!==0)&&(m_role==='attacker')?filterAttach.call(this,Durak.players[tg]):1;

console.log(`k:${k}`);

if( k!==false){
	
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
	
}if(k===false){let w_m={type:"set","taks":`${tg}`,"players":Durak.target,"id":Durak.id,"name":Durak.name,"deck_id":Durak.deck_id,"role":m_role,"roles":Durak.roles,};await Game_game(w_m,this.map, Durak,this)	} 
	 

};



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





module.exports=astart;