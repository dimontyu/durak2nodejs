import {suitsMapping2,A,passesMapping}from './static.js';

export async function Defclick(e){

	if( e.target.style.top==="-256px"||e.target.style.top==="-375px")return
e.preventDefault

let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)


let task= await matrix_defender.call(this,j,k);
if ( task===true){//если карту покрыл



let anime=await Animation.call(this,e.target,j,k,d)
 
}
   
}

async function matrix_defender(j,k){
let my_card=this.players[j][k];


let a_cards=this.konduktor.get_aktive();
let zerro=false;
let result=a_cards.map((i,index,A)=>{
    let e1=(my_card[0]===i[0]);//проверяем соответствие карт
    let e2=this.ranks.indexOf(my_card[1]);
    let e3=this.ranks.indexOf(i[1]);
    let e4=(my_card[0]===this.active_suit);
    let e5=(i[0]!==this.active_suit);
    if(zerro===false){
    if((e1&&(e2>e3))||(e4&&e5)){
    A.splice(index,1)
    
	this.konduktor.set_back(i,my_card,this.passes-1)
 zerro=true;
    return 'back'}}})
//console.log(result);

if ((result.includes('back'))){return true;}//если все Ок промис труе отправляем сокет с данными
else {return false};
}




async function Animation(ev,j,k,d){

var client = window.innerWidth < "600";		
	let animation=  ev.animate(

  [
	{ transform: "scale(1.01)", },
	{ transform: "scale(1.05) ",top : !client?'-56px':'-75px', },
	{ transform: "scale(1.07) ",top : !client?'-156px':'-175px',},
	{ transform: "scale(1.08)",top : !client?'-200px':'-275px',},
	{ transform: "scale(1.09) ",top : !client?'-220px':'-305px', },
	{ transform: "scale(1.15) ",top : !client?'-256px':'-375px' },
   
  ],{ duration: 300, fill: "none", iterations: 1, }
);

animation.onfinish = (ee) => {
ev.style.top = !client?'-256px':'-375px';
ev.classList.remove(`cards_number-${6}-hover`);
ev.style.transform = 'scale(1.15)'; 
ev.style.margin='2px';
let broken_card=this.konduktor.broken_card();
let wm3=this.konduktor.get_wm3(); 
let wm4=this.konduktor.get_wm4();
let pos_number=(this._pos2===Number(this._echo.players))||(this._pos3===Number(this._echo.players)); 
ev.style.left=(pos_number&&wm4.has(broken_card))?wm4.get(broken_card):wm3.get(broken_card);
      
  this.cash[j].push(this.players[j][k]);
  
  this.players[j].splice(k,1,null);
 

   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"passes":this.passes,broken_card:broken_card,"roles":this._role};
   }		


}