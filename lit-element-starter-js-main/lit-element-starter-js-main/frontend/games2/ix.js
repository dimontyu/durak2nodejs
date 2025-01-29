import {repeat} from 'lit/directives/repeat.js';
import {images_render as Img} from './images_render.js';
//import {positing as po}from './positing.js';
import {Prerender}from './prerender.js';
import {render_right as Right} from './render_right.js';
import {render_left as Left} from './render_left.js';


export function Renderix(html,styleMap){

Taks.bind(this);	
 let items = [
      {id: 0, name: 'G'},
      {id: 1, name: 'A'},
      {id: 2, name: 'M'},
      {id: 3, name: 'E'},
      {id: 4, name: 'O'},
      {id: 5, name: 'V'},
	  {id: 6, name: 'E'},
	  {id: 7, name: 'R'},
    ];

//console.log(this._role);
let [p_0,p_1,p_2,p_3]=[this._pos0,this._pos1,this._pos2,this._pos3];
if(this._role[0]==="attacker"){this.check[p_0] +=1;}
if(this._role[0]==="defender"){this.check[p_1] +=1;}


//this.target=this.static_role.indexOf(this._myrole)
	 
    let q=this._myrole!=='observe'; 
	
	
	let eho=(this._echo?.type==="round-taks");
	let[p_p,rb]=this._echo?.type&&!eho?Prerender.call(this,null):[null,null];//PRERENDER
    let a=(this.passes===0);	
const styles=function(a,b,c){let s= {transform:`rotatez(${a}deg) translateY(${b}px) translateX(${c}px)`,
	backgroundColor:'#673AB7',width:'fit-content',top: '16px',
  left: '32px',};
	return s };	
const styl=function(a,b,c){let s= {transform:`rotatez(${a}deg) rotatex(${1}deg) translateY(${b}px) translateX(${c}px)`};
	return s };		
	
let span_1=html`<span class="modn mod1" style=${styleMap(styl(359,51,67))} >ЕЩЕ СЫГРАЕМ?</span>`;
let span_2=html`<span class="modn mod1" style=${styleMap(styl(359,51,67))}>ЕЩЕ СЫГРАЕМ?</span>`;
let span_u0=html`<span class="mod1" style=${styleMap(styles(0,51,67))}>${this.usernames[p_0]}</span>`;
let span_u1=html`<span class="mod1" style=${styleMap(styles(0,26,67))}>${this.usernames[p_1]}</span>`;
let span_u2=html`<span class="mod1" style=${styleMap(styles(0,52,73))}>${this.usernames[p_2]}</span>`;
let span_u3=html`<span class="mod1" style=${styleMap(styles(0,52,67))}>${this.usernames[p_3]}</span>`;
	 
function span_atr(x){let a=(x==="attacker")?span_1:(x==="defender")?span_2:null;return a};	 
	 
 let ix_text=(this._role[0]==="attacker")?"ЕЩЕ СЫГРАЕМ?":(this._role[0]==="attacker2")?"подкидывай карты!":"вам крыться!";
 let iy_text=(this._role[0]==="attacker")?"бито":(this._role[0]==="attacker2")?"PLAY":"PLAY";
 let i_am_go=(x)=>{return this.players[x]?.length===0?'я вышел':'0'};
 
let span_0=html`<span @click=${Taks} class="mod" style="bottom:32px;left: 104%;position: relative;">ИГРАТЬ</span>`;

//let[p_p,rb]=this._echo?.type&&!eho?Prerender.call(this,null):[null,null];//PRERENDER	
let n=this.players_count;	
let LEFT=(n>=3)?Img.call(this,this._pos2,'l'):null;
this._body.left=LEFT;
let RIGHT=(n===4)?Img.call(this,this._pos3,'r'):null;
this._body.right=RIGHT;
let Header=Img.call(this,this._pos1,'0');
this._body.header=Header;

let Footer=(a||eho)&&q?Img.call(this,this._pos0):this._body.footer;//сохранить чтобы не рендерить себя до конца раунда
this._body.footer=Footer;
//a||eho?this.foo=Footer:null;

let section=this.renderDeck();
let b_ack=this.b_ack;//когда кончиться колода отобразить козыря

const body= html`<div class=super>
${n>=3?Left.call(this,this._body.left,span_atr(this._role[2]),span_u2,i_am_go(p_2)):null}
 ${n===4?Right.call(this,this._body.right,span_atr(this._role[3]),span_u3,i_am_go(p_3)):null}
<div class="field">
<header  class="header">
 <div class="player1_container">
    <div id="1count" class="player1CardsContainer">
         <div  id=${this.deck_id[this._pos1]} style='z-index:${this._role[1]==='defender'?2:-1}'>${this._body.header}</div>
	</div>
    <h4 class="text-h4"style="top: -69px;position: relative;">${span_atr.call(this,this._role[1])}${span_u1}
        <span class="player1-role textA">${this._role[1]}</span>
    </h4>
    <h4 class="text-h4">
        <span class="player1-name textB">${this.check[p_1]}</span>
    </h4>
 </div>
</header>
<section class="content">
   <div class="deck_flex">${section??b_ack}</div>
    <div class="table_grid"> ${repeat(
          items,
          (item) => item.id,
          (item, index) => html`
          <span id=${item.id} class='g_n'><p class='q'>${item.name}</p></span>`)}
		  ${(this._role[0]==="attacker")?'ВЫ ВЫИГРАЛИ!!!':"ВЫ ПРОИГРАЛИ ☹"}</div>
    
</section>
<footer  class="footer">
 <div class="player0_container">
    <h4 class="text-h4">
       ${span_u0}
       <span class="text-dark player0-name textB">${this.check[p_0]}</span>
    </h4>
    <h4 class="text-h4">
       <span class=" player0-role textA">${this._role[0]===this._myrole?this._role[0]:this._myrole}</span>
    </h4>${span_0}
    <div id="0count" class="player0CardsContainer">
       <div  id=${this.deck_id[this._pos0]} style='z-index:${this._role[0]==='defender'?2:-1}'>${this._body.footer}</div>
    </div>
 </div>
</footer>
</div>
</div>`

return body;
};

function Taks(){if(this._role[0]==="attacker"){this._echo.ix=false;this.requestUpdate()}
if(this._role[0]==="defender"){this.w_m={type:"start"};}

 };