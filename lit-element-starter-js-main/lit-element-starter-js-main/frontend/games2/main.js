import {LitElement, html,css} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import {vebcss} from '../css/vebcss4.js';
import {render_deck} from './render_deck.js';
import {suitsMapping2,A,passesMapping}from './static.js';
import {Konduktor}from './konduktor.js';
import {Rout}from './rout.js';
import {Render}from './body_render.js';
export var state={};

export class DurakGame extends LitElement{
	    _pos0=null;//позиция юзера игры this.players[this._pos0]
		_pos1=null;//позиция соответсвует this.players[this._pos1] и.тд
		_pos2=null;
		_pos3=null;
		_myrole='';            //роль юзера
		_round=null;  //счетчик раундов
	    _role=[]; 
	
    static properties = {   //Реактивные свойства 
      
		_echo:{},//сообщения сервера
		
      };
      static styles =vebcss;
//static styles =vebcss4;	  
   constructor(){
        super()
        this.name=state.r.name;//id gemes
        this.ws=state.ws;//Websockets()
        this.players_count = state.r.players_count;
        this.deck = state.r.deck;
        this.active_suit = state.r.active_suit;
        this.attacker = state.r.attacker;
        this.defender = state.r.defender;
        this.players = state.r.players;
        this.suits =state.r.suits //['Ch', 'B', 'K', 'P']
        this.ranks =state.r.ranks //['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        this.passes =state.r.passes;
        this.target =state.r.target ;//позиция юзера this.players[this.target]
        this.id =state.r.id ;//ид юзера
        this.deck_id =state.r.deck_id;
		this.static_role=state.r.pl_roles;
		this.usernames=state.r.usernames;
        this.echo=this.echo.bind(this);
        this.Rout=this.Rout.bind(this);
        this.cash=[[],[],[],[]];//карты в игре
        this.ws.onmessage=this.echo; //обработчик сообщений сервера 
	    this._role=[];
        this._myrole='null';
		this._round=0;
		this._a=[];
	   this.connect();
	  
	          
}
konduktor=new Konduktor();
b_ack;
new_count=false;

connect(e) {
//вычисляем индех чтобы позиция юзера игры всегда находилась внизу	
	let index=this.index();
//вычисляемые позиции игроков	
let pos0=index.findIndex((i)=>i===0);this._pos0=pos0;//настраиваем Реактивные свойства 
let pos1=index.findIndex((i)=>i===1);this._pos1=pos1;
let pos2=index.findIndex((i)=>i===2);this._pos2=pos2;
let pos3=index.findIndex((i)=>i===3);this._pos3=pos3;
let a=[pos0,pos1,pos2,pos3]	
let n=this.players_count;
//вычисляемые роли игроков
//console.log(index)	
//console.log(a)
this._role[0]=(n>=2)?this.static_role[pos0]:null;
this._role[1]=(n>=2)?this.static_role[pos1]:null;
this._role[2]=(n>=3)?this.static_role[pos2]:null;
this._role[3]=(n>=4)?this.static_role[pos3]:null;
//this._myrole=this.role_play[Number(this.target)];
this._role=this._role.filter((w) => w!==null);
this._myrole=this._role[0];
if(this.players_count===2 && e){this._role.reverse()}
//console.log(this.usernames)
let data=JSON.stringify({"install":true,users:this.deck_id,user:this.id,usernames:this.usernames})
window.postMessage(data,origin );
this.b_ack=this.b_ackb();
/* this.b_ack(){return html`<img src=./img/${suitsMapping2[this?.deck[0][0]]}${this?.deck[0][1]}.png alt="Card back" class="card_img" style="opacity: 0.5;" />`} */
//console.log(this._role)
//console.log(this._role[0],this._role[1],this._role[2],this._role[3])	
	 }
b_ackb(){return html`<img src=./img/${suitsMapping2[this?.deck[0][0]]}${this?.deck[0][1]}.png alt="Card back" class="card_img" style="opacity: 0.5;" />`}

Rout(e){
 Rout.call(this,e);  
   
    }




//отправка рендера всем игрокам
set w_m(send){
    this.ws.send(JSON.stringify(send));
}
//обработчик сообщения сервера
async echo(e){ let message=JSON.parse(e.data) ;
(message.type==="set"&&!message.taks&&(message.id!==this.id))?this._echo=message:null;//все сообщения кроме взял карты
((message.type==="set")&&(Number(message.taks)===1))?this.Rout(message):null;//событие взял или покрыл
((message.type==="set")&&(Number(message.taks)===0))?this.Rout(message):null;
(message.type==="round-taks")?this.Rout(message):null;
((message.players_count))?[this.name=state.r.name,
        
        this.players_count = message.players_count,
        this.deck = message.deck,
        this.active_suit = message.active_suit,
        this.attacker = message.attacker,
        this.defender = message.defender,
        this.players = message.players,
        this.suits =message.suits,
        this.ranks =message.ranks,
        this.passes =message.passes,
        this.target =message.target,
        this.id =message.id ,
		this.static_role=message.pl_roles,
		this.connect(),this.requestUpdate()]:null;
}


//вычисляем индех чтобы позиция юзера игры всегда находилась внизу
index(){
	let s=[];let n=this.target;
for(let i=0;i<=this.players_count-1;i++){
	let index=Math.abs(i-n)
  index=s.includes(index)?this.players_count-1:index;
s.push(index);

}
return s;

}


renderDeck(){return render_deck.call(this,null)};//render deck deck


my_img;//сохранить чтобы не рендерить себя до конца раунда
set foo(foo){this.my_img=foo;};
get foo(){return this.my_img;}
    

// рендер for Render
 render(round){
	
	return Render.call(this,html,styleMap) ;
};




};

//customElements.define('doom-arhitekt',DurakGame );

//#python -m http.server   localhost:8000/index.html
//#python ws.py