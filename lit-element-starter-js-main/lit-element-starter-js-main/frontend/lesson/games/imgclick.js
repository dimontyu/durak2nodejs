import {positing as po}from './positing.js';
//import {suitsMapping2,A,passesMapping}from './static.js';
export async function Imgclick(e){
var client = window.innerWidth < "600";
let pss=this.passes;	
let xx=(this._myrole==='attacker2' && !this.new_count)	
if(e.target.style.top==="-256px"||e.target.style.top==="-375px" )return
if(xx&& pss===0 )return
e.preventDefault
//Av.push(e.target);


let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)
//console.log(e)

let task= await matrix_attacker.call(this,j,k);
if (task===true){
	this.passes+=1;
   //this.passes?passesMapping[this.passes](e.target):'';
   e.target .style.left= po[this.passes-1].left;
   e.target .style.top =!client? po[this.passes-1].top:"-375px";
   e.target.classList.remove(`cards_number-${6}-hover`);
   e.target.style.transform = 'scale(1.1)';
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

async function matrix_attacker(j,k){
let a_cards=this.konduktor.get_aktive();
let b_cards=this.konduktor.get_back().map((i)=>{return[i.one,i.two]}).flat();
let a_b=a_cards.concat(b_cards);
//console.log(a_b)	
let my_card=this.players[j][k];	
let result=a_b.map((i,index)=>{let e1=(my_card[1]===i[1]);if(e1){return true}})
let p_i=this.passes===0;	
let r_a=result.includes(true);

if (r_a||p_i){return true;}//если все Ок промис труе отправляем сокет с данными
else if(!r_a){return false};	}