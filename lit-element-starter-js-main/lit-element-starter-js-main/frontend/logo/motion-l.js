import {LitElement, html} from 'lit';
import {animate, AnimateController, flyBelow, fade} from '@lit-labs/motion';
import {styles} from './styles2.js';
const g0 = ['H', 'T', 'M','L',"5","-",'G','A','M','E','S'];
const g00 = ['D', 'U', 'R','A',"K","-",'G','A','M','E'];
const simbol_card = ['diamonds', 'clubs', 'hearts','spades'];
const number_card = ['6', '7', '8','9','10','J','Q','K','A'];

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
    this.addEventListener('click', () => {this.clickHandler(this.a),false});
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
delaycard(i,count){return `./webp/${(simbol_card[count])+number_card[i]}.webp`}
/* ----------------------------------------------- */

logocards(delayTime){ return html`
      ${this.letters?.map(
        (letter, i) => html`<span id='${(simbol_card[this.count])+number_card[i]}'
            class=${i>5?"letter3":"letter3"}
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
  clickHandler(a) {
	  //this.a=this.a?false:true;
	  this.a=a===false;
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


//fill: "forwards" fill: "backwards"

//start_game3.addEventListener("click", (event) => {console.log('event.target')});
