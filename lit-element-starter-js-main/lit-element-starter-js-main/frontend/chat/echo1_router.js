


export function router_echo1(e){
	let m={type:"chat",name:"username",id:"8khh55855eee",message:`aaa,Облачные VDS
Легкое, масштабируемое решение. От размещения сайта до  IT-инфраструктуры крупной компании.
от 198 ₽мес,Выбрать тарифКонфигурация: CPU 2 Core, 1 GB RAM, 10 GB NVMe, IPv6, без опции резервного копирования, при оплате за годcloud aaaat ,ttff, fb, bb`};
let data=JSON.parse(e.data);	
let type=data.type;
//console.log(type);	
if(type==="chat"){	
	
this._ChatItems.push(data);this.requestUpdate();
//scroll to message
window.setTimeout(()=>{
let ui=this.shadowRoot?.querySelector(".chat"),
//добавил скролл
ui_li=ui?ui?.querySelectorAll("li"):null,
ul_ln=ui?ui_li.length-1:false;
//console.log(ui[ul_l]);	
ul_ln?ui_li[ul_ln].scrollIntoView({ block: "center", behavior: "smooth" }):null},10);

}//else
//this._ChatItems.push(m);this.requestUpdate();



}