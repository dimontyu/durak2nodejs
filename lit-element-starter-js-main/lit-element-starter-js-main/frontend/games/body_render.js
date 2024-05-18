import {repeat} from 'lit/directives/repeat.js';
import {images_render as Img} from './images_render.js';
import {positing as po}from './positing.js';
import {Prerender}from './prerender.js';
import {render_right as Right} from './render_right.js';
import {render_left as Left} from './render_left.js';


export function Render(html,styleMap){

Taks.bind(this);	
 let items = [
      {id: 0, name: 'J'},
      {id: 1, name: 'S'},
      {id: 2, name: 'K'},
      {id: 3, name: 'R'},
      {id: 4, name: 'L'},
      {id: 5, name: 'P'},
	  {id: 6, name: 'y'},
	  {id: 7, name: 'x'},
    ];

//console.log(this._role);




	let [p_0,p_1,p_2,p_3]=[this._pos0,this._pos1,this._pos2,this._pos3]; 
 
	let a=(this.passes===0);
	let eho=(this._echo?.type==="round-taks");
const styles=function(a,b,c){let s= {transform:`rotatez(${a}deg) translateY(${b}px) translateX(${c}px)`,
	backgroundColor:'#673AB7',width:'fit-content'};
	return s };	
const styl=function(a,b,c){let s= {transform:`rotatez(${a}deg) rotatex(${1}deg) translateY(${b}px) translateX(${c}px)`};
	return s };		
	
let span_1=html`<span class="mod mod1" style=${styleMap(styl(359,51,67))} >я хожу</span>`;
let span_2=html`<span class="mod mod1" style=${styleMap(styl(359,51,67))}>я кроюсь</span>`;
let span_u0=html`<span class="mod1" style=${styleMap(styles(0,51,67))}>${this.usernames[p_0]}</span>`;
let span_u1=html`<span class="mod1" style=${styleMap(styles(0,26,67))}>${this.usernames[p_1]}</span>`;
let span_u2=html`<span class="mod1" style=${styleMap(styles(0,52,73))}>${this.usernames[p_2]}</span>`;
let span_u3=html`<span class="mod1" style=${styleMap(styles(0,52,67))}>${this.usernames[p_3]}</span>`;
	 
function span_atr(x){let a=(x==="attacker")?span_1:(x==="defender")?span_2:null;return a};	 
	 
 let ix_text=(this._role[0]==="attacker")?"ваш ход":(this._role[0]==="attacker2")?"подкидывай карты":"вам крыться";
 let iy_text=(this._role[0]==="attacker")?"бито":(this._role[0]==="attacker2")?"бито":"беру";
 
let span_0=html`<span @click=${Taks} class="mod" style="bottom:32px;left: 104%;position: relative;">${!a?iy_text:ix_text}</span>`;

let[p_p,rb]=this._echo?.type&&!eho?Prerender.call(this,po):[null,null];//PRERENDER	
let n=this.players_count;	
let LEFT=(n>=3)?Img.call(this,this._pos2,'l',html):null;

let RIGHT=(n===4)?Img.call(this,this._pos3,'r',html):null;

let Header=Img.call(this,this._pos1,'0');

let Footer=a||eho?Img.call(this,this._pos0):this.foo;//сохранить чтобы не рендерить себя до конца раунда

a||eho?this.foo=Footer:null;

let section=this.renderDeck();
let b_ack=this.b_ack;//когда кончиться колода отобразить козыря

const body= html`<div class=super>
${n>=3?Left.call(this,LEFT,span_atr(this._role[2]),span_u2):null}
 ${n===4?Right.call(this,RIGHT,span_atr(this._role[3]),span_u3):null}
 
<div class="field">
<header  class="header">
<div class="player1_container">
<div id="1count" class="player1CardsContainer"><div  id=${this.deck_id[this._pos1]}>${Header}</div></div>
<h4 class="text-h4"style="top: -69px;
    position: relative;">
${span_atr.call(this,this._role[1])}
${span_u1}
<span class="player1-role textA">${this._role[1]}</span>
</h4>
<h4 class="text-h4">
<span class="player1-name textB">${this._pos1}</span>
</h4>
</div>
</header>
<section class="content">
<div class="deck_flex">
${section??b_ack}
</div>
<div class="table_grid"> ${repeat(
          items,
          (item) => item.id,
          (item, index) => html`
          <span id=${item.id} class='g_g'>${index}: <q>${item.name}</q></span>`
        )}</div>
<div class="deck_flex"></div>
</section>
<footer  class="footer">
<div class="player0_container">
<h4 class="text-h4">
${span_u0}
<span class="text-dark player0-name textB">${this._pos0}</span>
</h4>
<h4 class="text-h4">
<span class=" player0-role textA">${this._role[0]}</span>
</h4>${span_0}
<div id="0count" class="player0CardsContainer"><div  id=${this.deck_id[this._pos0]}>${Footer}</div></div>
</div>
</footer>
</div></div>`

return body;
};

function Taks(){let a_cards=this.konduktor.get_aktive().length===0;
let passes=this.passes!==0;
let bool=(this._myrole==='attacker' || this._myrole==='attacker2' )?a_cards&&passes:!a_cards&&passes;
console.log(bool);
if(bool){
if(this.players_count===2){

let a=(this._myrole==='attacker')?this.target:this._pos1;

this.w_m={type:"set","taks":`${a}`,"players":this.target,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"roles":this._role};}
else{
let a=(this._myrole==='attacker' || this._myrole==='attacker2' )?this.target:1;//this.sorted_pos();

this.w_m={type:"set","taks":`${a}`,"players":this.target,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this._myrole,"roles":this._role};}

}return 0;
 };