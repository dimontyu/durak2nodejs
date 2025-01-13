import {html} from 'lit';
import {suitsMapping2}from './static.js';
import {Defclick}from './defclick.js';
import {Imgclick}from './imgclick.js';
import {Img_render} from './img_render.js';
import {animate} from '@lit-labs/motion';
export function images_render(i,p){
Defclick.bind(this);
Imgclick.bind(this);	
let e=this._echo;


if((e?.type==="set")&&(e?.id!==this.id)&&(i !==this.target)){

	
	return Img_render.call(this,e,i,p)}
else{
	
	
let nn=(this._myrole==="attacker"||this._myrole==="attacker2");

let n=this.target; 
let pl=this.players.filter((x)=>x!==null);   
let t=pl[n] ;

let target=(pl[i]===t) 
pl[i]=pl[i].filter((x)=>x!==null)
let img=target?pl[n].map((x,i)=>{
let [symbol, rank] = [x[0],x[1]];
let suit = suitsMapping2[symbol];
let im=`${suit}${rank}`; 
return html`<span @click=${nn?Imgclick:Defclick} class="${im} card_img cards_number-6 cards_number-6-hover r"  data-play="${n}" data-pos="${i}"></span>`})
  :pl[i].map((x,i)=>{return html`<span class="card_img cards_number-6 card-back"></span>`})


return img;}}