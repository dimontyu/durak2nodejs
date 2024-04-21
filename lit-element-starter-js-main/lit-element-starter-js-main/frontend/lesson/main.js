import {html, render} from '../lit-html/lit-html.js';
//import {html, render} from 'https://esm.run/lit-html@1';

const suitsMapping2 = {
    'Ch': "hearts",
    'B': "diamonds",
    'K': "clubs",
    'P': "spades",
};

const passesMapping = {
    1: (image) => {
        image.style.left = '-9px';
    },
    2: (image) => {
        image.style.left = '56px';
    },
    3: (image) => {
        image.style.left = '121px';
    },
    4: (image) => {
        image.style.left = '186px';
    },
    5: (image) => {
        image.style.left = '251px';
    },
};
const A=["left:-9px","left:56px","left:121px","left:186px","left:251px"];



export class DurakGame{
    constructor(r,ws){
        let self=this;
        self.name=r.name;
        self.ws=ws;//Websockets()
        self.players_count = r.players_count;
        self.deck = r.deck;
        self.active_suit = r.active_suit;
        self.attacker = r.attacker;
        self.defender = r.defender;
        self.players = r.players;
        self.suits =r.suits //['Ch', 'B', 'K', 'P']
        self.ranks =r.ranks //['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        self.passes =r.passes;
        self.target =r.target ;
        self.id =r.id ;
        self.deck_id =r.deck_id;
        self.role=this.role_play;
        this.imgclick=this.imgclick.bind(this);
        this.echo=this.echo.bind(this);
        this.taks=this.taks.bind(this);
        this.rout=this.rout.bind(this);
        this.defclick=this.defclick.bind(this);
        this.cash=[ Array(6),Array(6), Array(6), Array(6)];//карты в игре
        this.cash_back={back:[],aktive:[]};
        this.back=[];//отыгравшие карты
       self.ws.onmessage=this.echo;//слушаем сообщения сервера
}

get role_play(){
    let n=this.target;
    let na=this.attacker;
    let np=this.players;
    let nd=this.defender;
    let a=((na[0][0]===np[n][0][0])&&(na[0][1]===np[n][0][1]))
    let b=((nd[0][0]===np[n][0][0])&&(nd[0][1]===np[n][0][1]))
//a?console.log('ATTACHER'):null;
//b?console.log('DEFENDER'):null;
!b&&!a?console.log('2_ATTACHER_2'):null;
if(a){return "attacker"}
if(b){return "defender"}
else{return "attacker2"} 
}

async task(j,k){
if(this.role==="attacker"){return await this.matrix_attacker(j,k)}
if(this.role==="attacker2"){return await this.matrix_attacker2(j,k)}
if(this.role==="defender"){return await this.matrix_defender(j,k)}

}

rout(e){
    if(this.role==="attacker"){let k=e.players;   return this.newround(k)}
    if(this.role==="attacker2"){let k=e.players;return this.newround(k)}
    if(this.role==="defender"){let k=e.players;
for(let val of this.cash_back.back){this.players[this.target].push(val)}
 for(let val of this.cash_back.aktive){this.players[this.target].push(val)}
 this.cash_back.back=[] ;
 this.cash_back.aktive=[];
 this.cash=[ Array(6),Array(6), Array(6), Array(6)];           
        
        
        
        
        return this.renders(1)}
    
    }
newround(k){console.log(`return this.newround(k)`);
    for(let val of this.cash_back.back){this.players[k].push(val)}
for(let val of this.cash_back.aktive){this.players[k].push(val)}
this.cash_back.back=[] ;
this.cash_back.aktive=[];
this.cash=[ Array(6),Array(6), Array(6), Array(6)]
return this.renders(1)

}    

async matrix_attacker(j,k){return true}
async matrix_attacker2(j,k){return true}
async matrix_defender(j,k){
let my_card=this.players[this.target][k];
console.log("3:"+this.cash_back.aktive)
let a_cards=this.cash_back.aktive;

let result=[];
a_cards.forEach((i,index)=>{
   
    let e1=(my_card[0]===i[0]);
    let e2=this.ranks.indexOf(my_card[1]);
    let e3=this.ranks.indexOf(i[1]);
    let e4=(my_card[0]===this.active_suit);
    let e5=(i[0]!==this.active_suit);
   let e6=(e4&&e5);
    
    if(!e4&&(e1&&(e2>e3))){
    let v=a_cards.indexOf(i); console.log(`v:${v}`)
    a_cards.splice(v,1);
    //delete a_cards[index]
  //this.cash_back.aktive=a_cards.filter((n)=> n===i);
    this.cash_back.back.push(i);
    ///let w=a_cards.indexOf(my_card);console.log(`w${w}`)
    //a_cards.splice(w,1);

    result.push('back')}else if(e6){let v=a_cards.indexOf(i);this.cash_back.back.push(i),a_cards.splice(v,1),result.push('back');return 0}})
console.log(result);
console.log("4:"+this.cash_back.aktive)
if ((result.includes('back'))){return true;}
else {return false};
}




//событие карта на столе
async imgclick(e){if( e.target .style.top ==='-256px')return
e.preventDefault

let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)
let task=this.task(j,k)
if (await task===true){//если карту покрыл
    let xx=(this.role==='defender')  
   this.passes?passesMapping[this.passes](e.target):'';
   e.target .style.top = '-256px';
   e.target.classList.remove(`cards_number-${6}-hover`);
   e.target.style.transform = 'none';
  this.cash[j][k]=this.players[j][k];
  xx?this.cash_back.back.push(this.players[j][k]):this.cash_back.aktive.push(this.players[j][k])//ggg
  this.players[j].splice(k,1,null)
 

   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"cach":this.cash,"role":this.role};//отправка рендера всем
}

}
taks(){console.log(`taks()`)
let a=(this.role==='attacker')?0:1;

    this.w_m={type:"set","taks":`${a}`,"players":this.target,"id":this.id,"name":this.name,"deck_id":this.deck_id,"role":this.role};

}



