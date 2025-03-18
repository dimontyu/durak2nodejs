export function send(){let msg={type:"chat",name:this._listItems[0]?.name,id:this._User_chat_active,message:this._input_msg};
 //console.log(this._User_chat_active);
 //console.log(this.ws)
 if(this.ws){
 this.ws.send(JSON.stringify(msg));}
 this._input_msg='';
this.shadowRoot.querySelector('.form-control').value='';

 }
 
export function input_msg(e){this._input_msg =e.target.value;/* console.log(this._input_msg) */};

export function target_user(event){this._User_chat_active=event.target.dataset.user;/* console.log(this._User_chat_active) */;}