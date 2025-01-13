import {animate ,flyBelow, fade,none} from '@lit-labs/motion';
import {styleMap} from 'lit/directives/style-map.js'; 
import { html} from 'lit';
import {suitsMapping2,A,passesMapping}from './static.js';
import {positing}from './positing.js';
 const a = '-255';
  
 const fly = [
        [{transform:`translateY(0px)`}],
        [{transform:`translateY(-236px)`}],
        [{transform: `translateY(-251px) `}],
		[{transform: `translateY(-255px) `}],
        [{transform: `translateY(${a}px) translateX(${a}px)`}],
             ]; 
	
	
 const logoOptions = () => ({
            keyframeOptions: {	
              duration: 1000,
			   fill: 'backwards',//'forwards',
			   
            },
            in:fly[0] ,
            out:fly[3],
          });
const logoOptions2 = () => ({
            keyframeOptions: {	
              duration: 10,
			   fill: 'backwards',
            },
            in:fly[0] ,
            out:fly[3],
          });		  
		  
const styles=function(ww,ps,p){

	
let a=positing[ps-1].top2;
let a_trm=`translateY(${a})scale(1.15)`;
let l_trm=ww;
//let r_trm=`translateY(${a})`;
let trm=(ww?.length>10)?l_trm:a_trm;
let Left=(ww?.length>10)?A[ps]:`${!ww?A[ps-1]:ww}`
//console.log(Left)
let s={transform:trm,
left:Left,
width: `57px`,
margin:'2px'
}	
return s };	


	  
//УСТАНОВИТЬ Z-INDEX для битых карт ниже!!!Ё
//УСТАНОВИТЬ жесткие кадры для каждого хода		  
		  

 
 export function Img_render(e,i,p){


 
if(e.id===this.id){return}
if(i===this._pos0){return}
if(e.type==='round-taks'){return}
let ii=(i===this._pos2)||(i===this._pos3)

function sort(sw,x){
let a=this._a;
let m=[];	
//найти индекс хода для позиции пары  
let index=a.map((item,index,r)=>{if((item[0])===(x[0])&&(item[1])===(x[1]))return index}).filter((i)=>i!==undefined)[0];//console.log(index);
//нормализация стилей карт	
positing.forEach((pos,i,as)=>	
{if(ii&&(sw===pos.transform)){m.push(as[index].transform);/* console.log('ii&&(sw===pos.transform)'); */return }

if(ii&&(sw===pos.left)){ m.push(as[index].transform);/* console.log('ii&&(sw===pos.left)'); */return}

if(!ii&&(sw===pos.transform)){ m.push(as[index].left);/* console.log('!ii&&(sw===pos.transform)'); */return}

});//m.length!==0?console.log(`m${m}`):console.log(`sw${[sw]}`);
return m.length!==0?m:[sw];
};

this.passes=e.passes;


let back_card=this.players[i].map((x,i)=>{if(x!==null) return html`<span class="card-back card_img cards_number-6" style="top:0px;"></span>`;});
	
 
let ps=e.passes;

	
if((this._myrole==='attacker')||(this._myrole==='attacker2')){
	
	//let wm3=this.konduktor.get_wm3();
	let wm2=this.konduktor.get_wm2();
	let wm1=this.konduktor.get_wm1();
	let wma=this.konduktor.atack_card();
	//console.log(wma)
	let y=this.cash[i];
    let action_card=y.map((x,i,a)=>{if(x!==null){
	let rr=(Boolean(wma)&&((wma[0]===x[0]) && (wma[1]===x[1])))===true;
	//console.log(rr)
	//console.log(x)
	let sw=(wm2.has(x))?wm1.get(wm2.get(x)):'';//если пара карт
	let ww;
	ww=sw?sort.call(this,sw,wm2.get(x))[0]:wm1.get(x);//если пара или одна
	
let var_styl=styleMap(styles(ww,ps,p))

    let [sym, ra] = [x[0],x[1]];
    let suit = suitsMapping2[sym];
    let img=`${suit}${ra}`; 
    return rr? html`<span class="${img} card_img cards_number-6  " 
	
	style=${var_styl}
	${animate(logoOptions(true))} ></span>`: html`<span class="${img} card_img cards_number-6 " 
	
	style=${var_styl}
	 ></span>` }})
	
 return html`${back_card}${action_card}`
 }
  
if(this._myrole==='defender'){

 let wm3=this.konduktor.get_wm3();
 let wma=this.konduktor.get_aktive()[(this.konduktor.get_aktive()).length-1];
 //console.log(wma)
 let y=this.cash[i];
    let action_card=y.map((x,i,a)=>{if(x!==null){
		//console.log(x)
		let rr=(Boolean(wma)&&((wma[0]===x[0]) && (wma[1]===x[1])))===true;
		//console.log(rr)
	let ww=(wm3.has(x))?wm3.get(x):null	
	
let var_styl=styleMap(styles(ww,ps,p))
	
    let [sym, ra] = [x[0],x[1]];
    let suit = suitsMapping2[sym];
    let img=`${suit}${ra}`; 
   return rr? html`<span class="${img} card_img cards_number-6 " 
	${animate(logoOptions())}
	style=${var_styl}
	></span>`:html`<span class="${img} card_img cards_number-6 " 
	style=${var_styl}
	></span>` 
	}})
	
 
	
 return html`${back_card}${action_card}`
 
 
 
	
 
 
}


 
 };
