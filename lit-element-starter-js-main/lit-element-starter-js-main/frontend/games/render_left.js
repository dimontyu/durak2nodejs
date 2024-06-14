import {html} from 'lit';



export function render_left(left,sp,span_u2,er){
	console.log(er)
	
return html`<div  class="left">

<div id="2count" class="player2CardsContainer" style='z-index:${this._role[2]==='defender'?2:-1}'>${left}</div>
  <div class="player-title">
    <h4 class="text-h4">
	${sp}
	${span_u2}
	
      <span class="player2-name textB">${er.length>3?er:this._pos2}</span>
    </h4>
    <h4 class="text-h4">
      <span class="player2-role textA">${this._role[2]}</span>
    </h4>
  </div>
  

</div>`}
