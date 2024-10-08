import {html} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import {send,input_msg,target_user} from './send.js';





export function render_modalThree(){
	send.bind(this);
	input_msg.bind(this);
	target_user.bind(this);
	
	let ix=this._User_chat_active;
	const styles=function(value){let s= {color:(ix===value)?'#ffd600':'blue',
	backgroundColor:(ix===value)?'#673AB7':''};
	return s };
	
	
//сообщения игроков
let chat_content=this._ChatItems.map((value,index,a)=>
{return html`
    <li class='chat_content${index}'  ><h3>${value?.name}</h3>
    <span class='u' hidden>answer</span>
    <span class='u' data-id=${value?.id} >${value?.message}</span></li>
`});

//иконки игроков
let chat_icons=this._Users.map((value,i)=>
{return html`
    <div class='i_cons' data-user=${value} @click=${target_user} style=${styleMap(styles(value))} >
    <span data-user=${value} >${this._UserNames[i]}</span>
    </div>
`});

const modalThree =this.Chat? html`<div class="col-sm-3" style="display:inline;">
<i @click=${this.clickHandler_Chat} id="stop" style="display:flex;">+</i>
<div class="icons">${chat_icons}</div>	
<ul class="chat">${chat_content}</ul>
<div class="form"><div><label for="username">Send message</label>
<input @change=${input_msg}  type='text' class='form-control form hform' placeholder='me...sg'autofocus><div style="display:flex;">
<input @click=${send} class='form bform' type='button' value='SEND'>
<input @click=${undefined} class='form bform' type='button' data-id='${'e.target.id'}' data-npw=${this.target.index} value='CLEAR'></div></div></div>
</div>`:null;

//${this.send_msg}
 return modalThree
   }