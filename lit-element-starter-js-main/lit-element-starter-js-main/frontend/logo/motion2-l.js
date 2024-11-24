import {LitElement, html} from 'lit';
import {animate, AnimateController, flyBelow, fade} from '@lit-labs/motion';
import {styles} from './styles2.js';
const g0 = ['H', 'T', 'M','L',"5","-",'G','A','M','E','S'];
const g00 = ['D', 'U', 'R','A',"K","-",'G','A','M','E'];
const simbol_card = ['diamonds', 'clubs', 'hearts','spades'];
const number_card = ['6', '7', '8','9','10','J','Q','K','A'];
const eventm = new Event("more");
/* on----------------------------------------------- *//* --------------------------------class MotionLit*/ 
export class MotionLit extends LitElement {
  static properties = {
    letters: {type: Array},
  };
  static styles = styles;

logo = number_card;  
duration = 3000;
controller = new AnimateController(this, {
    defaultOptions: {
      keyframeOptions: {
        duration: this.duration,
        fill: 'backwards',
      },
    },
    onComplete: () => this.changeLayout(),
  });
  
  constructor() {
    super();
	this.a=false;
    this.addEventListener('click', () => {this.clickHandler(),false});
    this.letters = this.logo;
	this.count=0;
  }
 /* ----------------------------------------------- */ 
logotext(delayTime){return html`
      ${this.letters?.map(
        (letter, i) => html`<span
            class=${i>5?"letter2":"letter"}
            ${animate({
              keyframeOptions: {
                delay: i * delayTime,
				id:`5877yt`,
              },
              in: fade,
              out: flyBelow,
            })}
            >${letter}</span
          >`
      )}
`;}
delaycard(i,count){return `./img/${(simbol_card[count])+number_card[i]}.png`}
/* ----------------------------------------------- */

logocards(delayTime){this.shadowRoot?.querySelector(".letter3")?.dispatchEvent(eventm);  return html`
      ${this.letters?.map(
        (letter, i) => html`<span id='${(simbol_card[this.count])+number_card[i]}'
            class=${i>5?"letter3":"letter3"} @more=${handleEvent}
			style='background-image:url(${this.delaycard(i,this.count)});background-size: cover;'
            ${animate({
              keyframeOptions: {
                delay: i * delayTime,
				id:`${(simbol_card[this.count])+number_card[i]}`,
              },
			  
              in: fade,
              out: flyBelow,
            })}
            >${g0[i]}</span>`
			
      )}
`;}

/*render -----------------------------------------------render */
  render() {
	    
    const delayTime = this.duration / (this.letters.length * 2.5);
	window.requestAnimationFrame(animate);
    return this.logocards(delayTime)
  }
/* ----------------------------------------------- */
  clickHandler() {
	  this.a=this.a?false:true;
    if (this.controller.isAnimating) {
      //this.controller.togglePlay();
	 this.a?this.controller.pause():this.controller.play();;
	  
    } else {
      this.changeLayout();
	  
    }
  }
/* ----------------------------------------------- */
  changeLayout() {
	 
	  this.count>3?this.count=0:null;
	let n=this.letters.length;

   n?[this.count +=1,this.letters=[]]:[null,this.letters=this.logo] ;
  }
};
/*end ----------------------------------------------- *//* ------------------------------class MotionLit */
customElements.define('motion-lit', MotionLit);
/* ----------------------------------------------- */

function handleEvent(ev){

let set1 = 0;
let scale1 = 1;	
ev.target.getAnimations().forEach(function (animation) {
  console.log(animation.id);
  ev.target.textContent=`${animation.id}`
}),
/* -- document.querySelector("#start_game3")*/			
[start_game2,start_game3,start_game4].forEach((i)=>{
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
  
animation.onfinish = (event_animate) => {event.target.textContent=`${event.clientX}${event_animate.target.id}`; },animation.commitStyles();		
})
}),
/* -- */	
//ev.target.textContent=`${ev.target.animate.id}`,
false,
ev.preventDefault()
};

//fill: "forwards" fill: "backwards"

//start_game3.addEventListener("click", (event) => {console.log('event.target')});
