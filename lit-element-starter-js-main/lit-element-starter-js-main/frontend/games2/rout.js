//import {rout4}from './rout4.js';

//надо сделать на 4 игроков?

export function Rout(e){
    if(e.type==="round-count"){return this.newround(k)}//не настроено
    if(e.type==="round-end"){return this.newround(k)}//не настроено
    if(e.type==="round-taks"){

this.konduktor.clearAll();
        this.deck =e.deck ;
        this.players = e.players;
		e.active_suit?this.active_suit=e.active_suit:null;
		e.active_suit&&(this.b_ack=this.b_ackb());
        //this.static_role =e.roles 
        this.back =e.deck_back;
		this.cash=e.cach;
        this.passes=0;
		this._a=[];
		let aa=this.players.map((i)=>{if (i.length===0){return false}})
let new_count=aa.includes(false);if(new_count){this.new_count=true};

 
  this.shadowRoot.querySelectorAll('.cards_number-6').forEach((i)=>{i.style.top='0px';i.removeAttribute("style");i.classList.add(`cards_number-${6}-hover`);});
  
  
  let rec=this._myrole;
  
function transform(rec){
	let pos=[this._pos0,this._pos1,this._pos2,this._pos3] ;this._role.forEach((i,index,A)=>{
 let indx=this.players[pos[index]].length===0;
if(i==='defender'&&indx){
	rec===i?this._myrole='observe':'';
	this._role[index]='observe'
/* rec===i?this.foo=null:'';		
A[index+1]?A[index+1]=i:A[0]=i;
A.splice(index,1);
this.players.splice(pos[index],1);
this.static_role.splice(pos[index],1);

this.players_count=this.players_count-1
this._round +=1 ;this._echo=e;
return 0; */
}
if((i==='attacker'&&indx)||(i==='attacker2'&&indx)){//A[index+1]?A[index+1]=i:A[0]=i;

rec===i?this._myrole='observe':'';
this._role[index]='observe'
/* rec===i?this.foo=null:'';	
A.splice(index,1);
this.players.splice(pos[index],1);
this.static_role.splice(pos[index],1);
this.players_count=this.players_count-1 */}
})        
}
this.players_count!==2?transform.call(this,rec):null;
    
if(this.players_count===2){	  
if(e.bito===true && this.players_count===2){this._role.reverse();
if(this._myrole==="defender"){this._myrole="attacker"}
//if(this._myrole==='observe'){}
else{this._myrole="defender"}

}
this.static_role[this._pos0]=this._role[0]??null;
this.static_role[this._pos1]=this._role[1]??null;
this._round +=1 ;this._echo=e;this.w_m={"res":this.static_role}
	 }
if(this.players_count===3){	
	
let m_role=this._myrole==='observe';
let m_d=this._myrole==="defender";
let m_a=this._myrole==="attacker";
let m_a2=this._myrole==="attacker2";	
if(e.bito===true ){this._role.forEach((i,index,A)=>{	
if(m_d&&i==="defender" ){this._myrole="attacker";A[index]="attacker"}
if(m_d&&i==="attacker" ){A[index]="attacker2"}
if(m_d&&i==="attacker2" ){A[index]="defender"}
if(m_d&&i==="observe" ){A[index]="observe"}


if(m_a&&i==="attacker" ){this._myrole="attacker2";A[index]="attacker2"}
if(m_a&&i==="defender" ){A[index]="attacker"}
if(m_a&&i==="attacker2" ){A[index]="defender"}
if(m_a&&i==="observe" ){A[index]="observe"}

if(m_a2&&i==="attacker2" ){this._myrole="defender";A[index]="defender"}
if(m_a2&&i==="defender" ){A[index]="attacker"}
if(m_a2&&i==="attacker" ){A[index]="attacker2"}
if(m_a2&&i==="observe" ){A[index]="observe"}

if(m_role&&i==="observe" ){this._myrole="observe";A[index]="observe"}
if(m_role&&(i==="attacker2"||i==="attacker") ){A[index]="defender"}
if(m_role&&i==="defender" ){A[index]="attacker"}
if(m_role&&i==="attacker" ){A[index]="attacker2"}

})

}if(e.bito===false ){this._role.forEach((i,index,A)=>{if(m_d&&i==="defender" )
{A[index]="defender"}
if(m_d&&i==="attacker" ){A[index]="attacker2"}
if(m_d&&i==="attacker2" ){A[index]="attacker"}
if(m_d&&i==="observe" ){A[index]="observe"}

if(m_a&&i==="attacker" ){A[index]="attacker2";this._myrole="attacker2";}
if(m_a&&i==="attacker2" ){A[index]="attacker"}
if(m_a&&i==="attacker2" ){A[index]="attacker"}
if(m_a&&i==="observe" ){A[index]="observe"}

if(m_a2&&i==="attacker2" ){A[index]="attacker";this._myrole="attacker";}
if(m_a2&&i==="attacker" ){A[index]="attacker2"}
if(m_a2&&i==="attacker2" ){A[index]="attacker"}
if(m_a2&&i==="observe" ){A[index]="observe"}

if(m_role&&i==="observe" ){this._myrole="observe";A[index]="observe"}
if(m_role&&(i==="attacker2"||i==="attacker") ){A[index]="attacker"}
if(m_role&&i==="defender" ){A[index]="defender"}
if(m_role&&i==="attacker" ){A[index]="attacker2"}


})

//console.log(this._myrole)
}
this.static_role[this._pos0]=this._role[0]??null;
this.static_role[this._pos1]=this._role[1]??null;
this.static_role[this._pos2]=this._role[2]??null;
//this._role[3]=this.static_role[this._pos3]??null;
this._round +=1 ;
this._echo=e;
//console.log(this._role);
this.w_m={"res":this.static_role}	  
}if(this.players_count===4){
//["attacker2", "attacker2", "attacker", "defender"]
//['defender', 'attacker2', 'attacker2', 'attacker']
//['attacker', 'defender', 'attacker2', 'attacker2']
//['attacker2', 'attacker', 'defender', 'attacker2']
//['attacker2', 'attacker2', 'attacker', 'defender']
if(e.bito===true ){
let m_role=this._myrole;
let m_d=this._myrole==="defender";
let m_a=this._myrole==="attacker";	
//console.log(`this.static_role 0`+this.static_role);	

let att_role=this.static_role.indexOf("attacker");
let at2_role=this.static_role.indexOf("attacker2");
let def_role=this.static_role.indexOf("defender");

if(this.static_role[def_role-1]&&def_role!==3){if(this.static_role[def_role-1]!=="attacker"){
this.static_role[def_role-1]="attacker";this.static_role[def_role+1]="attacker2";this.static_role[att_role]="attacker2";}}

if((def_role===0 && att_role!==3)){
this.static_role[att_role]="attacker2";this.static_role[3]="attacker";this.static_role[2]="attacker2";this.static_role[1]="attacker2";}

if((def_role===3 && att_role!==2)){
this.static_role=['attacker2', 'attacker2', 'attacker', 'defender']}


let a=this.static_role.pop();	
this.static_role.unshift(a);

this._role[0]=this.static_role[this._pos0]??null;
this._role[1]=this.static_role[this._pos1]??null;
this._role[2]=this.static_role[this._pos2]??null;
this._role[3]=this.static_role[this._pos3]??null;
this._myrole=this._role[0];
}
if(e.bito===false ){

let i_role=this.static_role.indexOf("defender");
let copy=this.static_role.concat();
	

	
let a=this.static_role.pop();	
this.static_role.unshift(a);

/* console.log(`this._role :${this._pos0}`+this._role);
console.log(`copy`+copy);
console.log(`this.static_role`+this.static_role); */
this.static_role=this.static_role.map((i,index,A)=>
{if(index===i_role)
{return "defender"}
if(i==="defender" && (index-1)>0){return copy[index-2]??copy[i_role-1]}
if(i==="defender" && (index)===0){return copy[copy.length-2]}
if(i==="defender" && (index-1)===0){return copy[copy.length-1]}
if(i==="defender" && (index+1)>3 ){return copy[0]}
else return i})


this._role[0]=this.static_role[this._pos0]??null;
this._role[1]=this.static_role[this._pos1]??null;
this._role[2]=this.static_role[this._pos2]??null;
this._role[3]=this.static_role[this._pos3]??null;

this._myrole=this._role[0];}


this._round +=1 ;
this._echo=e;

//console.log(this._role);
//console.log(`this._role :${this._pos0}`+this._role);
console.log(this.static_role);



	}	  

	  }
    
    }