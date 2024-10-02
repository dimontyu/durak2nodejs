
 import {vebcss} from '../css/autch.css.js';
 import {LitElement,html,css} from 'lit';
import {render_modalOne,render_modalTwo} from './renders.js';
import {render_modalThree} from './chat_render.js';
//import{connekt} from './websocket_connect.js';
import{router_echo1} from './echo1_router.js'
export const ws_player={};
 
  
export class BordCount extends LitElement { 
 
 static properties = {
	 _UserNames:{type:Array},
	 _User:{type:String},
	 _Users:{type:Array},
	 _User_chat_active:{type:String},
	 Chat:{type:Boolean},
	 _ChatItems:{type:Array},
    _listItems:{type:Array},
    hideCompleted:{type:Boolean},
	akkountVar:{type:Boolean},
  };
  static styles =vebcss; 

  constructor() {
	  super()
	this.akkountVar=false;
this.hideCompleted=false;	
this._listItems=this.action;/*  Первый вызов  */
this._ChatItems=[1];
this.Chat=false;
window.addEventListener("message",(event)=>{console.log('LOGIN'),this.ws_plinstall.call(this,event)})

this.connect();/*  2 вызов  */
this.echo=this.echo.bind(this);
this.ws_plinstall=this.ws_plinstall.bind(this)
this.echo1=this.echo1.bind(this);
this._Users=[1,2,3];
this._User="User";
this._User_chat_active=""
this._UserNames=[];
this.autch_message='hello world';
  };
  
 _input_msg=""; 
 ackount={name:undefined,password:undefined,index:undefined,token:undefined};  
 ws;//порт/5
 ws1=ws_player?.ws;//порты игры

echo(e){
console.log(e.type)

if(e.type=="autorisation" && e.token){//let l_i=localStorage.getItem(e.index)
//let x=JSON.parse(l_i);x.token=e.token;let y=JSON.stringify(x);
let y=JSON.stringify(e)
console.log(e.index)
//console.log(x)
console.log(this)
localStorage.setItem(e.index,y);
this.autch_message=`you registered as ${e.name}`;

//this.requestUpdate();
 this.clickHandler()	
}
if(e.type=="susses" && !e.error){this.autch_message=`You are logged in as ${e.name}`;this.requestUpdate();}
if(e.type=="susses" && e.error){this.autch_message=` ${e.error}`;this.requestUpdate();}
if(e.type=="autorisation" && !e.token && e.error){this.autch_message=` ${e.error}`;this.requestUpdate();}

 }
/*  2 Вызов */
async connect(){	
	let user="Btn-pw1";let User=localStorage.getItem(`${user}`)
	let nouser='no-autch';let Nouser=localStorage.getItem(`${nouser}`)
if(User||Nouser){	
var xx=User?User:Nouser;
var data=xx?JSON.parse(xx):undefined;
var res=JSON.stringify({type:"connect-user","name":data?.name,token:data?.token,password:data?.password})
data?window.setTimeout(()=>{frames.autch.postMessage(res,'*')},500):null;
}if(!User&&!Nouser){let nackount=JSON.stringify({type:"connect-user",name:'GamerX',password:'000',token:"1S2ec3r4e5T"});localStorage.setItem('no-autch',nackount);window.setTimeout(()=>{frames.autch.postMessage(nackount,'*')},500)}
}


 

