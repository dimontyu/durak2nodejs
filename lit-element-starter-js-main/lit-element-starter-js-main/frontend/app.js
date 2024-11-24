 "use strict";
import {BordCount} from"./chat/autch.js"
import {DurakGame,state} from './games/main.js';
import {ws_player} from './chat/autch.js';
import {MotionLit} from './logo/motion-l.js';
var ws;

var id_prosses;
//console.log(id_prosses);

const rendersock =async (response) => {
    let r=response;
state.r=r;state.ws=ws;
ws_player.ws=ws;
customElements.define('doom-arhitekt',DurakGame);



};
self.onerror=(e)=>console.log(e)

var slow=["двоем","троем","четвером"]
var uau=()=>{return ws?.readyState===WebSocket.CLOSED};
const logotyp=document.createElement('motion-lit');self.document.body.appendChild(logotyp);
/* document.querySelector("#stop_game") */
stop_game.addEventListener('click',async function(e){
  if(window.confirm("Вы действительно хотите выйти?"))
  {ws!==undefined?[ws.close(),Buttons().forEach((i,index)=>{i.style.display='block',i.removeAttribute('disabled'),i.classList.remove('itarget'),i.textContent=`Игра в ${slow[index]}`})]:null;}return 0});
//игра начнеться когда все игроки ткнут соотв-ю кнопку
Buttons().forEach((start_game,i)=>{start_game.addEventListener('click',async function(e){ws===undefined||uau()?await connect(i+2,e):null;})})//каждая игра идет на своем path


const nav=document.querySelector(".nav");	
var Button_index;

async function connect(path,e) {
  e.target.style.backgroundColor='green';
  e.target.textContent='player wait';
  e.target.classList.add('itarget')

//ws = new WebSocket(`ws://localhost:8765/${path}`);
let zn=window.location.hostname==='localhost'?'ws://localhost:8001':'wss://cheroom.ru'
ws = new WebSocket(`${zn}/${path}`);

 ws.onopen=async function open(e) {

    // subscribe to some channels
    ws.send(JSON.stringify({
        "type": "hi",
    }));
	sent()
  };


  ws.onmessage= async function message (e) {
   
 let response = JSON.parse(e.data);

    if((response.id&&!id_prosses)){id_prosses=response.id;
    
    }
    
    if((response?.deck_id)&&id_prosses){
   
    await rendersock(response);}
    if(response.connect){let n=Number(response.connect);console.log(n);let buttons=Buttons();
    buttons.forEach((i,index)=>{if(index===(n-2)){i.textContent=`PLAYERS${n}`;i.style.color='#3bff67';Button_index=index}i.setAttribute('disabled',true);})
	
setInterval(()=>{
buttons[0]?[buttons[Button_index]!==buttons[buttons.length-1]?buttons[buttons.length-1].style.display='none':null,buttons.pop()]:clearInterval(this);
     
    }, 2000)
    }
     if(response.usernames){nav.setAttribute("hidden",true);nav.style.display='none';logotyp.remove();}
  };

  ws.onclose= async function close(e) {
    id_prosses=null;
    console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);

  /*   setTimeout(function() {

      connect();
    }, 1000); */
  };

 ws.onerror= async function error(err) {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
};


 function sent(){ws.send(JSON.stringify({
  type: "start",n:`${path}`
}))}

}
function handleEvent(){

let set1 = 0;
let scale1 = 1;	

/* -- document.querySelector("#start_game3")*/			
Buttons().forEach((i)=>{
i.addEventListener("click", (event) => {
set1=50-set1;
scale1=3.5-scale1;	
const animation = event.target.animate(
  [
    //{ color: "#431236", offset: 0.233 },{ color: "red", offset: 0.444 },
	{ transform: "scale(1.5) translate(10%,10%)",color: "#431236",offset: 0.133 },
	{ transform: "scale(1.5) translate(20%,10%)",color: "red",offset: 0.333 },
	{ transform: "scale(1.5) translate(30%,10%)",offset: 0.533 },
    { transform: `scale(${scale1}) translate(${set1}%)`,},
  ],{ duration: 3000, fill: "forwards",iterations: 1, }
);
animation.id=`buttons`;  
  
animation.onfinish = (event_animate) => {nav.style.display!=="none"&&animation.commitStyles()}		
})
})

};
handleEvent();
function Buttons(){return Array(start_game2,start_game3,start_game4)}



