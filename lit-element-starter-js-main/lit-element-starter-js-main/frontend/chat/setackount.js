const iframe = document.querySelector("iframe");
const hosts=iframe.getAttribute('origin');
console.log(hosts)
export function in_pwd(e){
  
 
   
  this.ackount.password=e.target.value;
  };
 
export function  in_user(e){
  
 
   
  this.ackount.name=e.target.value;
  };
  
  
 
 export function ch(){let t=this._listItems; console.log(t);  if(this.ackount.name){for(let item=0; item<=t.length-1;item++){if(t[item]===null){this.ackount.index='Btn-pw'+(item+1);   t[item]= this.ackount; return this.Storage}  }
	 
 //this._listItems
 
 } };
 
export function account_install(e){
if(this.target.token===undefined){	 
let data={type:"init-user",user:this.target.name,password:this.target.password,index:this.target.index}	 
	 //this.ws.send(JSON.stringify(data));
postData("POST",`${hosts}/register`,data).then(this.echo(data))
}};

export function clearone(e){
	 
	 console.log(this.target.token)
if(this.target.token||this.target.name){	 
let data={type:"uninstall-user",name:this.target.name,token:this.target.token,password:this.target.password}	 
	 //this.ws.send(JSON.stringify(data));
postData("DELETE",`${hosts}/logout`,data)	 
let cw=this.target.index;
localStorage.removeItem(cw);let k=this._listItems.findIndex(i=> i?.index===cw);console.log(k)
this._listItems[k]=null;        return this.clickHandler() 
 }
};



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