//отправка рендера всем игрокам
set w_m(send){
    this.ws.send(JSON.stringify(send));
}
//обработчик сообщения сервера
async echo(e){ let message=JSON.parse(e.data) ;
(message.type==="set"&&!message.taks)?await this.echorender(message):null;
((message.type==="set")&&(Number(message.taks)===1))?this.rout(message):null;
((message.type==="set")&&(Number(message.taks)===0))?this.rout(message):null;
}

//рендер игры 
async echorender(e){
    console.log("1+:"+this.cash_back.aktive)
 let  j=Number(e.players) 
 let k=Number(e.pos)
 let p1=this.players[j]
 //console.log(this.players);
if(e.id===this.id){return}
 else{
   let xx=(e.role==='defender')//если мсг от кроющ

    this.cash[j][k]=this.players[j][k];
   !xx?this.cash_back.aktive.push(this.players[j][k]):this.cash_back.aktive.push(this.players[j][k])
    console.log("2+:"+this.cash_back.aktive)
    //console.log(this.cash);
     this.players[j].splice(k,1,null)   
    let a=p1.map((x,i)=>{if(x!==null) return html`<img class="card_img cards_number-6" src="/img/card-back.png">`;});
    let c=this.cash[j].map((x,i)=>{
    let [sym, ra] = [x[0],x[1]];
    let suit = suitsMapping2[sym];
    let im=`/img/${suit}${ra}.png`; 
    return html`<img class="card_img cards_number-6 " style="top:-256px;transform:none;${A[i]}"  src =${im}>` })
    let b=document.getElementById(e.id);
    
render( html`${a}${c}`,b)};

};

