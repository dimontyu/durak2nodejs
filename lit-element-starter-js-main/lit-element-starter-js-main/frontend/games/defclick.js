import {suitsMapping2,A,passesMapping}from './static.js';

export async function Defclick(e){if( e.target .style.top ==='-256px')return
e.preventDefault

let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)


let task=this.task(j,k)
if (await task===true){//если карту покрыл

let broken_card=this.konduktor.broken_card();

   this.passes?passesMapping[this.passes](e.target):'';
   e.target .style.top = '-256px';
   e.target.classList.remove(`cards_number-${6}-hover`);
   e.target.style.transform = 'none';
 let wm3=this.konduktor.get_wm3(); 
let wm4=this.konduktor.get_wm4();
let pos_number=(this._pos2===Number(this._echo.players))||(this._pos3===Number(this._echo.players)); 
   e.target.style.left=(pos_number&&wm4.has(broken_card))?wm4.get(broken_card):wm3.get(broken_card);
   
   //console.log(`wm4.get(broken_card:${wm4.get(broken_card)}`)
   //console.log(this._pos2===Number(this._echo.players))
   
this.konduktor.deff()  
   
  this.cash[j].push(this.players[j][k]);
  
  this.players[j].splice(k,1,null)
 

   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"passes":this.passes,broken_card:broken_card,"roles":this._role};//отправка рендера всем
}
   
}
