import {positing as po}from './positing.js';
//import {suitsMapping2,A,passesMapping}from './static.js';
export async function Imgclick(e){

let pss=this.passes;	
let xx=(this._myrole==='attacker2' && !this.new_count)	
if( e.target .style.top ==='-256px')return
if(xx&& pss===0 )return
e.preventDefault
//Av.push(e.target);


let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)
//console.log(e)

let task=this.task(j,k)
if (await task===true){
	this.passes+=1;
   //this.passes?passesMapping[this.passes](e.target):'';
   e.target .style.left= po[this.passes-1].left;
   e.target .style.top = po[this.passes-1].top;
   e.target.classList.remove(`cards_number-${6}-hover`);
   e.target.style.transform = 'none';
   e.target.style.zIndex = -1;
   //let ypy= e.target.getBoundingClientRect();
   //console.log(ypy)
   let u=this.players[j][k];
//let lft=e.target.style.left;
let lft=po[this.passes-1].left;

this.konduktor.attach(u,lft);
this._a.push(u);  

this.cash[j].push(this.players[j][k]);
//console.log(this.cash[j])
 
this.players[j].splice(k,1,null)
 
 

   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"passes":this.passes,"roles":this._role};//отправка рендера всем
}

}