async defclick(e){if( e.target .style.top ==='-256px')return
e.preventDefault

let d= e.target.dataset;
let  j=Number(d.play) 
let k=Number(d.pos)
let task=this.task(j,k)
if (await task===true){//если карту покрыл
   this.passes?passesMapping[this.passes](e.target):'';
   e.target .style.top = '-256px';
   e.target.classList.remove(`cards_number-${6}-hover`);
   e.target.style.transform = 'none';
  this.cash[j][k]=this.players[j][k];
  this.cash_back.back.push(this.players[j][k])
  this.players[j].splice(k,1,null)
 

   this.w_m={type:"set","players":d.play,"pos":d.pos,"id":this.id,"name":this.name,"deck_id":this.deck_id,"cach":this.cash,"role":this.role};//отправка рендера всем
}
   
}






    
//стартовый рендер
renders(round){
    let ix=(this.role==="attacker")?"ваш ход(бито)":(this.role==="attacker2")?"подкидывайте карты(бито)":"вам крыться(беру)";
    let span=html`<span @click=${this.taks} class="badge bg-info text-dark">${ix}</span>`;
    let nn=(this.role==="attacker");
    let s=[];
    let n=this.target; 
    let pl=this.players.filter((x)=>x!==null);   
let t=pl[n] ;
for(let i=0;i<=this.players_count-1;i++){
let target=(pl[i]===t) 
pl[i]=pl[i].filter((x)=>x!==null)
let img=target?pl[n].map((x,i)=>{
let [symbol, rank] = [x[0],x[1]];
let suit = suitsMapping2[symbol];
let im=`/img/${suit}${rank}.png`; 
return html`<img @click=${nn?this.imgclick:this.defclick} class="card_img cards_number-6 cards_number-6-hover r" style="" data-play="${n}" data-pos="${i}" src =${im}>`})
  :pl[i].map((x,i)=>{return html`<img class="card_img cards_number-6" src="/img/card-back.png">`})
  let index=Math.abs(i-n)
  index=s.includes(index)?3:index;
  s.push(index)
//console.log(s)
let container= !round?document.getElementById(`${index}count`):document.getElementById(`${this.deck_id[i]}`);
!round?container.id=this.deck_id[i]:null
render( html`${img}${index===0?span:null}`,container)};
};
s=[];
};

export const renderPlayerRoles = (players, attacker, defender,target) => {
    let s=[];
    for (let i = 0; i < players.length; i += 1) {
        let index=Math.abs(i-target)
        index=s.includes(index)?3:index;
        s.push(index)     
        
        const playerRoleTextEl = document.querySelector(`.player${index}-role`);
        let a=((attacker[0][0]===players[i][0][0])&&(attacker[0][1]===players[i][0][1]))
        let b=((defender[0][0]===players[i][0][0])&&(defender[0][1]===players[i][0][1]))
        //console.log( a)
        if (a) {
            playerRoleTextEl.textContent = 'attacker';
        } else if (b){
            playerRoleTextEl.textContent = 'defender';
        }
    }
    s=[];
};

export const renderPlayersNames = () => {
    for (let i = 0; i < 4; i += 1) {
        const playerNameTextEl = document.querySelector(`.player${i}-name`);
       
        playerNameTextEl.textContent = `player${i}`;
    }
};

export const renderDeck = (deck) => {
    let t = deck[deck.length - 1];
    const [symbol, rank] = [t[0],t[1]];
    const suit = suitsMapping2[symbol];
    let im=`/img/${suit}${rank}.png`;


    //console.log(lastCard)
    const container = document.querySelector('.deck_flex');

  let active_suit= html`<img class="card_img cards_number-lastCard cards_number-lastCard-hover" src=${im}></img>`;
    
    
  //console.log(deck)
  let deckCardsmap = deck.map((m,index)=> {return html`<img class="card_img deck_card" src="/img/card-back.png" style="top:${index * 2}px ;">`})

return render( html`${active_suit},${deckCardsmap}`,container)

};