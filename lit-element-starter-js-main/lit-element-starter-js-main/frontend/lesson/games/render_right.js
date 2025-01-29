import {html} from 'lit';


export function render_right(right,sp,span_u3,er){
console.log(er)	
return html`<div  class="right">

 <div id="3count" class="player3CardsContainer"style='z-index:${this._role[3]==='defender'?2:-1}'>${right}</div>
  <div class="player-title">
    <h4 class="text-h4">
	${sp}
	${span_u3}
	
      <span class="player3-name textB">${er.length>3?er:this._pos3}${er}</span>
    </h4>
    <h4 class="text-h4">
      <span class="player3-role textA">${this._role[3]}</span>
    </h4>
  </div>
 

</div>`}