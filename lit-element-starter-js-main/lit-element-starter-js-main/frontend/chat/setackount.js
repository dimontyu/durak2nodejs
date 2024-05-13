export function in_pwd(e){
  
 
   
  this.ackount.password=e.target.value;
  };
 
export function  in_user(e){
  
 
   
  this.ackount.name=e.target.value;
  };
  
  
 
 export function ch(){let t=this._listItems;   if(this.ackount.name){for(let item=0; item<=t.length-1;item++){if(t[item]===null){this.ackount.index='btn-pw'+(item+1);   t[item]= this.ackount; return this.Storage}  }
	 
 //this._listItems
 
 } };
 
export function account_install(e){
if(this.target.token===undefined){	 
let data={type:"init-user",user:this.target.name,password:this.target.password,index:this.target.index}	 
	 //this.ws.send(JSON.stringify(data));
postData("POST","http://localhost:8001/register",data).then(this.echo(data))
}};

export function clearone(e){
	 
	 console.log(this.target.token)
if(this.target.token && this.ws){	 
let data={type:"uninstall-user",user:this.target.name,token:this.target.token}	 
	 this.ws.send(JSON.stringify(data));	 
let cw=this.target.index;
localStorage.removeItem(cw);let k=this._listItems.findIndex(i=> i?.index===cw);console.log(k)
this._listItems[k]=null;        return this.clickHandler() 
 }
};