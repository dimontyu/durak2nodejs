import {html} from 'lit';
import {suitsMapping2}from './static.js';


export function render_deck(){
	
	let deck=this.deck;
	if(deck.length !==0){
    let t = deck[0];
    const [symbol, rank] = [t[0],t[1]];
    const suit = suitsMapping2[symbol];
    let im=`${suit}${rank}`;
	

  let active_suit= html`<span class="${im} card_img cards_number-lastCard cards_number-lastCard-hover"></span>`;
    
    
  //console.log(deck)
  let deckCardsmap = deck.map((m,index)=> {return html`<span class="card-back deck_card" style="top:${index * 2}px ;"></span>`});
  deckCardsmap.pop()

return html`${active_suit},${deckCardsmap}`
	}
};