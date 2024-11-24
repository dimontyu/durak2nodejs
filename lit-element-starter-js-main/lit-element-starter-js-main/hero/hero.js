import {LitElement} from 'lit';
     
import { AnimateController,} from '@lit-labs/motion';
	import {Text,data,onFrames}from "./herodata";  
	import {Style}from "./style.js"; 
	import {Html}from "./html.js";
 class MyElement extends LitElement {
        static styles =Style; 
        static active; 
        static properties = {
          data: {},
          detail: {},
		  d:{attribute: 'data-d',reflect: true},
        };

        constructor() {
          super();
          this.data = data;
		  //this.d='';
		  this.active = true;
          this.REf();
        }
	_controller = new AnimateController(this, {
            defaultOptions: {
              keyframeOptions: {
                duration: 750,
                easing: 'ease-in-out',
                fill: 'backwards',
              },
              onFrames,
            },
          });	
		

        render() {
        return Html.call(this,Text)
        }

        onClick(e, item) {
		this.active = false;	
			//window.location.hash=item?.value??'DOM';
			item?.value?
			history.pushState({ page:item?.id },'hero.html','hero.html'+'#'+item?.value ):
			history.pushState({ page:item?.id },'hero.html','hero.html'+'#'+"DOM" );
			//console.log(window.location.hash)
			const url = new URL(self.location);
const hash=url.pathname+url.hash;console.log(hash);
          if (this._controller.isAnimating) {
            this._controller.togglePlay();
          } else {
            this.detail = item;
          }
        }
REf(){ window.onpopstate =(event)=> {
	
	this.active=true;	 
  
 // this.dataset.d=JSON.stringify(event.state)
  this.d=JSON.stringify(event.state)
  let a=JSON.parse(this.d);
  this.detail=data[a?.page]
  console.log('window.onpopstate')	
};}	
		
      }

      customElements.define('my-element', MyElement);	  
	  
	/*  window.onpopstate = function (event) {
	MyElement.active=true;	 
  console.log(
    "location: " +
      document.location +
      ", state: " +
      JSON.stringify(event.state),
  );
  //MyElement.properties.detail={id: 1, value: 'Dogs', summary: 'Dogs have a lot of energy.'}
  document.querySelector('my-element').setAttribute('d',JSON.stringify(event.state));
  console.log('window.onpopstate')
};  */