 echo1(e){
 router_echo1.call(this,e)
 }
  
pre(e){if( e.token){console.log(e);
let l_i=localStorage.getItem('Btn-pw1')
let l_j=localStorage.getItem('no-autch')
	
let x=JSON.parse(l_i??l_j);x.token=e.token;e?.password?x.password=e?.password:null;let y=JSON.stringify(x);

//console.log(x)

l_i?localStorage.setItem('Btn-pw1',y):localStorage.setItem('no-autch',y);}
};

async ws_plinstall(ev){console.log(ev.data)
this.ws1=ws_player?.ws??null;
this.ws1?this.ws1.addEventListener("message",this.echo1):null;

	
if(ev){let e=!(ev.data.result)?JSON.parse(ev.data):this.pre(ev.data);
if(e?.install===true ){

let u_s=e.users.map((i)=>{if(i!==e.id) return i})
	
this._UserNames=e.usernames;	
this._Users=u_s;
this._User=e.user;		
}};
 }  
  
/*  Первый вызов  */
get action(){
let arr=[];
var yy=localStorage.getItem('no-autch');
var xx=localStorage.getItem('Btn-pw1');

 for(let i=1;i<=3;i++){
	
	var xx=localStorage.getItem('Btn-pw'+i);
	var x1=localStorage.getItem('Btn-pw'+(i+1));
if((i && !xx)&&x1){if(JSON.parse(x1).token){x1?xx=x1:xx=yy;localStorage.setItem('Btn-pw'+i,x1);localStorage.removeItem('Btn-pw'+(i+1))}};
//if((i===1 && !xx)&&!x1){xx=yy;}	

	
var x=xx?arr.push(JSON.parse(xx)):arr.push(null);

}return arr;};

get target(){return this.ackount};

get Storage(){let t=this._listItems;for(let item=0; item<=t.length-1;item++){if(t[item]!==null){let x=JSON.stringify(t[item]);  localStorage.setItem('Btn-pw'+(item+1),x);this.clickHandler()}else    return 0}};

 
set target(val){var xx=localStorage.getItem(val);
	
var x=JSON.parse(xx)??null;this.ackount.token=x?.token;    this.ackount.index=val;  this.ackount.name=x?.name;this.ackount.password=x?.password;if(this.ackount.name){return}else this.hideCompleted=true;this.akkountVar=false };

  
  sset(e){  this.akkountVar=true,this.target=e.target.dataset.npw};
  
  ackount_set(){this.hideCompleted=true;};
 //закрытие окон 
clickHandler(){this.akkountVar=false;
this.hideCompleted=false; this.ackount={name:'',password:'',index:''};     return null};
//закрытие чата
clickHandler_Chat(){(this.Chat===false)?this.Chat=true:this.Chat=false;};
 

  
  //главный рендер компонента
   render(){ 
const modalThree=render_modalThree.call(this);//блок чата
const modalTwo=render_modalTwo.call(this);//блок аккаунтов
const modalOne=render_modalOne.call(this);//блок создания аккаунтов

let xor=(this.hideCompleted||this.akkountVar||this.Chat);

    const items = this._listItems;
	const t=this;

let array_id=['bx','cx','dx'];
const todos =!xor?html`${
items.map(function(item,index){ return item? html`
            <div class='mod'
                id=${array_id[index]} data-npw=${'Btn-pw'+(index+1)} @click=${t.sset}
               >${item?.name}
</div>`:null}
)}`:null

let account_set=!xor?html`<div class='mod' id="ax" @click=${t.ackount_set}>another account</div>`:null
let chat=!xor?html`<div class='mod' id="uux" @click=${this.clickHandler_Chat}>The Chat${this._ChatItems.length}</div>`:null
 
 return html`${modalThree}${modalTwo}${modalOne}${account_set}${todos}${chat}${this._ChatItems[-1]?.pos}`;
 
   }
 
 
 
 }
 
 
/*  let o={
    "name": "  q",
    "password": "",
	"token":""
    "index": "btn-pw2"
} */
 
 async function disconnect(ws) {
 this.ws!==undefined?this.ws.close():null;
 }
 
 

async function postData(xx,url = '', data = {}) {

    // Default options are marked with *
    const response = await fetch(url, {
        method: xx, // *GET, POST, PUT, DELETE, etc.
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {Origin:'*',
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify(data),
      
    })
	return response.json();
	 //let json=await response.json(); console.log('успех',json.h1); УБРАТЬ ОБЕ КОММЕНТИРОВАНИЕ ПОСЛЕ ТЕСТА!!!
    
       
   
} 
 
 
 
 
 customElements.define('pink-floyd',BordCount );
 
 
 
 
